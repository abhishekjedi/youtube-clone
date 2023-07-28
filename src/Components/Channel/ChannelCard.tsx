import React, { CSSProperties } from "react";
import { channelItem } from "../../utils/ChannelTypes";
import classes from "./ChannelCard.module.css";

const ChannelCard: React.FC<{ channel: channelItem }> = ({ channel }) => {
  return (
    <div className={classes.head}>
      <div className={classes.banner}>{channel.desc.slice(0, 50)}</div>
      <div className={classes.channelInfo}>
        <img
          src={channel.thumbnail}
          alt="thumbnail"
          className={classes.thumbNail}
        />
        <p className={classes.name}>{channel.name}</p>
        {/* <p className={classes.desc}>{channel.desc.slice(0, 52)}</p> */}
        <p className={classes.subs}>{channel.subs} Subscribers</p>
      </div>
    </div>
  );
};

export default ChannelCard;
