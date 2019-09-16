import React from 'react';
import YouTubeIframe from 'youtube-iframe';
import { ResponsiveEmbed } from 'react-bootstrap';

type Props = { videoId: string };

const VideoEmbed = ({ videoId }: Props) => {
  YouTubeIframe.load(function(YT) {
    console.log(new YT.Player('player'));
  });

  return (
    <ResponsiveEmbed className="VideoEmbed" aspectRatio="16by9">
      <iframe
        id="player"
        title="video player"
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&enablejsapi=1`}
        allowFullScreen
      ></iframe>
    </ResponsiveEmbed>
  );
};

export default VideoEmbed;
