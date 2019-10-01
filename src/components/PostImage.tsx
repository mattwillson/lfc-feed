import React from 'react';
import { Card } from 'react-bootstrap';
import './PostImage.css';

type Props = {
  handleClick: () => void;
  video: any;
};

const PostImage = ({ handleClick, video }: Props) => {
  const getImgSrc: () => string = () => {
    const { thumbnails } = video.snippet;
    return thumbnails.maxres ? thumbnails.maxres.url : thumbnails.medium.url;
  };

  return (
    <button className="PostImage" onClick={handleClick}>
      <Card>
        <Card.Img src={getImgSrc()} title={video.snippet.title} />
        <Card.ImgOverlay>
          <Card.Text>{video.snippet.title}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </button>
  );
};

export default PostImage;
