import React from "react";
import {Provider} from "react-redux";
/**
 * Import render to attach react to root app
 */
import {render} from "react-dom";
/**
 * Import the main entry for this application
 */
import App from "./App/App";
/**
 * Get the initial state
 */
import store, {history} from "./store";
/**
 * Import browser router for our main application
 */
import {ConnectedRouter} from "react-router-redux";

/**
 * Dont forget to Render it to the dom element
 */
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app-root")
);