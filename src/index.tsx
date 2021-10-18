import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import "./css/main.css";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.querySelector("#root")
);