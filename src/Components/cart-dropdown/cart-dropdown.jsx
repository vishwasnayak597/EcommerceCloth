import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/customButton';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item';
import {selectCartItems} from '../../Redux/cart/cart-selector';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../Redux/cart/cart-action';

const cartDropdown=({cartItems,history, dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length?(
              cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}/>)
            ) 
            
           :( <span className="empty-message">Your cart is empty</span>)
        }
            <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>Go to Checkout Page</CustomButton>
        </div>
    </div>
);

const mapStateToProps=(state)=>({
    cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(cartDropdown));