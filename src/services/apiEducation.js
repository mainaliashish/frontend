import config from "./config.json";

export async function getEducationDetails(userId) {
  try {
    const educationUrl =
      config.api.awsBase + config.api.awsStage + "get_education_info/" + userId;
    const response = await fetch(educationUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.results.reverse();
  } catch (error) {
    console.error("Failed to fetch education data:", error);
    return {};
  }
}
