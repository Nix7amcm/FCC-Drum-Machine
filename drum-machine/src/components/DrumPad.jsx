import React, { useEffect, useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { triggerPad } from "../redux/actions";
import '../styles/drum-pad.css';

const DrumPad = ( { padId, padLabel, audioSrc } ) => {
  const dispatch = useDispatch();
  const audioRef = useRef( null ); //--- Create a ref for the audio element
  const [ isActive, setIsActive ] = useState( false ); //--- State to handle the active class toggle

  const playSound = useCallback( () => {
    const audio = audioRef.current; //--- Use the ref to reference the audio element
    if ( audio ) {
      setIsActive( true ); //--- Set the active state to true when the pad is played
      audio.currentTime = 0;
      audio.play();
      dispatch( triggerPad( padLabel ) );
      setTimeout( () => setIsActive( false ), 100 ); //--- Set it back to false after a short delay
    }
  }, [ dispatch, padId, padLabel ] );

  //>>> Add event listener for keydown
  useEffect( () => {
    const handleKeyPress = ( e ) => {
      if ( e.key.toUpperCase() === padId.toUpperCase() ) {
        playSound();
      }
    };
    document.addEventListener( "keydown", handleKeyPress );
    return () => {
      document.removeEventListener( "keydown", handleKeyPress );
    };
  }, [ padId, playSound ] );

  return (
    <div className="col-4 d-flex justify-content-center">
      <button
        id={padId}
        className={`drum-pad d-flex justify-content-center align-items-center h5 rounded-circle w-100 m-1 mb-2 p-4 ${isActive ? 'pad-pressed' : ''}`}
        onClick={playSound}
        //>>> onMouseDown and onMouseUp to handle the mouse press effect
        onMouseDown={() => setIsActive( true )}
        onMouseUp={() => setIsActive( false )}
        //>>> onTouchStart and onTouchEnd for touch screens
        onTouchStart={() => setIsActive( true )}
        onTouchEnd={() => setIsActive( false )}
      >
        {padId}
        <audio
          ref={audioRef}
          id={padId}
          className="clip"
          src={audioSrc}
          preload="auto"
        ></audio>
      </button>
    </div>
  );
};

export default DrumPad;