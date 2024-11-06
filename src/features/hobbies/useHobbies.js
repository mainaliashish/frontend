import { useQuery } from "@tanstack/react-query";
import { getHobbies } from "../../services/apiHobbies";

export function useHobbies() {
  const userId = 1;
  const {
    isLoading,
    data: hobbies,
    error,
  } = useQuery({
    queryKey: ["hobbies", userId],
    queryFn: () => getHobbies(userId),
  });

  return { isLoading, hobbies, error };
}
