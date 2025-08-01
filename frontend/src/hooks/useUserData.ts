import { useQuery } from "@tanstack/react-query";
import useUser from "../store/userStore";
import axiosInstance from "../api/axios";
import { useEffect } from "react";

export function useUserData() {
  const { user: zustandUser, setUser } = useUser();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fetch-user-data", zustandUser?.id],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/api/auth/user/${zustandUser?.id}`
      );
      return response.data;
    },
    enabled: !!zustandUser?.id,
  });

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  return {
    user: user || zustandUser,
    isLoading,
    error,
  };
}
