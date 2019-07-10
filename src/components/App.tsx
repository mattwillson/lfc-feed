import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Feed />
      </div>
    );
  }
}

export default App;
