import React from "react";
import ReactDOM from "react-dom";

import Application from "./components/Application";

import "./index.css";

import { Provider } from "mobx-react";
import ItemList from "./store/ItemList";

const itemList = new ItemList();

ReactDOM.render(
  <Provider>
    <Application />
  </Provider>,
  document.getElementById("root")
);
