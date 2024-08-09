import React from "react";
import "../../styles/styles.css";
import ComingSoon from "../../assets/images/Main/ComingSoon.jpg";

export default function SocialMediaStats() {
  return (
    <div className="w-2/4 h-96 bg-[#0A2540] rounded-xl flex flex-col px-8">
      <h1 className="text-2xl text-white mt-8">Social Media Stats</h1>
      <div className="flex justify-center items-center coming-soon mt-12 ">
        <img src={ComingSoon} className="rounded-lg" />
      </div>
    </div>
  );
}
