import React from "react";
import "../styles/background.css";
import video from "../assets/bg-universe.mp4";
import fallbackImage from "../assets/fallback-image.png";
import secondVideo from "../assets/neon_-_21368 (720p).mp4"

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      >
        <source src={secondVideo} type="video/mp4"/>
      </video>
    </>
  );
};

export default Background;
