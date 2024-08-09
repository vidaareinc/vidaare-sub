import React from "react";

export default function ToggleSwitch({ id, isOn, handleToggle, onColor }) {
  return (
    <>
      {/* TODO: make toggle switched independant */}
      <input
        checked={isOn}
        onChange={handleToggle}
        className="hidden"
        type="checkbox"
        // Input a unique ID
        id={id}
      />
      <label
        style={{ backgroundColor: isOn ? onColor : "gray" }}
        // Input a unique ID
        htmlFor={id}
        role="switch"
        className="flex items-center justify-between cursor-pointer w-14 h-6 bg-gray-500 rounded-full relative transition-colors duration-200"
      >
        {/* Toggle */}
        <span
          className={`absolute top-0 left-0 w-6 h-6 rounded-full transition-transform duration-200 bg-white shadow-sm ${
            isOn ? "transform translate-x-8" : ""
          }`}
        />
      </label>
    </>
  );
}
