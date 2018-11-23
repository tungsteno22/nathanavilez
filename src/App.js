import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import MediaLink from './MediaLink';

import './App.css';

library.add(fab, faEnvelope, faMobileAlt);

const mediaLinks = [
  {
    href: 'https://www.linkedin.com/in/nathanavilez/',
    icon: ['fab', 'linkedin'],
  },
  {
    href: 'https://github.com/tungsteno22',
    icon: ['fab', 'github'],
  },
  {
    href: 'https://medium.com/@tungsteno22',
    icon: ['fab', 'medium'],
  },
  {
    href: 'mailto:tungsteno22@gmail.com',
    icon: faEnvelope,
  },
  {
    href: 'tel:+13109935831',
    icon: faMobileAlt,
  },
];

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
