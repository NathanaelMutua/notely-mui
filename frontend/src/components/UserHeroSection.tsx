import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FaPenNib, FaRegNoteSticky } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import FeaturesSection from "./FeaturesSection";
import UserCallToAction from "./UserCallToAction";
import { useUserData } from "../hooks/useUserData";

function UserHeroSection() {
  const { user } = useUserData();
  const navigate = useNavigate();
  return (
    <Box component="section">
      <Box
        minHeight="100vh"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container width="100%" justifyContent="center">
          <Grid
            size={{ lg: 11 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Stack
              direction="row"
              flexWrap="wrap"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                height="8rem"
                width="8rem"
                borderRadius="50%"
                sx={{
                  backgroundColor: "#fff",
                  boxShadow: "4px 4px 10px 1px rgba(0,0,0,0.4)",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="4rem"
                color="#001b64ff"
                mb={4}
              >
                <FaRegNoteSticky />
              </Box>
              <Stack textAlign="center">
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  fontSize={{ lg: "8rem" }}
                  color="text.primary"
                >
                  Welcome back{" "}
                  <span
                    style={{ color: "#001b64ff", textTransform: "capitalize" }}
                  >
                    {user?.firstName}
                  </span>
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  fontSize={{ lg: "1.2rem" }}
                  color="text.primary"
                  textTransform="uppercase"
                  sx={{ letterSpacing: "15px" }}
                  pb={8}
                >
                  Home Of modern note crafting
                </Typography>
                <Typography
                  variant="body1"
                  fontSize="2rem"
                  pb={2}
                  color="text.primary"
                  width={{ lg: 1000 }}
                >
                  Your personal space for capturing ideas, organizing thoughts,
                  and turning inspiration into action. Beautiful, secure, and
                  designed for the way you think.
                </Typography>
              </Stack>
              <Stack direction="row" pt={4} spacing={3}>
                <Button
                  variant="contained"
                  startIcon={<FaPenNib />}
                  style={{
                    padding: "0.5rem 4rem",
                    fontSize: "1.8rem",
                  }}
                  onClick={() => navigate("/create")}
                >
                  Create New Note
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    padding: "0.5rem 2rem",
                    fontSize: "1.8rem",
                  }}
                  onClick={() => navigate("/")}
                >
                  Visit Profile
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <FeaturesSection />
      <UserCallToAction />
    </Box>
  );
}

export default UserHeroSection;
