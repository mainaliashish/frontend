import { useQuery } from "@tanstack/react-query";
import { getSkills } from "../../services/apiSkill";

export function useSkill() {
  const userId = 1;
  const {
    isLoading,
    data: skills,
    error,
  } = useQuery({
    queryKey: ["skills", userId],
    queryFn: () => getSkills(userId),
  });

  return { isLoading, skills, error };
}
