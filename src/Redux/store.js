import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist';

//setting middleware to send action 
const middlewares=[logger];

//store
export const store=createStore(rootReducer,applyMiddleware(...middlewares));
export const persistor=persistStore(store);


