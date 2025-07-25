import { Box, Stack, Typography } from "@mui/material";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaRegNoteSticky } from "react-icons/fa6";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

function DefaultFooter() {
  return (
    <Box
      component="section"
      minHeight="10vh"
      sx={{
        backgroundImage: "url(/background-turquise.jpeg)",
        backgroundSize: "cover",
      }}
      marginTop={1}
    >
      <Stack justifyContent="center" alignItems="center" p={2} spacing={2.1}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <Stack
            direction="row"
            display="flex"
            alignItems="center"
            borderRadius="20px"
          >
            <Box
              color="secondary"
              fontSize="2.4rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingRight="0.5rem"
              margin="0.3rem"
              borderRadius="5px"
            >
              <FaRegNoteSticky />
            </Box>
            <Typography variant="h1" fontWeight="bold" fontSize="2rem">
              Notely
            </Typography>
          </Stack>
        </Link>

        <Link
          to="https://github.com/NathanaelMutua"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "rgba(0, 27, 100, 1)",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            backgroundColor: "rgba(134, 173, 196, 0.77)",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            fontSize="2rem"
          >
            <SiFacebook />
            <SiInstagram />
            <SiLinkedin />
            <BsTwitterX />
            <BsDiscord />
            <SiGithub />
          </Stack>
        </Link>
        <Box>
          <Typography variant="body2" fontSize="1.4rem" color="text.primary">
            Capture . Organize . Experience
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        padding={0.5}
      >
        <Typography variant="h6" fontWeight="bold" fontSize="1.4rem">
          <Link
            to="https://github.com/NathanaelMutua"
            target="_blank"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Nxthxnael
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}

export default DefaultFooter;
