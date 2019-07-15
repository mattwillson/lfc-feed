import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';

type State = {
  videos: object[];
};

class App extends React.Component<{}, State> {
  state: State = {
    videos: []
  };

  onYoutubeClick = (videos: object[]): void => {
    this.setState({
      videos: videos
    });
  };

  render() {
    return (
      <div className="App">
        <Header onYoutubeClick={this.onYoutubeClick} />
        <Feed videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
