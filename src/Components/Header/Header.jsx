import React from 'react';
import './Header.styles.scss';
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../Redux/cart/cart-selector';
import {selectCurrentUser} from '../../Redux/User/user-selector';

const Header=({currentUser,hidden})=>(
  <div className="header">
    <Link className="logo-container" to="/">
       <Logo className="logo"/>
    </Link>
    <div className="options">
       <Link className="option" to="/shop">SHOP</Link>
       <Link className="option" to="/contact">CONTACT</Link>
       {
           currentUser?
           (<div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>)
           :
           (<Link className="option" to="/signin">SIGN IN</Link>)
       }
       <CartIcon/>
    </div>
    { 
       hidden? null :
       <CartDropdown/>
    }
  </div>

)
const mapStateToProps=createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps) (Header);