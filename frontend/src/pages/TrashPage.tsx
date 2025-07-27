import { Box, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import TrashListing from "../components/TRashListing";
import { IoWarning } from "react-icons/io5";

function TrashPage() {
  return (
    <Box component="section" minHeight="100vh" pt={8}>
      <PageHeader
        title="Trash"
        content="Ideas once lived here — some half-baked, others too bold for their time. Welcome to your creative compost pile, where even discarded thoughts deserve a second glance."
      />
      <Box
        marginBottom={2}
        marginLeft="auto"
        marginRight="auto"
        width={{ lg: 700 }}
        padding="1rem"
        minHeight="3rem"
        borderRadius="20px"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <IoWarning
            fontSize="2rem"
            style={{ color: "rgba(198, 62, 62, 1)" }}
          />
          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize="1.4rem"
            color="text.primary"
          >
            Auto-cleanup runs every 30 days. Recover notes before they
            disappear.
          </Typography>
        </Box>
      </Box>

      <TrashListing />
    </Box>
  );
}

export default TrashPage;
