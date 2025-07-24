import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function DefaultCallToAction() {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      minHeight="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={4}
    >
      <Card sx={{ minWidth: "80rem", minHeight: "25rem", padding: "3rem" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            fontSize="4rem"
            textAlign="center"
          >
            Ready to Transform Your Note-Taking?
          </Typography>
          <Typography variant="body1" fontSize="1.4rem" textAlign="center">
            Join thousands of users who have already discovered the future of
            digital note-taking.
            <br /> Start your journey today.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            startIcon={<FaArrowRightFromBracket />}
            style={{ padding: "0.5rem 2rem", fontSize: "1.4rem" }}
            onClick={() => navigate("/sign-up")}
          >
            Create your account
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default DefaultCallToAction;
