import type React from "react";
import useUser from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user]);
  return <>{children}</>;
}

export default Protected;
