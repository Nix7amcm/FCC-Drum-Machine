import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/display.css';

const Display = () => {
  const displayText = useSelector( ( state ) => state.drumMachine.displayText );

  return (
    <div id="display" className="h5 fw-bold d-flex justify-content-center align-items-center rounded my-3">
      {displayText}
    </div>
  );
};

export default Display;