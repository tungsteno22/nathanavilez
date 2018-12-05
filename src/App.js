import React, { Component } from 'react';
import MediaLink from './MediaLink';
import { mediaLinks } from './constants';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Nathan Avilez</h1>
            <h3>Software Engineer</h3>
            <div id="contact">
              {mediaLinks.map(mediaLink => (
                <MediaLink {...mediaLink} />
              ))}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
