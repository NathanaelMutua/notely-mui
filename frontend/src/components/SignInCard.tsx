import {
  Alert,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { CgEnter } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../api/axios";

interface NotelyUser {
  userIdentifier: string;
  password: string;
}

function SignInCard() {
  // const navigate = useNavigate();
  const [userIdentifier, setUserIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [emailUsernameState, setEmailUsernameState] = useState(true);

  function clearData() {
    setPassword("");
    setUserIdentifier("");
    setFormError("");
  }

  function handleSignIn() {
    setFormError("");
    const notelyUserDetails = { userIdentifier, password };
    mutate(notelyUserDetails);
  }

  const { isPending, mutate } = useMutation({
    mutationKey: ["signin-user"],
    mutationFn: async (notelyUserDetails: NotelyUser) => {
      const response = await axiosInstance.post(
        "/api/auth/login",
        notelyUserDetails
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
    onSuccess: () => {
      // navigate("/");
      clearData();
    },
  });

  return (
    <Grid
      container
      minHeight={"100vh"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        size={{ xs: 11, sm: 11, md: 9, lg: 6 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          height="100px"
          width="100px"
          borderRadius="50%"
          sx={{
            backgroundColor: "#fff",
            padding: "0.9rem",
            position: "absolute",
            transform: "translateY(30px)",
            zIndex: 0,
          }}
        />

        <Box
          height="60px"
          width="60px"
          borderRadius="50%"
          sx={{
            backgroundColor: "#1976d2",
            padding: "0.9rem",
            position: "absolute",
            transform: "translateY(45px)",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem",
            border: "2px solid #fff",
          }}
        >
          <CgEnter style={{ color: "#fff" }} />
        </Box>

        <Card
          sx={{
            minHeight: "30rem",
            width: "100%",
            marginTop: "8rem",
            padding: "3rem",
            paddingTop: "3rem",
            borderRadius: "15px",
          }}
        >
          <Stack
            textAlign="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h3" fontWeight="800" fontSize="2.5rem">
              Welcome Back
            </Typography>
          </Stack>
          <Stack spacing={1} pt={2}>
            {formError && (
              <Stack>
                <Alert
                  severity="error"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    fontSize: "1.2rem",
                    color: "rgba(152, 15, 0, 1)",
                  }}
                >
                  {formError}
                </Alert>
              </Stack>
            )}
            {emailUsernameState ? (
              <Stack
                spacing={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Stack width="100%">
                  <Typography variant="h5" fontSize="1.4rem" fontWeight="bold">
                    Email
                  </Typography>
                  <TextField
                    placeholder="johndoe@gmail.com"
                    size="small"
                    value={userIdentifier}
                    onChange={(e) => setUserIdentifier(e.target.value)}
                  />
                </Stack>
                <Stack width="100%">
                  <Typography
                    variant="h5"
                    fontSize="1.4rem"
                    fontWeight="bold"
                    width="100%"
                  >
                    Password
                  </Typography>
                  <TextField
                    type="password"
                    placeholder="Enter your password to login"
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                <Button
                  variant="outlined"
                  sx={{ width: "200px" }}
                  onClick={() => setEmailUsernameState(false)}
                >
                  Sign in with Username
                </Button>
              </Stack>
            ) : (
              <Stack
                spacing={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Stack width="100%">
                  <Typography
                    variant="h5"
                    fontSize="1.4rem"
                    fontWeight="bold"
                    width="100%"
                  >
                    Username
                  </Typography>
                  <TextField
                    placeholder="johndoe45"
                    size="small"
                    value={userIdentifier}
                    onChange={(e) => setUserIdentifier(e.target.value)}
                  />
                </Stack>
                <Stack width="100%">
                  <Typography
                    variant="h5"
                    fontSize="1.4rem"
                    fontWeight="bold"
                    width="100%"
                  >
                    Password
                  </Typography>
                  <TextField
                    placeholder="Enter your password to login"
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                <Button
                  variant="outlined"
                  sx={{ width: "200px" }}
                  onClick={() => setEmailUsernameState(true)}
                >
                  Sign in with Email
                </Button>
              </Stack>
            )}
          </Stack>
          <Button
            variant="contained"
            onClick={handleSignIn}
            loading={isPending}
            sx={{ marginTop: "3rem", fontSize: "1.4rem" }}
            fullWidth
          >
            Sign In
          </Button>
          <Typography
            variant="body2"
            textAlign="center"
            fontSize="1.4rem"
            pt={2}
          >
            <Link
              to="/sign-up"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Don't have an account?{" "}
              <span style={{ color: "#1976d2" }}>Sign-Up Instead</span>
            </Link>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SignInCard;
