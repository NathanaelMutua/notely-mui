import { Box } from "@mui/material";
import ProfileLandingAndImage from "../components/ProfileLanding&Image";
import ProfileSecurity from "../components/ProfileSecurity";
import ProfileAccountDetails from "../components/ProfileAccountDetails";
import DeleteAccount from "../components/DeleteAccount";

function ProfilePage() {
  return (
    <div>
      <Box component="section" minHeight="100vh" padding="4rem" paddingTop={9}>
        <ProfileLandingAndImage />
        <ProfileAccountDetails />
        <ProfileSecurity />
        <DeleteAccount />
      </Box>
    </div>
  );
}

export default ProfilePage;
