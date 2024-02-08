import { configureStore } from '@reduxjs/toolkit';
import drumMachineReducer from './reducers';

const store = configureStore( {
  reducer: {
    drumMachine: drumMachineReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
} );

export default store;