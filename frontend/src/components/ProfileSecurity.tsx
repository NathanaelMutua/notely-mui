import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axiosInstance from "../api/axios";
import axios from "axios";

interface Passwords {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

function ProfileSecurity() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["update-password"],
    mutationFn: async (passwordDetails: Passwords) => {
      const response = await axiosInstance.patch(
        "/api/auth/password",
        passwordDetails
      );
      console.log(response);
      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setFormError(error.response?.data.message);
      } else {
        setFormError("An Error Occurred in SignUp!");
      }
    },
  });

  function handlePasswordUpdate() {
    setFormError("");
    const passwordDetails = {
      password: currentPassword,
      newPassword,
      confirmPassword,
    };
    mutate(passwordDetails);
    setNewPassword("");
    setCurrentPassword("");
    setConfirmPassword("");
  }
  return (
    <Box component="section">
      <Card sx={{ padding: "3rem", minHeight: "20rem", marginTop: "2.5rem" }}>
        <Typography variant="h4" fontWeight="bold">
          Profile Security
        </Typography>
        <Typography variant="body1">You can update your password</Typography>
        <CardContent>
          <Stack py={3}>
            {formError && (
              <Stack pb={2}>
                <Alert
                  severity="error"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    fontSize: "1.2rem",
                    color: "rgba(152, 15, 0, 1)",
                  }}
                >
                  {formError}
                </Alert>
              </Stack>
            )}
            <Stack pb={3}>
              <Typography variant="h5" fontWeight="bold" fontSize="1.4rem">
                Current Password
              </Typography>
              <TextField
                placeholder="Current Password"
                type="password"
                size="small"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Stack>
            <Stack pb={1}>
              <Typography variant="h5" fontWeight="bold" fontSize="1.4rem">
                New Password
              </Typography>
              <TextField
                placeholder="New Password"
                type="password"
                size="small"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Stack>
            <Stack pb={1}>
              <Typography variant="h5" fontWeight="bold" fontSize="1.4rem">
                Confirm Password
              </Typography>
              <TextField
                placeholder="Confirm Password"
                type="password"
                size="small"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Stack>
          </Stack>
          <CardActions sx={{ paddingInline: 0 }}>
            <Button variant="contained" onClick={handlePasswordUpdate}>
              Update Password
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProfileSecurity;
