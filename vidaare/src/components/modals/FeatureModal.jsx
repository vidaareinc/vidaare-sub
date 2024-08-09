import React from "react";
import "../../styles/responsiveness.css";

const FeatureModal = ({ isOpen, onClose, feature }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-transparent p-8 md:p-10 rounded-lg shadow-lg w-11/12 max-w-7xl backdrop-filter backdrop-blur-lg bg-opacity-80">
        <button
          className="text-black text-3xl hover:text-gray-700 absolute top-2 right-2"
          onClick={() => {
            onClose();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              color="white"
            />
          </svg>
        </button>
        <div className="flex flex-row space-x-4">
          <img
            src={feature.imageUrl}
            alt={feature.title}
            className="w-full h-auto md:w-1/2 sm:w-1/2 mb-4 rounded feature-img"
          />
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="feature-title text-2xl sm:text-4xl md:text-3xl font-bold mb-4 text-white">
              {feature.title}
            </h2>
            <p className="text-xl md:text-lg text-white">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;
