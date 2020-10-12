import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";
import "./components/dnd.css";
import LoadApp from "./components/dnd";
import * as serviceWorker from "./serviceWorker";
import { makeServer } from "./server";

// Whenever it is time for a real server, this should be removed.
makeServer({ environment: "development" });

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <SWRConfig
        value={{
          fetcher: (...args) => fetch(...args).then((res) => res.json()),
        }}
      >
        <LoadApp />
      </SWRConfig>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
