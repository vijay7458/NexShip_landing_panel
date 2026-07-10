
import rootSaga from './saga/rootSaga';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducer/rootReducer'
import { applyMiddleware, createStore } from "redux";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;