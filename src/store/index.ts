import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk"
import reduxLogger from "redux-logger";
import { rootReducers, configureReducer } from "./reducers";

const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) =>
    createStore(
        configureReducer(reducers),
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

export default configureStore;