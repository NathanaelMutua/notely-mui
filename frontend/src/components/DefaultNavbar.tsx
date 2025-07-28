import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { FaRegNoteSticky } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function DefaultNavbar() {
  const navigate = useNavigate();
  return (
    <Box component="nav">
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          zIndex: 1000,
          margin: "1rem",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          height: "4.5rem",
          width: "90vw",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <Stack
                direction="row"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="20px"
              >
                <Stack
                  color="secondary"
                  fontSize="2.4rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="0.5rem"
                  margin="0.3rem"
                  borderRadius="5px"
                >
                  <FaRegNoteSticky
                    style={{
                      animation: "blinkGlow 3.5s infinite ease-in-out",
                      color: "#001b64ff",
                    }}
                  />
                </Stack>
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  fontSize="2rem"
                  sx={{
                    transition:
                      "transform 0.2s ease-in-out, text-shadow 0.2s ease-in-out, color 0.15s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      textShadow: "0 2px 6px rgba(0,0,0,0.4)",
                    },
                    "&:active": {
                      transform: "scale(1.01)",
                      color: "#c2d1ffff",
                    },
                  }}
                >
                  Notely
                </Typography>
              </Stack>
            </Link>
            <Stack direction="row" height="3rem" spacing={2}>
              <Button variant="contained" onClick={() => navigate("/sign-in")}>
                Login
              </Button>
              <Button variant="contained" onClick={() => navigate("/sign-up")}>
                SignUp
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DefaultNavbar;
