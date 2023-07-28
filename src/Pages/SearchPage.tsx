import React, { useEffect, useState, CSSProperties, useContext } from "react";
import { useParams } from "react-router";
import { IDKind, RootObject, video } from "../utils/VideoTypes";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Sidebar from "../Components/Sidebar/Sidebar";
import Videos from "../Components/Videos/Videos";
import { DataContext } from "../store/context";

type Props = {};
const style: CSSProperties = {
  display: "flex",
  msFlexDirection: "row",
  width: "98vw",
};

const SearchPage = (props: Props) => {
  const params = useParams();
  const { term, termChangeHandler } = useContext(DataContext);

  const [videos, setVideos] = useState<video[]>();

  // console.log(params.id);
  useEffect(() => {
    termChangeHandler(params.id || "");
  }, [params.id, termChangeHandler]);

  useEffect(() => {
    fetchFromAPI(
      `search?q=${term}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
    ).then((data: RootObject) => {
      const tempVideos: video[] = [];
      data.items.forEach((value) => {
        if (value.id.kind === IDKind.YoutubeVideo) {
          const tempVideo: video = {
            videoId: value.id.videoId,
            channelId: value.snippet.channelId,
            videoName: value.snippet.title,
            channelName: value.snippet.channelTitle,
            thumbNail: value.snippet.thumbnails.medium.url,
          };
          tempVideos.push(tempVideo);
        }
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

export default SearchPage;
