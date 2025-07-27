import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Markdown from "../components/Markdown";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Entry {
  title: string;
  synopsis: string;
  content: string;
}

function CreateEntryPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [content, setContent] = useState("");
  const [formError, setFormError] = useState("");

  function handleCreateEntry() {
    setFormError("");
    const newEntry = { title, synopsis, content };
    mutate(newEntry);
  }

  function clearData() {
    setTitle("");
    setSynopsis("");
    setContent("");
  }

  const { mutate, isPending } = useMutation({
    mutationKey: ["create-entry"],
    mutationFn: async (newEntry: Entry) => {
      const response = await axiosInstance.post("/api/entry", newEntry);
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
    onSuccess: () => {
      navigate("/notes");
      clearData();
    },
  });
  return (
    <Box minHeight="100vh" padding={3}>
      <Grid container justifyContent="center" spacing={3} pt={7}>
        <Grid size={{ xs: 11, sm: 11, md: 8, lg: 5 }}>
          <Card sx={{ minHeight: "30rem", p: 3 }}>
            <CardContent>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Create New Entry
              </Typography>
              {formError && <Alert severity="error">{formError}</Alert>}
              <Stack spacing={3}>
                <Stack>
                  <Typography variant="h6" fontWeight="bold">
                    Title
                  </Typography>
                  <TextField
                    name="title"
                    size="small"
                    placeholder="Title"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Stack>
                <Stack>
                  <Typography variant="h6" fontWeight="bold">
                    Synopsis
                  </Typography>
                  <TextField
                    name="synopsis"
                    placeholder="Synopsis"
                    fullWidth
                    multiline
                    rows={2}
                    value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)}
                  />
                </Stack>
                <Stack>
                  <Typography variant="h6" fontWeight="bold">
                    Content
                  </Typography>
                  <TextField
                    name="markdownContent"
                    placeholder="Content (Strictly Markdown)"
                    fullWidth
                    multiline
                    rows={7}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Stack>
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                  loading={isPending}
                  onClick={handleCreateEntry}
                >
                  create
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 11, sm: 11, md: 8, lg: 5 }}>
          <Card sx={{ minHeight: "30rem", p: 3 }}>
            <CardContent>
              <Typography variant="h3" fontWeight="bold">
                Preview
              </Typography>
              <Typography variant="body1" gutterBottom fontSize="1.4rem">
                What your entry will look like...
              </Typography>
              <Divider
                sx={{
                  my: 2,
                  height: 3,
                  bgcolor: "rgba(25, 118, 210, 1)",
                  borderRadius: "5px",
                }}
              />
              <Stack spacing={1}>
                {title ? (
                  <Typography variant="h3" fontWeight="bold" fontSize="4rem">
                    {title}
                  </Typography>
                ) : (
                  <Typography variant="h4" fontWeight="bold" fontSize="2.1rem">
                    Your Title
                  </Typography>
                )}
                {synopsis ? (
                  <Typography variant="body1" fontSize="1.2rem" pb={1}>
                    {synopsis}
                  </Typography>
                ) : (
                  <Typography variant="body1" fontSize="1.2rem" pb={1}>
                    Your synopsis will appear right here...
                  </Typography>
                )}
                <Divider
                  sx={{
                    my: 1,
                    height: 2,
                    bgcolor: "rgba(255,255,255,0.4)",
                    borderRadius: "2px",
                  }}
                />
                {content ? (
                  <span
                    style={{ fontSize: "1.4rem" }}
                    className="markdown-body"
                  >
                    <Markdown>{content}</Markdown>
                  </span>
                ) : (
                  <Typography variant="body1" fontSize="1.4rem">
                    Your content for your blog post will appear right here...
                  </Typography>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateEntryPage;
