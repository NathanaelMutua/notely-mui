import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { MdNotes } from "react-icons/md";
import FormattedDate from "./FormattedDate";
import { IoIosCalendar } from "react-icons/io";
import LoadingComponent from "./LoadingComponent";
import axiosInstance from "../api/axios";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { FaTrashRestoreAlt } from "react-icons/fa";
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

function TrashListing() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleEntryRestore(id: string) {
    mutate(id);
  }

  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosInstance.patch(`/api/entry/restore/${id}`);
      console.log(response);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-trashed-entries"],
      });
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["get-trashed-entries"],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/entry/trash");
      console.log(response);
      return response.data.trashed_entries;
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
        {data && data.length === 0 && (
          <Box width="100%" textAlign="center" mt={4} padding={4}>
            <Typography
              variant="h4"
              color="rgba(198, 62, 62, 1)"
              textTransform="capitalize"
              fontWeight="bold"
            >
              No Trashed Entries yet - Start making magic worth discarding.
            </Typography>
          </Box>
        )}
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
                    <Box display="flex" alignItems="center" gap={1}>
                      {/* read */}
                      <IconButton
                        sx={{ color: "text.primary", fontSize: "2rem" }}
                        onClick={() => navigate(`/entry/${entry.id}`)}
                      >
                        <VscOpenPreview />
                      </IconButton>
                      {/* restore */}
                      <Button
                        variant="contained"
                        startIcon={
                          <FaTrashRestoreAlt style={{ fontSize: "1.5rem" }} />
                        }
                        sx={{
                          padding: "0.5rem 1rem",
                          backgroundColor: "rgba(9, 107, 9, 1)",
                          "&:hover": {
                            backgroundColor: "rgba(203, 231, 203, 0.3)",
                          },
                        }}
                        onClick={() => handleEntryRestore(entry.id)}
                        loading={isPending}
                      >
                        Restore
                      </Button>
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

export default TrashListing;
