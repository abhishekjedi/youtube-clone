import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { RootObject, channelItem } from "../utils/ChannelTypes";
import Sidebar from "../Components/Sidebar/Sidebar";
import ChannelCard from "../Components/Channel/ChannelCard";
import { video } from "../utils/VideoTypes";
import Videos from "../Components/Videos/Videos";
import { RootObject as RootObject2 } from "../utils/ChannelVideoType";

const ChannelPage = () => {
  const [channelInfo, setChannelInfo] = useState<channelItem>();
  const [videos, setVideos] = useState<video[]>();
  const params = useParams();
  useEffect(() => {
    let id = params.id;
    if (id && id?.[0] === ":") {
      id = id.slice(1);
    }
    fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then(
      (data: RootObject) => {
        const items = data.items[0];
        const tempChannelInfo: channelItem = {
          id: items.id,
          name: items.snippet.title,
          desc: items.snippet.description,
          banner: items.brandingSettings.image.bannerExternalUrl,
          subs: items.statistics.subscriberCount,
          thumbnail: items.snippet.thumbnails.medium.url,
        };

        setChannelInfo(tempChannelInfo);
      }
    );
  }, [params.id]);

  useEffect(() => {
    let id = params.id;
    if (id && id?.[0] === ":") {
      id = id.slice(1);
    }
    if (id) {
      fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
      ).then((data: RootObject2) => {
        const items = data.items;
        let tempVideo: video[] = [];
        items?.forEach((ele) => {
          if (ele.id.videoId) {
            const tempEle: video = {
              videoId: ele.id.videoId,
              channelId: ele.snippet.channelId,
              videoName: ele.snippet.title,
              channelName: ele.snippet.channelTitle,
              thumbNail: ele.snippet.thumbnails.default.url,
            };
            console.log(tempEle);
            tempVideo.push(tempEle);
          }
        });
        setVideos(tempVideo);
      });
    }
  }, [params.id]);

  console.log(videos);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
        {channelInfo && <ChannelCard channel={channelInfo} />}
        {videos && <Videos videos={videos} />}
      </div>
    </div>
  );
};

export default ChannelPage;
