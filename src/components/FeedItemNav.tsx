import React from 'react';
import './FeedItemNav.css';
import YouTubeIcon from './YouTubeIcon';
import PublishTime from './PublishTime';

type Props = { video: any };

const FeedItemNav = ({ video }: Props) => {
  return (
    <div className="FeedItemNav">
      <YouTubeIcon />
      <PublishTime video={video} />
    </div>
  );
};

export default FeedItemNav;
