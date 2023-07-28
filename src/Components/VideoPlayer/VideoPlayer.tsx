import React from "react";
import { video } from "../../utils/videoDetailsType";
import ReactPlayer from "react-player";
import classes from "./VideoPlayer.module.css";
import SuggestedVideos from "./SuggestedVideos";
import { useNavigate } from "react-router";

const VideoPlayer: React.FC<{ video: video }> = ({ video }) => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video.videoId}`}
          className="react-player"
          controls
          width={"60vw"}
          height={"50vh"}
        />
        <p className={classes.title}>{video.videoName}</p>
        <p className={classes.views}>
          {parseInt(video.viewCount).toLocaleString()} views
        </p>
        <p
          className={classes.channel}
          onClick={() => navigate(`/channel/${video.channelId}`)}
        >
          {video.channelName.slice(0, 25)}{" "}
        </p>
      </section>
      <h2>Suggested Videos</h2>
      <SuggestedVideos id={video.videoId} />
    </>
  );
};

export default VideoPlayer;
