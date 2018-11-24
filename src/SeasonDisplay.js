import React from 'react';

const SeasonDisplay = props => {
  if (
    (props.lat >= 0 && (props.month >= 3 && props.month <= 8)) ||
    (props.lat <= 0 && (props.month < 3 || props.month > 8))
  ) {
    return <div>It's summertime!</div>;
  }
  return <div>It's wintertime!</div>;
};

export default SeasonDisplay;
