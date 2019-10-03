import React from 'react';
import './PostNav.css';
import YouTubeIcon from './YouTubeIcon';
import PublishTime from './PublishTime';
import OpenIcon from './OpenIcon';

type Props = { video: any };

const PostNav = ({ video }: Props) => {
  return (
    <div className="PostNav">
      <div>
        <YouTubeIcon />
        <PublishTime video={video} />
      </div>
      <OpenIcon />
    </div>
  );
};

export default PostNav;
