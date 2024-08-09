import React from "react";
import TiktokQuicklinks from "../../assets/images/Main/TT_quicklinks.png";

const TIKTOK_CLIENT_KEY = import.meta.env.VITE_TIKTOK_CLIENT_KEY;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

//For Debugging
console.log("TikTok Client Key:", TIKTOK_CLIENT_KEY);
console.log("Redirect URI:", REDIRECT_URI);

export default function TikTokLogin() {
  const handleTikTokLogin = () => {
    if (!TIKTOK_CLIENT_KEY || !REDIRECT_URI) {
      console.error("TikTok client key or redirect URI is not defined.");
      alert(
        "There was an error with the TikTok login. Please try again later."
      );
      return;
    }

    const tiktokLoginUrl = `https://www.tiktok.com/auth/authorize?client_key=${TIKTOK_CLIENT_KEY}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code&scope=user.info.basic`;

    window.location.href = tiktokLoginUrl;
  };

  return (
    <button onClick={handleTikTokLogin} className="mx-8 cursor-pointer">
      <img src={TiktokQuicklinks} alt="TikTok" className="w-24 h-auto" />
    </button>
  );
}
