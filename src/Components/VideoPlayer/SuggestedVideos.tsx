import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import { RootObject, video } from "../../utils/VideoTypes";
import classes from "./SuggestedVideo.module.css";
import { useNavigate } from "react-router";

const SuggestedVideos: React.FC<{ id: string }> = ({ id }) => {
  const [videos, setVideos] = useState<video[]>();
  const navigate = useNavigate();
  useEffect(() => {
    fetchFromAPI(
      `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`
    ).then((data: RootObject) => {
      const tempVideos: video[] = data.items.map((value) => {
        const tempVideo: video = {
          videoId: value.id.videoId,
          channelId: value.snippet.channelId,
          videoName: value.snippet.title,
          channelName: value.snippet.channelTitle,
          thumbNail: value.snippet.thumbnails.medium.url,
        };
        return tempVideo;
      });
      setVideos(tempVideos);
    });
  }, [id]);
  return (
    <div className={classes.main}>
      {videos &&
        videos.slice(0, 25).map((ele) => (
          <div className={classes.card} key={ele.videoId}>
            <img
              src={ele.thumbNail}
              alt="thumbnail"
              className={classes.image}
              onClick={() => {
                navigate(`/video/:${ele.videoId}`);
              }}
            />
            <div className={classes.info}>
              <p
                className={classes.title}
                onClick={() => {
                  navigate(`/video/:${ele.videoId}`);
                }}
              >
                {ele.videoName.slice(0, 50)}
              </p>
              <p
                className={classes.channel}
                onClick={() => {
                  navigate(`/channel/:${ele.channelId}`);
                }}
              >
                {ele.channelName.slice(0, 25)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SuggestedVideos;
