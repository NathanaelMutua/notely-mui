import { Box } from "@mui/material";
import DefaultHeroSection from "../components/DefaultHeroSection";
import useUser from "../store/userStore";
import UserHeroSection from "../components/UserHeroSection";

function HomePage() {
  const user = useUser((state) => state.user);
  return (
    <Box minHeight="100vh">
      {!user ? <DefaultHeroSection /> : <UserHeroSection />}
    </Box>
  );
}

export default HomePage;
