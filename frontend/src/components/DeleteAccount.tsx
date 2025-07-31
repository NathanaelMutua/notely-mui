import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function DeleteAccount() {
  return (
    <Box>
      <Card
        sx={{
          padding: "3rem",
          minHeight: "20rem",
          marginTop: "2.5rem",
          backgroundColor: "rgba(198, 62, 62, 1)",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Danger Zone
        </Typography>
        <Typography variant="body1">
          You can update your first and last name
        </Typography>

        <CardContent>
          <CardActions sx={{ paddingInline: 0 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "text.primary",
                color: "rgba(198, 62, 62, 1)",
                transition: "0.2s ease-in-out",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              Delete Account
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DeleteAccount;
