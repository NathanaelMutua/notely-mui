import { Box, Grid, Stack, Typography } from "@mui/material";
import { FaRegNoteSticky } from "react-icons/fa6";
import { Link } from "react-router-dom";

function DefaultFooter() {
  return (
    <Box
      component="section"
      minHeight="40vh"
      sx={{ backgroundColor: "#1976d2" }}
      padding="3rem"
      marginTop={1}
    >
      <Grid container spacing={2}>
        <Grid size={{ lg: 3 }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              borderRadius="20px"
              pb={1}
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
          <Typography variant="body2" fontSize="1.2rem" color="text.primary">
            Capture your thoughts with style. <br />
            Organize your ideas with intelligence.
            <br /> Experience note-taking re-imagined for the modern world.
          </Typography>
        </Grid>
        <Grid size={{ lg: 3 }}>
          <Typography variant="h6" fontSize="1.8rem" fontWeight="bold" pb={1}>
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
        </Grid>
        <Grid size={{ lg: 3 }}>
          <Typography variant="h6" fontSize="1.8rem" fontWeight="bold" pb={1}>
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
        </Grid>
        <Grid size={{ lg: 3 }}>
          <Typography variant="h6" fontSize="1.8rem" fontWeight="bold" pb={1}>
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="text.primary"
            pb={0.6}
          >
            Powerful features
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DefaultFooter;
