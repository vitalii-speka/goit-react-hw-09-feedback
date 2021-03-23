import React from 'react';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className="button button2"
          name={option}
          type="button"
          onClick={onLeaveFeedback}
          color="primary"
          size="large"
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.string.isRequired,
};
export default FeedbackOptions;
