import React from 'react';
import Display from './Display.jsx';
import DrumPad from './DrumPad.jsx';
import { useSelector } from 'react-redux';
import '../styles/drum-machine.css';

const DrumMachine = () => {
  const pads = useSelector( ( state ) => state.drumMachine.pads );

  return (
    <div id="drum-machine" className="container rounded pt-4">
      <div className='content-container'>
        
        <div className='d-flex flex-column justify-content-between align-items-center'>
          <div className="h3 d-flex">
            <i class="fa-solid fa-drum fa-shake me-2"></i>
            <i class="fa-solid fa-music fa-bounce"></i>
          </div>
          <Display />
        </div>

        <div className="row justify-content-center">
          {pads.map( ( pad ) => (
            <DrumPad key={pad.id} padId={pad.id} padLabel={pad.label} audioSrc={pad.src} />
          ) )}
        </div>
      
      </div>
    </div>
  );
};

export default DrumMachine;