import config from "./config.json";

export async function getBasicDetails(userId) {
  const basicInfoUrl =
    config.api.awsBase + config.api.awsStage + "get_basic_info/" + userId;
  try {
    const response = await fetch(basicInfoUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.results.at(0);
  } catch (error) {
    console.error("Failed to fetch basic info data:", error);
    return {};
  }
}
