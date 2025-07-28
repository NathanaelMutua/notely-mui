import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { MdNotes, MdOutlineDeleteOutline } from "react-icons/md";
import FormattedDate from "./FormattedDate";
import { IoIosCalendar } from "react-icons/io";
import LoadingComponent from "./LoadingComponent";
import axiosInstance from "../api/axios";
import { useQuery } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
                  <Typography
                    variant="body1"
                    fontSize="1.4rem"
                    paddingBottom="2.3rem"
                  >
                    {entry.synopsis}
                  </Typography>

                  <Box
                    position="absolute"
                    bottom="1rem"
                    display="flex"
                    justifyContent="space-between"
                    width="90%"
                  >
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
                    <Box alignItems="center">
                      {/* read */}
                      <IconButton
                        sx={{ color: "text.primary", fontSize: "2rem" }}
                        onClick={() => navigate(`/entry/${entry.id}`)}
                      >
                        <VscOpenPreview />
                      </IconButton>
                      {/* edit */}
                      <IconButton
                        sx={{ color: "primary.main", fontSize: "2rem" }}
                        onClick={() => navigate(`/update/${entry.id}`)}
                      >
                        <FaRegEdit />
                      </IconButton>
                      {/* delete */}
                      <IconButton
                        sx={{ color: "rgba(181, 44, 44, 1)", fontSize: "2rem" }}
                      >
                        <MdOutlineDeleteOutline />
                      </IconButton>
                    </Box>
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
