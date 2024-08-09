const {
  tiktokAccessToken,
  getUserInfo,
} = require("../authService/tiktok.services");

const tiktokAuthCallback = async (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).send("Authorization code is missing");
  }

  console.log("Received TikTok authorization code:", code);

  try {
    const accessToken = await tiktokAccessToken(code);

    console.log("Received access token:", accessToken);

    const userInfo = await getUserInfo(accessToken);

    console.log("Retrieved user info:", userInfo);

    // Redirect to frontend
    // res.redirect(`/dashboard?username=${userInfo.display_name}`);
    res.redirect(`/dashboard`);
  } catch (error) {
    console.error("Error during TikTok authentication:", error);
    res.status(500).send("Authentication failed");
  }
};

module.exports = {
  tiktokAuthCallback,
};
