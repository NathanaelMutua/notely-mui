import DefaultNavbar from "./DefaultNavbar";
import useUserStore from "../store/userStore";
import UserNavbar from "./UserNavbar";

function Header() {
  const user = useUserStore((state) => state.user);
  return <>{user ? <UserNavbar /> : <DefaultNavbar />}</>;
}

export default Header;
