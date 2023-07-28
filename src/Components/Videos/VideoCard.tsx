import React from "react";
import { video } from "../../utils/VideoTypes";
import classes from "./VideoCard.module.css";
import { useNavigate } from "react-router";

const VideoCard: React.FC<{ videoItem: video }> = (props) => {
  const navigate = useNavigate();
  return (
    <span className={classes.main}>
      <img
        src={props.videoItem.thumbNail}
        alt="thumbnail"
        className={classes.image}
        onClick={() => {
          navigate(`/video/:${props.videoItem.videoId}`);
        }}
      />
      <p
        className={classes.videoName}
        onClick={() => {
          navigate(`/video/:${props.videoItem.videoId}`);
        }}
      >
        {props.videoItem.videoName.slice(0, 50)}
      </p>
      <p
        className={classes.channelName}
        onClick={() => {
          navigate(`/channel/:${props.videoItem.channelId}`);
        }}
      >
        {props.videoItem.channelName}
      </p>
    </span>
  );
};

export default VideoCard;
