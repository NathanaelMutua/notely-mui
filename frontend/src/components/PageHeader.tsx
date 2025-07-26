import { Box, Stack, Typography } from "@mui/material";

function PageHeader({ title, content }: { title: string; content: string }) {
  return (
    <Box minHeight="20vh">
      <Box component="div" padding="2rem">
        <Stack
          spacing={1.5}
          textAlign="center"
          alignItems="center"
          color="text.primary"
        >
          <Typography variant="h3" fontWeight="900" fontSize="5rem">
            {title}
          </Typography>
          <Typography variant="body1" fontSize="2rem" width={{ lg: 1000 }}>
            {content}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default PageHeader;
