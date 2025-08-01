import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import FormattedDate from "./FormattedDate";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { useUserData } from "../hooks/useUserData";
import ImageUpload from "./ImageUpload";

function ProfileLandingAndImage() {
  // const [avatar, setAvatar] = useState("");
  const [trashCount, setTrashCount] = useState(0);
  const [entriesCount, setEntriesCount] = useState(0);
  const { user } = useUserData();

  // request for trashed entry count
  useQuery({
    queryKey: ["retrieve-trashed-entries-count"],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/entry/trash");
      console.log(response.data.message);
      setTrashCount(response.data.trashed_entries.length);
      return response.data.message;
    },
  });

  // request for entry count
  useQuery({
    queryKey: ["retrieve-entries-count"],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/entry");
      console.log(response.data.message);
      setEntriesCount(response.data.entries.length);
      return response.data.message;
    },
  });

  return (
    <Box component="section">
      <Stack alignItems="right">
        <Typography variant="h2" fontWeight="bold" color="text.primary">
          Profile
        </Typography>
        <Typography variant="body1" color="text.primary" pb={1}>
          View all your profile details here
        </Typography>
        <Divider
          sx={{
            my: 2,
            height: 3,
            bgcolor: "rgba(255,255,255,0.4)",
            borderRadius: "5px",
          }}
        />
      </Stack>
      <Grid container spacing={3} justifyContent="center" width="100%">
        <Grid size={{ xs: 11, sm: 11, md: 9, lg: 4 }}>
          <Card sx={{ minHeight: "38rem" }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding="3rem"
            >
              <Stack pb={2}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  fontSize="3rem"
                  textTransform="capitalize"
                  textAlign="center"
                >
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Typography
                  variant="body2"
                  fontSize="1.1rem"
                  textAlign="center"
                >
                  Notely User
                </Typography>
              </Stack>
              <ImageUpload />
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 11, sm: 11, md: 9, lg: 8 }}>
          <Card sx={{ minHeight: "38rem", padding: "3rem" }}>
            <Typography variant="h4" fontWeight="bold">
              Bio & other details
            </Typography>
            <Divider
              sx={{
                my: 2,
                height: 2,
                bgcolor: "rgba(255,255,255,0.4)",
                borderRadius: "5px",
              }}
            />
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid size={6}>
                <Stack>
                  <Typography variant="h6" fontSize="1.2rem">
                    Username
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    @ {user?.username}
                  </Typography>
                </Stack>
                <Divider
                  sx={{
                    my: 1.5,
                    height: 1.5,
                    bgcolor: "rgba(255,255,255,0.4)",
                    borderRadius: "5px",
                  }}
                />
                <Stack>
                  <Typography variant="h6" fontSize="1.2rem">
                    Email
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {user?.email}
                  </Typography>
                </Stack>
                <Divider
                  sx={{
                    my: 2,
                    height: 1.5,
                    bgcolor: "rgba(255,255,255,0.4)",
                    borderRadius: "5px",
                  }}
                />
                <Stack>
                  <Typography variant="h6" fontSize="1.2rem">
                    Last Profile update
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    <FormattedDate isoDate={user!.lastProfileUpdate} />
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={6}>
                <Stack>
                  <Typography variant="h6" fontSize="1.2rem">
                    Total Entries
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    fontSize="3rem"
                    color="primary"
                  >
                    {entriesCount}
                  </Typography>
                </Stack>
                <Divider
                  sx={{
                    my: 1.5,
                    height: 1.5,
                    bgcolor: "rgba(255,255,255,0.4)",
                    borderRadius: "5px",
                  }}
                />
                <Stack>
                  <Typography variant="h6" fontSize="1.2rem">
                    Trashed Entries
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    fontSize="3rem"
                    color="rgba(198, 62, 62, 1)"
                  >
                    {trashCount}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileLandingAndImage;
