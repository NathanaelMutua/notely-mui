import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function UserCallToAction() {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      minHeight="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={4}
      paddingBottom={8}
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
            Never miss a Notely moment
          </Typography>
          <Typography variant="body1" fontSize="1.4rem" textAlign="center">
            Subscribe to our newsletter and stay inspired.
            <br />
            Exclusive tips, feature previews, and productivity magic—delivered
            monthly.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            startIcon={<FaPlus />}
            style={{ padding: "0.5rem 2rem", fontSize: "1.4rem" }}
            onClick={() => navigate("/subscribe")}
          >
            Join the List
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default UserCallToAction;
