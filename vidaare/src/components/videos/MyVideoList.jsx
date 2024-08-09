//
import React from "react";
import MyVideoCard from "./MyVideoCard";
import Ex1 from "../../assets/videos/Ex1.mp4";
import Ex2 from "../../assets/videos/Ex2.mp4";
import PropTypes from "prop-types";

const videos = [
  {
    id: 1,
    videoSrc: Ex1,
    title: "Video 1",
    description: "This is the first example video.",
  },
  {
    id: 2,
    videoSrc: Ex2,
    title: "Video 2",
    description: "This is the second example video.",
  },
  {
    id: 3,
    videoSrc: Ex1,
    title: "Video 3",
    description: "This is the first example video.",
  },
  {
    id: 4,
    videoSrc: Ex2,
    title: "Video 4",
    description: "This is the second example video.",
  },
  {
    id: 5,
    videoSrc: Ex1,
    title: "Video 5",
    description: "This is the first example video.",
  },
  {
    id: 6,
    videoSrc: Ex2,
    title: "Video 6",
    description: "This is the second example video.",
  },
  {
    id: 7,
    videoSrc: Ex1,
    title: "Video 7",
    description: "This is the first example video.",
  },
  {
    id: 8,
    videoSrc: Ex2,
    title: "Video 8",
    description: "This is the second example video.",
  },
];

export default function MyVideoList({ onVideoSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {videos.length > 0 ? (
        videos.map((video) => (
          <MyVideoCard
            key={video.id}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
            onVideoSelect={() => onVideoSelect(video)}
          />
        ))
      ) : (
        <p className="text-white">No videos available.</p>
      )}
    </div>
  );
}

MyVideoList.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
};
