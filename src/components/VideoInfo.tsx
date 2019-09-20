import React, { useContext } from 'react';
import moment from 'moment';
import { ProgressBar } from 'react-bootstrap';
import './VideoInfo.css';
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
    <div className="VideoInfo" style={{ backgroundColor: theme.background_2 }}>
      <h1 style={{ color: theme.foreground }}>{video.snippet.title}</h1>
      <ProgressBar
        now={100 - likes / dislikes / 100}
        title={`${addCommas(likes)} likes / ${addCommas(dislikes)} dislikes`}
      ></ProgressBar>
      <span style={{ color: theme.foreground }}>{addCommas(views)} views</span>
      <time
        dateTime={video.snippet.publishedAt}
        title={moment(video.snippet.publishedAt).format('ll')}
      >
        {moment(video.snippet.publishedAt).fromNow()}
      </time>
    </div>
  );
};

export default VideoInfo;
