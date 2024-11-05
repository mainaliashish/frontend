import config from "./config.json";

export async function getProjectDetails(userId) {
  try {
    const projectUrl =
      config.api.awsBase + config.api.awsStage + "get_projects/" + userId;
    const response = await fetch(projectUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch project data:", error);
    return {};
  }
}
