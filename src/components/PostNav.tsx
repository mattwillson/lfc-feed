import React from 'react';
import './PostNav.css';
import YouTubeIcon from './YouTubeIcon';
import PublishTime from './PublishTime';

type Props = { video: any };

const PostNav = ({ video }: Props) => {
  return (
    <div className="PostNav">
      <YouTubeIcon />
      <PublishTime video={video} />
    </div>
  );
};

export default PostNav;
