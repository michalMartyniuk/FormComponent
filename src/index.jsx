import { hot } from "react-hot-loader/root";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import App from "./components/App";

const store = createStore(rootReducer);
const HotApp = hot(App);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
