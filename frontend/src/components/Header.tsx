import DefaultNavbar from "./DefaultNavbar";
import useUser from "../store/userStore";
import UserNavbar from "./UserNavbar";

function Header() {
  const user = useUser((state) => state.user);
  return <>{user ? <UserNavbar /> : <DefaultNavbar />}</>;
}

export default Header;
