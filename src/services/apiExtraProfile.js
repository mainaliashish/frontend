import config from "./config.json";

export async function getExtraDetails(userId) {
  try {
    const extraInfoUrl =
      config.api.awsBase + config.api.awsStage + "get_extra_info/" + userId;
    const response = await fetch(extraInfoUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.results.at(0);
  } catch (error) {
    console.error("Failed to fetch extra info data:", error);
    return {};
  }
}
