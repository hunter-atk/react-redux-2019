import React from 'react';

const SeasonDisplay = props => {
  if (props.lat >= 0) {
    return <div>You're in the northern hemisphere!</div>;
  }
  return <div>You're in the southern hemisphere!</div>;
};

export default SeasonDisplay;
