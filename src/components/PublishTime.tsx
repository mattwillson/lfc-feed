import React, { useContext } from 'react';
import moment from 'moment';
import { ThemeContext } from '../theme-context';

type Props = { video: any };

const PublishTime = ({ video }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <time
      dateTime={video.snippet.publishedAt}
      title={moment(video.snippet.publishedAt).format('ll')}
      style={{ color: theme.time }}
    >
      {moment(video.snippet.publishedAt).fromNow()}
    </time>
  );
};

export default PublishTime;
