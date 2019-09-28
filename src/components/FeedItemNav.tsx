import React, { useContext } from 'react';
import moment from 'moment';
import './FeedItemNav.css';
import YouTubeIcon from './YouTubeIcon';
import { ThemeContext } from '../theme-context';

type Props = { video: any };

const FeedItemNav = ({ video }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="FeedItemNav">
      <YouTubeIcon />
      <time
        dateTime={video.snippet.publishedAt}
        title={moment(video.snippet.publishedAt).format('ll')}
        style={{ color: theme.time }}
      >
        {moment(video.snippet.publishedAt).fromNow()}
      </time>
    </div>
  );
};

export default FeedItemNav;
