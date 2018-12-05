import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import MediaLink from './MediaLink';
import { mediaLinks } from './constants';

import './App.css';

library.add(fab, faEnvelope, faMobileAlt);

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
