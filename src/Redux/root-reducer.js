import {combineReducers} from 'redux';
import userReducer from './User/userReducer';
import cartReducer from './cart/cart-reducer';
import {persistReducer} from 'redux-persist';
//local storage object
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory-redux/directory.reducer';
import shopReducer from './shop/shop-reducer';

const persistConfig={
    key:'root',
    storage,
    //since user is stored in firebase so need to add user
    whitelist:['cart']
}
const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop: shopReducer
});
export default persistReducer(persistConfig,rootReducer);