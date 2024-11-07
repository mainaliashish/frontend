import config from "./config.json";

export async function getSkills(userId) {
  try {
    const projectUrl =
      config.api.awsBase + config.api.awsStage + "get_skills/" + userId;
    const response = await fetch(projectUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch skills data:", error);
    throw new Error("Something went wrong. Please try again later.");
  }
}
