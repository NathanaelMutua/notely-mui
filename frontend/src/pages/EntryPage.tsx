import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/axios";
import LoadingComponent from "../components/LoadingComponent";
import { MdNotes } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import FormattedDate from "../components/FormattedDate";
import { IoIosCalendar } from "react-icons/io";

function EntryPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["get-specific-entry"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/entry/${id}`);
      console.log(response.data);
      return response.data.entry;
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
    <Box minHeight="100vh">
      <Grid
        container
        paddingTop="7rem"
        paddingBottom="4rem"
        paddingInline="1rem"
        spacing={4}
        rowSpacing={5}
        justifyContent="center"
        alignItems="center"
      >
        <Grid size={{ xs: 12, sm: 10, lg: 8 }} key={data.id}>
          <Card
            sx={{
              minHeight: "31rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Stack width="90%" textAlign="left">
              <CardContent>
                <Stack>
                  <Box display="flex" gap={1} alignItems="center">
                    <MdNotes style={{ fontSize: "3rem" }} />
                    <Typography
                      variant="h2"
                      fontWeight="bold"
                      sx={{ paddingBottom: "0.5rem" }}
                      color="#83eeff"
                    >
                      {data.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" fontSize="1.4rem">
                    {data.synopsis}
                  </Typography>
                  <Box
                    display="flex"
                    gap={1}
                    alignItems="center"
                    marginTop="1rem"
                    borderRadius="10px"
                    width="12rem"
                  >
                    <IoIosCalendar
                      style={{ fontSize: "1.2rem", color: "secondary" }}
                    />
                    <Typography variant="h6" fontSize="1rem" fontWeight="bold">
                      <FormattedDate isoDate={data.lastUpdated} />
                    </Typography>
                  </Box>
                </Stack>
                <Divider
                  sx={{
                    my: 1,
                    height: 2,
                    bgcolor: "rgba(255,255,255,0.4)",
                    borderRadius: "2px",
                  }}
                />
                <Card
                  className="markdown-body"
                  sx={{
                    mt: 2,
                    backgroundColor: "rgba(0, 62, 56, 0.31)",
                    fontSize: "150%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `${data.htmlContent}`,
                  }}
                />
                <CardActions sx={{ paddingInline: 0, marginTop: "1rem" }}>
                  <Stack direction="row">
                    {/* edit */}
                    <Button
                      variant="contained"
                      sx={{
                        color: "primary.main",
                        backgroundColor: "text.primary",
                      }}
                      onClick={() => navigate(`/update/${id}`)}
                      startIcon={<FaRegEdit />}
                    >
                      Edit
                    </Button>
                  </Stack>
                </CardActions>
              </CardContent>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EntryPage;
