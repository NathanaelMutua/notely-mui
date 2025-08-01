import { useState, useRef } from "react";
import { Button, Box, Typography, Alert, Stack, Avatar } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { useUserData } from "../hooks/useUserData";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const { user } = useUserData();

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      // Convert file to base64
      const base64 = await fileToBase64(file);

      const response = await axiosInstance.post("/api/user/upload-avatar", {
        imageUrl: base64,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-user-data"] });
      setSelectedFile(null);
      setPreviewUrl(null);
      setError("");
    },
    onError: (error: any) => {
      setError(
        error.response?.data?.message || "Failed to upload image check size"
      );
    },
  });

  const removeMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.delete("/api/user/avatar");
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-user-data"] });
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || "Failed to remove avatar");
    },
  });

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }
      setSelectedFile(file);
      setError("");

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadMutation.mutate(selectedFile);
    }
  };

  const handleRemove = () => {
    removeMutation.mutate();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Function to get user initials
  const getUserInitials = () => {
    const firstInitial = user?.firstName?.[0]?.toUpperCase() || "";
    const lastInitial = user?.lastName?.[0]?.toUpperCase() || "";
    return firstInitial + lastInitial;
  };

  // Function to render avatar or initials
  const renderAvatar = () => {
    if (user?.avatar && user.avatar !== "null") {
      return (
        <img
          src={user.avatar}
          alt="Avatar"
          style={{
            width: "16rem",
            height: "16rem",
            borderRadius: "50%",
            objectFit: "cover",
            marginBlock: "1rem",
          }}
        />
      );
    } else {
      return (
        <Avatar
          sx={{
            width: "16rem",
            height: "16rem",
            fontSize: "5rem",
            fontWeight: "bold",
            backgroundColor: "#1565c0",
            color: "#fff",
            my: "1rem",
          }}
        >
          {getUserInitials()}
        </Avatar>
      );
    }
  };
  return (
    <Box mt={1}>
      <Stack spacing={2}>
        {error && (
          <Alert severity="error" sx={{ fontSize: "1.2rem" }}>
            {error}
          </Alert>
        )}

        <Box display="flex" justifyContent="center" mb={2}>
          {renderAvatar()}
        </Box>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          style={{ display: "none" }}
        />

        {previewUrl && (
          <Box display="flex" justifyContent="center" mb={2}>
            <img
              src={previewUrl}
              alt="Preview"
              style={{
                width: "16rem",
                height: "16rem",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #1976d2",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                marginBlock: "1rem",
              }}
            />
          </Box>
        )}

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            onClick={triggerFileInput}
            disabled={uploadMutation.isPending}
          >
            Select Image
          </Button>

          {selectedFile && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={uploadMutation.isPending}
            >
              {uploadMutation.isPending ? "Uploading..." : "Upload Image"}
            </Button>
          )}

          {user?.avatar && user.avatar !== "null" && (
            <Button
              variant="outlined"
              color="error"
              onClick={handleRemove}
              disabled={removeMutation.isPending}
            >
              {removeMutation.isPending ? "Removing..." : "Remove"}
            </Button>
          )}
        </Stack>

        {selectedFile && (
          <Typography variant="body2" textAlign="center" color="text.secondary">
            Selected: {selectedFile.name} (
            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
          </Typography>
        )}
      </Stack>
    </Box>
  );
}

export default ImageUpload;
