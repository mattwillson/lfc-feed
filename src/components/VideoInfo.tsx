import React, { useContext } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './VideoInfo.css';
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
      <h1 style={{ color: theme.VideoInfo_foreground }}>
        {video.snippet.title}
      </h1>
      <ProgressBar
        now={100 - likes / dislikes / 100}
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
