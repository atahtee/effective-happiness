import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { disableReactDevTools} from '@fvilers/disable-react-devtools'

import reducers from "./reducers";
import App from "./App";
import './index.css';
if (process.env.NODE_ENV === 'production') disableReactDevTools()


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
