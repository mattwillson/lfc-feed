import React from 'react';
import './Feed.css';
import Post from './Post';

type Props = { videos: object[] };

const Feed = ({ videos }: Props) => {
  const youtubeList: JSX.Element[] = videos.map((video: any) => {
    const id: string = video.snippet.resourceId.videoId;

    return <Post video={video} videoId={id} key={id} />;
  });

  return <div className="Feed">{youtubeList}</div>;
};

export default Feed;
