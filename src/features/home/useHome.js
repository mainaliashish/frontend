import { useQuery } from "@tanstack/react-query";
import { getBasicDetails } from "../../services/apiBasicProfile";

export function useBasicProfile() {
  const userId = 1;
  const {
    isLoading,
    data: profile,
    error,
  } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getBasicDetails(userId),
  });

  return { isLoading, profile, error };
}
