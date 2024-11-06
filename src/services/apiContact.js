import config from "./config.json";

export async function postContactForm({ name, mobile, email, message }) {
  const basicInfoUrl =
    config.api.awsBase + config.api.awsStage + "store_message";
  try {
    const userId = 1;
    const response = await fetch(basicInfoUrl, {
      method: "POST",
      body: JSON.stringify({ userId, name, mobile, email, message }),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to send message:", error);
    return {};
  }
}
