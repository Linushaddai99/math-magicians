import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { content, classes, handleClick } = props;
  return (
    <button type="button" className={`${classes}`} onClick={handleClick}>{content}</button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
