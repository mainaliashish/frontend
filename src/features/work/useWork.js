import { useQuery } from "@tanstack/react-query";
import { getWorkDetails } from "../../services/apiWork";
export function useWork() {
  const userId = 1;
  const {
    isLoading,
    data: work,
    error,
  } = useQuery({
    queryKey: ["work", userId],
    queryFn: () => getWorkDetails(userId),
  });
  return { isLoading, work, error };
}
