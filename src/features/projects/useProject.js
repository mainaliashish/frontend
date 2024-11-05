import { useQuery } from "@tanstack/react-query";
import { getProjectDetails } from "../../services/apiProjects";

export function useProject() {
  const userId = 1;
  const {
    isLoading,
    data: projects,
    error,
  } = useQuery({
    queryKey: ["projects", userId],
    queryFn: () => getProjectDetails(userId),
  });

  return { isLoading, projects, error };
}
