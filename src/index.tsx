import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

import ActiveAndPassiveAbilities from "./components/ActiveAndPassiveAbilities/ActiveAndPassiveAbilities";
import Items from "./components/Items/Items";
import { Skills } from "./components/Skills/Skills";
import { Spells } from "./components/Spells";
import LoadApp from "./components/dnd";

import "./index.css";
import { makeServer } from "./server";
import * as serviceWorker from "./serviceWorker";

// Whenever it is time for a real server, this should be removed.
makeServer({ environment: "development" });

render(
  <StrictMode>
    <RecoilRoot>
      <SWRConfig
        value={{
          fetcher: (...args: Parameters<typeof fetch>) =>
            fetch(...args).then((res) => res.json()),
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoadApp />}>
              <Route path="main" element={<></>} />
              <Route path="skills" element={<Skills />} />
              <Route path="items" element={<Items />} />
              <Route path="spells" element={<Spells />} />
              <Route path="abilities" element={<ActiveAndPassiveAbilities />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
