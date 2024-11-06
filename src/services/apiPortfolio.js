import config from "./config.json";

export async function getPortfolioDetails(userId) {
  try {
    const portfolioUrl =
      config.api.awsBase + config.api.awsStage + "get_portfolio/" + userId;
    const response = await fetch(portfolioUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch portfolio data:", error);
    return {};
  }
}
