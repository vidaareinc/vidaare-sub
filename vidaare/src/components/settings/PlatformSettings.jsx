import React, { useState } from "react";
import "../../styles/styles.css";
import ToggleSwitch from "./ToggleSwitch";

export default function PlatformSettings() {
  const [isToggleOn1, setIsToggleOn1] = useState(false);
  const [isToggleOn2, setIsToggleOn2] = useState(false);
  const [isToggleOn3, setIsToggleOn3] = useState(false);
  const [isToggleOn4, setIsToggleOn4] = useState(false);
  const [isToggleOn5, setIsToggleOn5] = useState(false);
  const [isToggleOn6, setIsToggleOn6] = useState(false);
  const [isToggleOn7, setIsToggleOn7] = useState(false);

  const handleToggle1 = () => setIsToggleOn1(!isToggleOn1);
  const handleToggle2 = () => setIsToggleOn2(!isToggleOn2);
  const handleToggle3 = () => setIsToggleOn3(!isToggleOn3);
  const handleToggle4 = () => setIsToggleOn4(!isToggleOn4);
  const handleToggle5 = () => setIsToggleOn5(!isToggleOn5);
  const handleToggle6 = () => setIsToggleOn6(!isToggleOn6);
  const handleToggle7 = () => setIsToggleOn7(!isToggleOn7);

  return (
    <div className="w-1/4 h-[550px] bg-[#0A2540] rounded-xl flex flex-col overflow-y-auto px-8">
      <h1 className="text-2xl text-white mt-8">Platform Settings</h1>
      {/* Account */}
      <h2 className="text-base text-slate-500 my-2">ACCOUNT</h2>
      <div className="flex flex-row items-center mt-2">
        <ToggleSwitch
          id="toggle1"
          isOn={isToggleOn1}
          handleToggle={handleToggle1}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8 flex-shrink-0 w-48 ">
          Email me when my Post is flagged
        </h2>
      </div>

      <div className="flex flex-row items-center mt-2">
        <ToggleSwitch
          id="toggle2"
          isOn={isToggleOn2}
          handleToggle={handleToggle2}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8 flex-shrink-0 w-48 ">
          Email me when my Post is successful
        </h2>
      </div>

      <div className="flex flex-row justify-between items-center mt-2">
        <ToggleSwitch
          id="toggle3"
          isOn={isToggleOn3}
          handleToggle={handleToggle3}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8 flex-shrink-0 w-48">
          Email me with new Promotional offers
        </h2>
      </div>

      {/* Applications */}
      <h2 className="text-base text-slate-500 my-2 uppercase mt-6">
        application
      </h2>

      <div className="flex flex-row justify-between items-center mt-2">
        <ToggleSwitch
          id="toggle4"
          isOn={isToggleOn4}
          handleToggle={handleToggle4}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8 flex-shrink-0 w-48">
          New launches and projects
        </h2>
      </div>

      <div className="flex flex-row justify-between mt-4">
        <ToggleSwitch
          id="toggle5"
          isOn={isToggleOn5}
          handleToggle={handleToggle5}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8 flex-shrink-0 w-48">
          Monthly product updates
        </h2>
      </div>

      <div className="flex flex-row items-center mt-5">
        <ToggleSwitch
          id="toggle6"
          isOn={isToggleOn6}
          handleToggle={handleToggle6}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8 flex-shrink-0 w-48">
          Subscribe to newsletter
        </h2>
      </div>

      <div className="flex flex-row mt-5">
        <ToggleSwitch
          id="toggle7"
          isOn={isToggleOn7}
          handleToggle={handleToggle7}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8 flex-shrink-0 w-48">
          Receive mails weekly
        </h2>
      </div>
    </div>
  );
}
