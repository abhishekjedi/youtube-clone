import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { RootObject, video } from "../utils/VideoTypes";
import Videos from "../Components/Videos/Videos";
import { CSSProperties } from "react";
import { DataContext } from "../store/context";

const style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: "98vw",
};

const HomePage = () => {
  const [videos, setVideos] = useState<video[]>();

  const { term } = useContext(DataContext);

  useEffect(() => {
    fetchFromAPI(
      `search?q=${term}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
    ).then((data: RootObject) => {
      const tempVideos: video[] = data.items.map((value) => {
        console.log(value.snippet);
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
  }, [term]);

  return (
    <div style={style}>
      <Sidebar />
      {videos && <Videos videos={videos} />}
    </div>
  );
};

export default HomePage;
