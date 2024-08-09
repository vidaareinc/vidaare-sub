import React from "react";
import MyRecentlyPlayedCard from "./MyRecentlyPlayedCard";
import PropTypes from "prop-types";
import { FunnelIcon } from "@heroicons/react/24/solid";

export default function MyRecentlyPlayedList({
  recentlyPlayed,
  onVideoSelect,
  onClear,
}) {
  return (
    <div className="flex flex-col gap-y-2 h-[450px] overflow-y-auto w-full justify-evenly">
      <div className="flex justify-between items-center mb-2 px-4">
        <h2 className="text-lg font-bold">Recently Played</h2>
        <div className="flex ">
          <FunnelIcon
            className="w-6 mr-4 cursor-pointer"
            onClick={() => alert("Filtering functionality to be implemented!")}
          />
          <button
            onClick={onClear}
            className="p-2 rounded-lg text-sm hover:bg-[#0a2540] transition duration-200 hover:underline"
          >
            Clear
          </button>
        </div>
      </div>
      {recentlyPlayed.map((video) => (
        <MyRecentlyPlayedCard
          key={video.id}
          videoSrc={video.videoSrc}
          title={video.title}
          description={video.description}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </div>
  );
}

MyRecentlyPlayedList.propTypes = {
  recentlyPlayed: PropTypes.array.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
