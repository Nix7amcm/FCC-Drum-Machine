import { TRIGGER_PAD } from './actions';

//--- Define the initial state of the drum machine
const initialState = {
  pads: [
    {
      id: 'Q',
      label: 'Heater 1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      id: 'W',
      label: 'Heater 2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      id: 'E',
      label: 'Heater 3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      id: 'A',
      label: 'Heater 4',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      id: 'S',
      label: 'Clap',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      id: 'D',
      label: 'Open HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      id: 'Z',
      label: "Kick n' Hat",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      id: 'X',
      label: 'Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      id: 'C',
      label: 'Closed HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ],
  displayText: '',
};

//--- Define the reducer
export const drumMachineReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case TRIGGER_PAD:
      return {
        ...state,
        displayText: action.payload.padLabel,
      };
    default:
      return state;
  }
};

export default drumMachineReducer;