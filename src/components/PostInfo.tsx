import React from 'react';
import './PostInfo.css';
import OpenIcon from './OpenIcon';
import YouTubeIcon from './YouTubeIcon';
import PostTitle from './PostTitle';
import PublishTime from './PublishTime';

type Props = {
  handleClick: () => void;
  video: any;
};

const PostInfo = ({ handleClick, video }: Props) => {
  return (
    <div className="PostInfo">
      <div>
        <OpenIcon handleClick={handleClick} />
        <YouTubeIcon />
      </div>
      <PostTitle video={video} />
      <PublishTime video={video} />
    </div>
  );
};

export default PostInfo;
