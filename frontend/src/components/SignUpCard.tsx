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
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import axiosInstance from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

interface NotelyUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

function SignUpCard() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  function clearData() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setFormError("");
  }

  function handleSignUp() {
    setFormError("");
    const newNotelyUser = { firstName, lastName, email, username, password };
    mutate(newNotelyUser);
  }

  const { isPending, mutate } = useMutation({
    mutationKey: ["signup-user"],
    mutationFn: async (newNotelyUser: NotelyUser) => {
      const response = await axiosInstance.post(
        "/api/auth/register",
        newNotelyUser
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
      navigate("/sign-in");
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
          <MdPersonAddAlt1 style={{ color: "#fff" }} />
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
              Create Account
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
                    fontSize: "1.4rem",
                    color: "rgba(152, 15, 0, 1)",
                  }}
                >
                  {formError}
                </Alert>
              </Stack>
            )}
            <Stack>
              <Typography variant="h5" fontSize="1.4rem" fontWeight="bold">
                First Name
              </Typography>
              <TextField
                placeholder="John"
                size="small"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Stack>
            <Stack>
              <Typography variant="h5" fontSize="1.4rem" fontWeight="bold">
                Last Name
              </Typography>
              <TextField
                placeholder="Doe"
                size="small"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Stack>
            <Stack>
              <Typography variant="h5" fontSize="1.4rem" fontWeight="bold">
                Email
              </Typography>
              <TextField
                placeholder="johndoe@gmail.com"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Stack>
            <Stack>
              <Typography variant="h5" fontSize="1.4rem" fontWeight="bold">
                Username
              </Typography>
              <TextField
                placeholder="johndoe45"
                size="small"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Stack>
            <Stack>
              <Typography variant="h5" fontSize="1.4rem" fontWeight="bold">
                Password
              </Typography>
              <TextField
                type="password"
                placeholder="Create a strong password"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
          </Stack>
          <Button
            variant="contained"
            onClick={handleSignUp}
            loading={isPending}
            sx={{ marginTop: "3rem", fontSize: "1.4rem" }}
            fullWidth
          >
            Create Account
          </Button>
          <Typography
            variant="body2"
            textAlign="center"
            fontSize="1.4rem"
            pt={2}
          >
            <Link
              to="/sign-in"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Already have an account?{" "}
              <span style={{ color: "#1976d2" }}>Sign-In Instead</span>
            </Link>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SignUpCard;
