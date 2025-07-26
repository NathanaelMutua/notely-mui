import { Box, Stack, Typography } from "@mui/material";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaRegNoteSticky } from "react-icons/fa6";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

function DefaultFooter() {
  return (
    <Box
      component="footer"
      minHeight="10vh"
      sx={{
        backgroundImage: "url(/background-turquise.jpeg)",
        backgroundSize: "cover",
        mt: 1,
      }}
    >
      <Stack justifyContent="center" alignItems="center" p={3} spacing={2}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <Stack direction="row" alignItems="center" borderRadius="20px">
            <Box
              fontSize="2.4rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              pr="0.5rem"
              m="0.3rem"
              borderRadius="5px"
              color="secondary"
            >
              <FaRegNoteSticky />
            </Box>
            <Typography fontWeight="bold" fontSize="2rem">
              Notely
            </Typography>
          </Stack>
        </Link>

        <Stack direction="row" spacing={1} alignItems="center">
          {[
            { icon: <SiFacebook /> },
            { icon: <SiInstagram /> },
            { icon: <SiLinkedin /> },
            { icon: <BsTwitterX /> },
            { icon: <BsDiscord /> },
            { icon: <SiGithub /> },
          ].map(({ icon }, idx) => (
            <Box key={idx} fontSize="2rem" color="#fff">
              {icon}
            </Box>
          ))}
        </Stack>

        {/* Tagline */}
        <Typography variant="body2" fontSize="1.4rem" color="text.primary">
          Capture . Organize . Experience
        </Typography>

        {/* Author Attribution */}
        <Typography fontSize="1.2rem" color="#000">
          Created by{" "}
          <Link
            to="https://github.com/NathanaelMutua"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Nxthxnael
          </Link>{" "}
          © {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>
  );
}

export default DefaultFooter;
