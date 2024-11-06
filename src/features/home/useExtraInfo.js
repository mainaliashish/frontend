import { useQuery } from "@tanstack/react-query";
import { getExtraDetails } from "../../services/apiExtraProfile";

export function useExtraProfile() {
  const userId = 1;
  const {
    isLoading,
    data: extraProfile,
    error,
  } = useQuery({
    queryKey: ["extraProfile", userId],
    queryFn: () => getExtraDetails(userId),
  });

  return { isLoading, extraProfile, error };
}
