import React from 'react';
import './PostNav.css';
import YouTubeIcon from './YouTubeIcon';
import PublishTime from './PublishTime';
import OpenIcon from './OpenIcon';

type Props = {
  handleClick: () => void;
  video: any;
};

const PostNav = ({ handleClick, video }: Props) => {
  return (
    <div className="PostNav">
      <div>
        <YouTubeIcon />
        <PublishTime video={video} />
      </div>
      <OpenIcon handleClick={handleClick} />
    </div>
  );
};

export default PostNav;
