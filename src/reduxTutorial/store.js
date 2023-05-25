// import { createStore } from 'redux'
// import rootReducers from './rootReducers'
// // import rootReducers from '../redux/reducers'

// const store = createStore(rootReducers)

// export default store

import { createStore, applyMiddleware } from 'redux'

import rootReducers from './rootReducers'
// import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
// import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const store = createStore(rootReducers, bindMiddleware([thunk]))

export default store

