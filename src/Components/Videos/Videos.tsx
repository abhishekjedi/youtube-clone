import React from "react";
import { video } from "../../utils/VideoTypes";
import VideoCard from "./VideoCard";
import classes from "./Videos.module.css";

const Videos: React.FC<{
  videos: video[];
}> = ({ videos }) => {
  return (
    <div className={classes.main}>
      {videos.map((video) => (
        <VideoCard videoItem={video} key={video.videoId} />
      ))}
    </div>
  );
};

export default Videos;
