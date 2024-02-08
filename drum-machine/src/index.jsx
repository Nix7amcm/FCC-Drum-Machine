import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';


const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


//>>> Render the App component to the root element
//>>> Use the Provider component to make the store available to the App component