import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { MdNotes } from "react-icons/md";
import FormattedDate from "./FormattedDate";
import { IoIosCalendar } from "react-icons/io";
import LoadingComponent from "./LoadingComponent";
import axiosInstance from "../api/axios";
import { useQuery } from "@tanstack/react-query";

interface Entry {
  id: string;
  userId: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
}

function EntryListing() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-entries"],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/entry");
      console.log(response);
      return response.data.entries;
    },
  });
  if (isLoading) {
    return (
      <Box paddingTop={6}>
        <LoadingComponent />
      </Box>
    );
  }
  return (
    <Box padding="3rem">
      <Grid container justifyContent="center" spacing={3}>
        {data &&
          data.map((entry: Entry) => (
            <Grid
              size={{ xs: 11, sm: 11, md: 6, lg: 4 }}
              rowSpacing={4}
              spacing={3}
              key={entry.id}
            >
              <Card sx={{ minHeight: "20rem", width: "100%" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <MdNotes style={{ fontSize: "2rem" }} />
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      fontSize="1.9rem"
                      color="secondary"
                    >
                      {entry.title}
                    </Typography>
                  </Stack>
                  <Divider
                    sx={{
                      my: 1,
                      height: 2,
                      bgcolor: "rgba(255,255,255,0.4)",
                      borderRadius: "2px",
                    }}
                  />
                  <Typography variant="body1" fontSize="1.4rem">
                    {entry.synopsis}
                  </Typography>
                  <Box position="absolute" bottom="1rem">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IoIosCalendar
                        style={{ fontSize: "1.2rem", color: "secondary" }}
                      />
                      <Typography
                        variant="h6"
                        fontSize="1rem"
                        fontWeight="bold"
                      >
                        <FormattedDate isoDate={entry.lastUpdated} />
                      </Typography>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default EntryListing;
