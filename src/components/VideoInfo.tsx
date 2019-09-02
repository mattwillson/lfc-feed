import React from 'react';
import moment from 'moment';
import { ProgressBar } from 'react-bootstrap';
import './VideoInfo.css';

type Props = {
  views: number;
  likes: number;
  dislikes: number;
  video: any;
};

const VideoInfo = ({ views, likes, dislikes, video }: Props): JSX.Element => {
  const addCommas: (x: number) => string = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="VideoInfo">
      <h1>{video.snippet.title}</h1>
      <ProgressBar
        now={100 - likes / dislikes / 100}
        title={`${addCommas(likes)} likes / ${addCommas(dislikes)} dislikes`}
      ></ProgressBar>
      <span>{addCommas(views)} views</span>
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
