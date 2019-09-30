import React, { useContext } from 'react';
import { ThemeContext } from '../theme-context';

type Props = { video: any };

const PostTitle = ({ video }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h1 style={{ color: theme.VideoInfo_foreground }}>{video.snippet.title}</h1>
  );
};

export default PostTitle;
