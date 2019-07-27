import React from 'react';
import youtube from '../api/youtube';

type Props = {
  onClick: (videos: object[]) => void;
};

class YouTubeIcon extends React.Component<Props, {}> {
  handleClick = async () => {
    const response = await youtube.get('/playlistItems', {
      params: {
        playlistId: 'UU9LQwHZoucFT94I2h6JOcjw'
      }
    });

    this.props.onClick(response.data.items);
  };

  render() {
    return (
      <svg
        onClick={this.handleClick}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        aria-labelledby="title"
      >
        <title id="title">YouTube</title>
        <path
          fill="#f00"
          d="M31.327 8.273c-0.386-1.353-1.431-2.398-2.756-2.777l-0.028-0.007c-2.493-0.668-12.528-0.668-12.528-0.668s-10.009-0.013-12.528 0.668c-1.353 0.386-2.398 1.431-2.777 2.756l-0.007 0.028c-0.443 2.281-0.696 4.903-0.696 7.585 0 0.054 0 0.109 0 0.163l-0-0.008c-0 0.037-0 0.082-0 0.126 0 2.682 0.253 5.304 0.737 7.845l-0.041-0.26c0.386 1.353 1.431 2.398 2.756 2.777l0.028 0.007c2.491 0.669 12.528 0.669 12.528 0.669s10.008 0 12.528-0.669c1.353-0.386 2.398-1.431 2.777-2.756l0.007-0.028c0.425-2.233 0.668-4.803 0.668-7.429 0-0.099-0-0.198-0.001-0.297l0 0.015c0.001-0.092 0.001-0.201 0.001-0.31 0-2.626-0.243-5.196-0.708-7.687l0.040 0.258zM12.812 20.801v-9.591l8.352 4.803z"
        />
      </svg>
    );
  }
}

export default YouTubeIcon;
