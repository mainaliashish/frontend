import { useQuery } from "@tanstack/react-query";
import { getEducationDetails } from "../../services/apiEducation";

export function useEducation() {
  const userId = 1;
  const {
    isLoading,
    data: education,
    error,
  } = useQuery({
    queryKey: ["education", userId],
    queryFn: () => getEducationDetails(userId),
  });

  return { isLoading, education, error };
}
