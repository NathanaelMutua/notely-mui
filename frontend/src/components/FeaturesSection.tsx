import { Box, Grid, Stack, Card, Typography, CardContent } from "@mui/material";
import { BsLightningCharge } from "react-icons/bs";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
import { IoLogoMarkdown } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdCloudSync } from "react-icons/md";

function FeaturesSection() {
  return (
    <Box mt={15}>
      <Stack display="flex" alignItems="center" justifyContent="center">
        <Box
          sx={{
            position: "absolute",
            zIndex: "-1",
            transform: "translateY(10rem)",
            height: "40rem",
            width: "40rem",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.6)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: "-1",
            transform: "translateY(10rem)",
            height: "30rem",
            width: "30rem",
            borderRadius: "50%",
            background: "#1976d2",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: "-1",
            transform: "translateY(10rem)",
            height: "30rem",
            width: "30rem",
            borderRadius: "50%",
            background: "none",
            border: "2px solid #fff",
          }}
        />
        <Box
          position="absolute"
          zIndex="10"
          sx={{ transform: "translateY(9rem)" }}
        >
          <img
            src="/work-image.svg"
            alt="Work"
            style={{
              width: "21rem",
              height: "auto",
              paddingTop: "2rem",
            }}
          />
        </Box>
      </Stack>
      <Stack
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={4}
        paddingTop={14}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
            minHeight: "80vh",
            padding: "3rem",
            paddingTop: "8rem",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Stack spacing={2} textAlign="center">
            <Typography variant="h3" fontWeight="bold" fontSize="5rem">
              Powerful Features
            </Typography>
            <Typography variant="body1" fontSize="2rem">
              Everything you need to capture, organize, and access your thoughts
              seamlessly
            </Typography>
          </Stack>
          <Grid
            container
            spacing={3}
            pt={5}
            rowSpacing={4}
            justifyContent="center"
          >
            <Grid size={{ xs: 11, sm: 11, md: 6, lg: 4 }}>
              <Card
                sx={{
                  minHeight: "19rem",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} padding={2}>
                    <IoLogoMarkdown style={{ fontSize: "3rem" }} />
                    <Box>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        fontSize="2.8rem"
                        pb={1}
                      >
                        Rich Markdown Editor
                      </Typography>
                      <Typography variant="body2" fontSize="1.2rem">
                        Write with full markdown support and see your formatted
                        notes in real-time.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 11, sm: 11, md: 6, lg: 4 }}>
              <Card
                sx={{
                  minHeight: "19rem",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} padding={2}>
                    <MdCloudSync style={{ fontSize: "3rem" }} />
                    <Box>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        fontSize="2.8rem"
                        pb={1}
                      >
                        Cloud Sync
                      </Typography>
                      <Typography variant="body2" fontSize="1.2rem">
                        Your notes are automatically saved and synced across all
                        your devices.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 11, sm: 11, md: 6, lg: 4 }}>
              <Card
                sx={{
                  minHeight: "19rem",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} padding={2}>
                    <FaSearch style={{ fontSize: "3rem" }} />
                    <Box>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        fontSize="2.8rem"
                        pb={1}
                      >
                        Quick Search
                      </Typography>
                      <Typography variant="body2" fontSize="1.2rem">
                        Find any note instantly with our powerful search
                        functionality.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 11, sm: 11, md: 6, lg: 4 }}>
              <Card
                sx={{
                  minHeight: "19rem",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} padding={2}>
                    <FaShieldAlt style={{ fontSize: "3rem" }} />
                    <Box>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        fontSize="2.8rem"
                        pb={1}
                      >
                        Secure & Private
                      </Typography>
                      <Typography variant="body2" fontSize="1.2rem">
                        Your data is encrypted and only accessible by you.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 11, sm: 11, md: 6, lg: 4 }}>
              <Card
                sx={{
                  minHeight: "19rem",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} padding={2}>
                    <IoPhonePortraitOutline style={{ fontSize: "3rem" }} />
                    <Box>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        fontSize="2.8rem"
                        pb={1}
                      >
                        Mobile Friendly
                      </Typography>
                      <Typography variant="body2" fontSize="1.2rem">
                        Access your notes from anywhere with our responsive
                        design.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 11, sm: 11, md: 6, lg: 4 }}>
              <Card
                sx={{
                  minHeight: "19rem",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} padding={2}>
                    <BsLightningCharge style={{ fontSize: "3rem" }} />
                    <Box>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        fontSize="2.8rem"
                        pb={1}
                      >
                        Lightning Fast
                      </Typography>
                      <Typography variant="body2" fontSize="1.2rem">
                        Built for speed with modern technology for instant
                        note-taking.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Stack>
    </Box>
  );
}

export default FeaturesSection;
