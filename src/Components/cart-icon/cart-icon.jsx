import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/cart/cart-action';
import {selectCartItemsCount} from '../../Redux/cart/cart-selector' 

const CartIcon =({toggleCartHidden,itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
       <ShoppingIcon className="shopping-icon"/>
       <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
});
const mapStateToProps=(state)=>({
    itemCount:()=> selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);