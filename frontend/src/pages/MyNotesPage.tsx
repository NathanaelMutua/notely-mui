import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import EntryListing from "../components/EntryListing";

function MyNotesPage() {
  return (
    <Box component="section" minHeight="100vh" pt={8}>
      <PageHeader
        title="My Notes"
        content="Your personal space for capturing ideas, organizing thoughts, and
            turning inspiration into action. Beautiful, secure, and designed for
            the way you think."
      />
      <EntryListing />
    </Box>
  );
}

export default MyNotesPage;
