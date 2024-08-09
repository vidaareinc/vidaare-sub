const axios = require("axios");
require("dotenv").config();

const { TIKTOK_CLIENT_KEY, TIKTOK_CLIENT_SECRET, REDIRECT_URI } = process.env;

console.log("TikTok Client Key:", TIKTOK_CLIENT_KEY);
console.log("TikTok Client Secret:", TIKTOK_CLIENT_SECRET);
console.log("Redirect URI:", REDIRECT_URI);

async function tiktokAccessToken(code) {
  try {
    console.log("Requesting access token with code:", code); // For Debugging
    const response = await axios.post(
      "https://open-api.tiktok.com/oauth/access_token/",
      {
        client_key: TIKTOK_CLIENT_KEY,
        client_secret: TIKTOK_CLIENT_SECRET,
        code: code,
        grant_type: "authorization_code",
      }
    );

    console.log("Access token response:", response.data); //For Debugging
    return response.data.data.access_token;
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    throw new Error("Failed to exchange code for access token");
  }
}

async function getUserInfo(accessToken) {
  try {
    console.log("Fetching user info with access token:", accessToken); //For Debugging
    const response = await axios.get(
      "https://open-api.tiktok.com/oauth/userinfo/",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log("User info response:", response.data); //For Debugging
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw new Error("Failed to fetch user info");
  }
}

module.exports = {
  tiktokAccessToken,
  getUserInfo,
};
