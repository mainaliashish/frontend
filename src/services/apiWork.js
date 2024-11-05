import config from "./config.json";

export async function getWorkDetails(userId) {
  try {
    const workUrl =
      config.api.awsBase + config.api.awsStage + "get_work_info/" + userId;
    const response = await fetch(workUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.results.reverse();
  } catch (error) {
    console.error("Failed to fetch work data:", error);
    return {};
  }
}
