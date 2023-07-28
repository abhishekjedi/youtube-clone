import React, { CSSProperties, useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useParams } from "react-router";
import { fetchFromAPI } from "../utils/fetchFromApi";
// import { video } from "../utils/VideoTypes";
import { RootObject, video } from "../utils/videoDetailsType";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
type Props = {};
const style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: "98vw",
};
const VideoPage = (props: Props) => {
  const params = useParams();
  const [video, setVideo] = useState<video>();

  useEffect(() => {
    const id = params.id?.slice(1);
    if (id) {
      fetchFromAPI(
        `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
      ).then((data: RootObject) => {
        const items = data.items[0];
        const tempVideoEle: video = {
          videoId: items.id,
          channelId: items.snippet.channelId,
          videoName: items.snippet.title,
          channelName: items.snippet.channelTitle,
          thumbNail: items.snippet.thumbnails.default.url,
          desc: items.snippet.description,
          viewCount: items.statistics.viewCount,
          likeCount: items.statistics.likeCount,
        };
        setVideo(tempVideoEle);
      });
    }
  }, [params.id]);

  return (
    <div style={style}>
      <Sidebar />
      <div
        style={{
          width: "100%",
          marginLeft: "max(9rem, 17vw)",
          marginTop: "max(9vh, 1.3rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {video && <VideoPlayer video={video} />}
      </div>
    </div>
  );
};

export default VideoPage;
