import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.elementType,
};

export const Card = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;

