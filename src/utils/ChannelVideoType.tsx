export interface RootObject {
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  regionCode: string;
}

export interface Item {
  id: ID;
  kind: ItemKind;
  snippet: Snippet;
}

export interface ID {
  kind: IDKind;
  playlistId?: string;
  videoId?: string;
}

export enum IDKind {
  YoutubePlaylist = "youtube#playlist",
  YoutubeVideo = "youtube#video",
}

export enum ItemKind {
  YoutubeSearchResult = "youtube#searchResult",
}

export interface Snippet {
  channelId: ChannelID;
  channelTitle: ChannelTitle;
  description: string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: Thumbnails;
  title: string;
}

export enum ChannelID {
  UCBVjMGOIkavEAhyqpxJ73DW = "UCBVjMGOIkavEAhyqpxJ73Dw",
}

export enum ChannelTitle {
  Maroon5 = "Maroon 5",
}

export enum LiveBroadcastContent {
  None = "none",
}

export interface Thumbnails {
  default: Default;
  high: Default;
  medium: Default;
}

export interface Default {
  height: number;
  url: string;
  width: number;
}

export interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
