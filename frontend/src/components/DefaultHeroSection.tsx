import { Box, Button, Stack, Typography } from "@mui/material";
import { FaArrowRightFromBracket, FaRegNoteSticky } from "react-icons/fa6";
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
              Welcome to <span style={{ color: "#001b64ff" }}>Notely</span>
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
              Your personal space for capturing ideas, organizing thoughts, and
              turning inspiration into action. Beautiful, secure, and designed
              for the way you think.
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
      </Box>
      <FeaturesSection />
      <DefaultCallToAction />
    </Box>
  );
}

export default DefaultHeroSection;
