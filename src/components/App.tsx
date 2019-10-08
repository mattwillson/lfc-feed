import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import youtube from '../api/youtube';
import { ThemeContext, themes } from '../theme-context';

type State = {
  videos: object[];
  theme: any;
  toggleTheme: () => void;
};

class App extends React.Component<{}, State> {
  toggleTheme = () => {
    if (this.state.theme === themes.light) {
      document.body.style.backgroundColor = '#121212';
    } else {
      document.body.style.backgroundColor = '#fafafa';
    }

    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  state: State = {
    videos: [],
    theme: themes.light,
    toggleTheme: this.toggleTheme
  };

  componentDidMount() {
    this.getVideos('UU9LQwHZoucFT94I2h6JOcjw');
  }

  getVideos = async (playlistId: string) => {
    const response: any = await youtube.get('/playlistItems', {
      params: {
        playlistId: playlistId,
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

    console.log('get videos');

    this.setState({ videos: mostRecentUploads });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div
          className="App"
          style={{ backgroundColor: this.state.theme.App_background }}
        >
          <Header getVideos={this.getVideos} />
          <Feed videos={this.state.videos} />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
