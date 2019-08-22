import React from 'react';
import './Feed.css';
import FeedItem from './FeedItem';

type Props = { videos: object[] };

const Feed = ({ videos }: Props): JSX.Element => {
  const youtubeList: JSX.Element[] = videos.map((video: any) => {
    const id: string = video.snippet.resourceId.videoId;

    return <FeedItem video={video} videoId={id} key={id} />;
  });

  return <div className="Feed">{youtubeList}</div>;
};

export default Feed;
