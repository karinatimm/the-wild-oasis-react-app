import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../api/apiAuth";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};
