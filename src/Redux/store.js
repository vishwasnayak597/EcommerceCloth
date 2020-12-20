import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist';

//setting middleware to send action 
const middlewares=[logger];
//to stop getting console msg in production site
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
//store
export const store=createStore(rootReducer,applyMiddleware(...middlewares));
export const persistor=persistStore(store);


