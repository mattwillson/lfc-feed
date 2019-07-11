import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';

class App extends React.Component {
  onYoutubeClick = (videos: object[]): void => {
    console.log(videos);
  };

  render() {
    return (
      <div className="App">
        <Header onYoutubeClick={this.onYoutubeClick} />
        <Feed />
      </div>
    );
  }
}

export default App;
