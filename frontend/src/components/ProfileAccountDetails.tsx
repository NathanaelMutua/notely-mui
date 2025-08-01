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
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import axios from "axios";
import { useUserData } from "../hooks/useUserData";

interface User {
  firstName: string;
  lastName: string;
}

function ProfileAccountDetails() {
  const queryClient = useQueryClient();
  const { user } = useUserData();
  const [firstName, setFirstName] = useState(user?.firstName ?? "");
  const [lastName, setLastName] = useState(user?.lastName ?? "");
  const [username, setUsername] = useState(user?.username ?? "");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName ?? "");
      setLastName(user.lastName ?? "");
    }
  }, [user]);

  const { mutate, isPending } = useMutation({
    mutationKey: ["update-user-names"],
    mutationFn: async (userDetails: User) => {
      const response = await axiosInstance.patch("/api/user/info", userDetails);
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
      console.log(
        "ProfileAccountDetails: Update successful, invalidating query"
      );
      queryClient.invalidateQueries({ queryKey: ["fetch-user-data"] });
    },
  });

  function handleUpdateUser() {
    setFormError("");
    const userDetails = {
      firstName,
      lastName,
      username,
    };
    mutate(userDetails);
  }
  return (
    <Box component="section">
      <Card sx={{ padding: "3rem", minHeight: "20rem", marginTop: "2.5rem" }}>
        <Typography variant="h4" fontWeight="bold">
          Profile Account Details
        </Typography>
        <Typography variant="body1">
          You can update your first and last name
        </Typography>

        <CardContent>
          <Stack py={2}>
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
            <Stack pb={1}>
              <Typography variant="h5" fontWeight="bold" fontSize="1.4rem">
                First Name
              </Typography>
              <TextField
                placeholder="First name"
                size="small"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Stack>
            <Stack pb={3}>
              <Typography variant="h5" fontWeight="bold" fontSize="1.4rem">
                Last Name
              </Typography>
              <TextField
                placeholder="Last name"
                size="small"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Stack>
            <Stack pb={1}>
              <Typography variant="h5" fontWeight="bold" fontSize="1.4rem">
                Username
              </Typography>
              <TextField
                placeholder="Last name"
                size="small"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Stack>
          </Stack>
          <CardActions sx={{ paddingInline: 0 }}>
            <Button
              variant="contained"
              onClick={handleUpdateUser}
              loading={isPending}
            >
              Update Details
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProfileAccountDetails;
