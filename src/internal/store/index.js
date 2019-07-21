import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './../modules/Reducers';
import promiseMiddleware from 'redux-promise';
import {actionMiddleware} from "../middleware/ActionMiddleware";

const rootReducer = combineReducers({
    ...reducers
});

const enhancer = compose(
  applyMiddleware(
    promiseMiddleware,
    actionMiddleware(),
  ));

const configureStore = () => {
    return createStore(rootReducer, {}, enhancer);
};

export default configureStore;
