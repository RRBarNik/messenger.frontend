import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk"
import reduxLogger from "redux-logger";
import { rootReducer } from "./reducers";

const configureStore = (preloadedState = {}, middlewares = []) =>
    createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                ...middlewares,
                thunk,
                reduxLogger
            ),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__
            && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

const store = configureStore();

export default store;