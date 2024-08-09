import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Player, ControlBar, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";

export default function MyVideoCard({
  videoSrc,
  title,
  description,
  onVideoSelect,
}) {
  const [videoDuration, setVideoDuration] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      const minutes = Math.floor(videoRef.current.duration / 60);
      const seconds = Math.floor(videoRef.current.duration % 60);
      setVideoDuration(`${minutes}m ${seconds}s`);
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [videoSrc]);

  return (
    <div className="rounded-lg w-80 shadow-lg">
      <video
        ref={videoRef}
        src={videoSrc}
        width="100%"
        height="auto"
        controls={false}
        muted
        className="rounded-lg cursor-pointer"
        onClick={() => onVideoSelect(videoSrc)}
      />
      <div className="p-4">
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-white">{description}</p>
        <div className="flex flex-row justify-between items-center">
          <p className="mt-2 font-medium">{videoDuration}</p>
          <Link
            className="mt-4 bg-transparent text-white px-4 py-2 rounded hover:underline hover:bg-[#0a2540] transition duration-200"
            onClick={() => alert("Share functionality to be implemented!")}
            // to="/createpost"
          >
            Share Now
          </Link>
        </div>
      </div>
    </div>
  );
}
