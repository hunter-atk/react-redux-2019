import React from 'react';

const Spinner = () => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        Please allow us to read your location...
      </div>
    </div>
  );
};

export default Spinner;
