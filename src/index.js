import React from 'react';
import ReactDOM from 'react-dom';
import {SWRConfig} from 'swr';
import './components/dnd.css';
import App from './components/dnd';
import * as serviceWorker from './serviceWorker';
import { makeServer } from "./server"

// Whenever it is time for a real server, this should be removed.
makeServer({ environment: "development" })

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then(res => res.json())
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
