import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import YouTube from 'react-youtube';

type Props = { videoId: string };

const VideoEmbed = ({ videoId }: Props) => {
  const opts: any = {
    playerVars: {
      modestbranding: 1,
      rel: 0
    }
  };

  return (
    <ResponsiveEmbed className="VideoEmbed" aspectRatio="16by9">
      <YouTube videoId={videoId} opts={opts} />
    </ResponsiveEmbed>
  );
};

export default VideoEmbed;
