import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import "./css/main.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector("#root")
);