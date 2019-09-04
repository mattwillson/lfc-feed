import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import youtube from '../api/youtube';

type State = {
  videos: object[];
};

class App extends React.Component<{}, State> {
  state: State = {
    videos: []
  };

  componentDidMount() {
    this.getVideos();
  }

  getVideos = async () => {
    const response: any = await youtube.get('/playlistItems', {
      params: {
        playlistId: 'UU9LQwHZoucFT94I2h6JOcjw',
        part: 'snippet',
        maxResults: 30
      }
    });

    const uploads: object[] = response.data.items;

    const mostRecentUploads: object[] = uploads.sort((a: any, b: any) => {
      const videoA = a.snippet.publishedAt.toUpperCase();
      const videoB = b.snippet.publishedAt.toUpperCase();

      if (videoA > videoB) {
        return -1;
      }

      if (videoA < videoB) {
        return 1;
      }

      return 0;
    });

    this.setState({ videos: mostRecentUploads });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Feed videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
