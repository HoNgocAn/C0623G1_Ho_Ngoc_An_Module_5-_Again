
import {rootReducer} from "./reducers/rootReducer";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./middlewares/postSagaMiddleware";



const initStore  = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;