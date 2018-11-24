import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat >= 0 ? 'SUMMER' : 'WINTER';
  } else {
    return lat >= 0 ? 'WINTER' : 'SUMMER';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  return <div>{season}</div>;
};

export default SeasonDisplay;
