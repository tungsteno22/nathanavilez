import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faStroopwafel, fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Nathan Avilez</h1>
            <h3>Software Engineer</h3>
            <div>
              <a href="https://www.linkedin.com/in/nathanavilez/">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              {'    '}
              <a href="https://github.com/tungsteno22">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
