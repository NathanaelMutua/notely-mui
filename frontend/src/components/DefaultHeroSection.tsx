import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import FeaturesSection from "./FeaturesSection";
import DefaultCallToAction from "./DefaultCallToAction";

function DefaultHeroSection() {
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
              <Stack textAlign="center">
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  fontSize={{ lg: "8rem" }}
                  color="text.primary"
                  pb={2}
                >
                  Modern Note Crafting
                </Typography>
                <Typography
                  variant="body1"
                  fontSize="2rem"
                  pb={6}
                  color="text.primary"
                >
                  Capture your thoughts with style. Organize your ideas with
                  intelligence. Experience note-taking re-imagined for the
                  modern world.
                </Typography>
              </Stack>
              <Stack direction="row" pt={4} spacing={3}>
                <Button
                  variant="outlined"
                  startIcon={<FaArrowRightFromBracket />}
                  style={{
                    padding: "0.5rem 4rem",
                    fontSize: "1.8rem",
                  }}
                  onClick={() => navigate("/sign-up")}
                >
                  Get Started Free
                </Button>
                <Button
                  variant="contained"
                  style={{
                    padding: "0.5rem 2rem",
                    fontSize: "1.8rem",
                  }}
                  onClick={() => navigate("/sign-in")}
                >
                  Sign In
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <FeaturesSection />
      <DefaultCallToAction />
    </Box>
  );
}

export default DefaultHeroSection;
