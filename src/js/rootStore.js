import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleWare from "redux-promise-middleware";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, promiseMiddleWare() )))

  export default rootStore;