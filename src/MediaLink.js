import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};
