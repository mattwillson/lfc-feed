import React, { useContext } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './VideoInfo.css';
import PostTitle from './PostTitle';
import PublishTime from './PublishTime';
import { ThemeContext } from '../theme-context';

type Props = {
  views: number;
  likes: number;
  dislikes: number;
  video: any;
};

const VideoInfo = ({ views, likes, dislikes, video }: Props) => {
  const { theme } = useContext(ThemeContext);

  const addCommas: (x: number) => string = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div
      className="VideoInfo"
      style={{ backgroundColor: theme.VideoInfo_background }}
    >
      <PostTitle video={video} />
      <ProgressBar
        now={dislikes === 0 ? 100 : 100 - likes / dislikes / 100}
        title={`${addCommas(likes)} likes / ${addCommas(dislikes)} dislikes`}
      ></ProgressBar>
      <span style={{ color: theme.VideoInfo_foreground }}>
        {addCommas(views)} views
      </span>
      <PublishTime video={video} />
    </div>
  );
};

export default VideoInfo;
