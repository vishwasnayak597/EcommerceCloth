import React from 'react';
import { HeaderContainer, LogoContainer,OptionsContainer,OptionLink} from './header.styles';
import CartIcon from '../cart-icon/cart-icon'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../Redux/cart/cart-selector';
import {selectCurrentUser} from '../../Redux/User/user-selector';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

 
 const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
 });
 
 export default connect(mapStateToProps)(Header);