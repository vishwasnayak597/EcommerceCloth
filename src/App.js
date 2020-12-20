import React,{Component} from 'react'
import './App.css';
import HomePage from './Pages/Homepage/homepageComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import ShopPage from './Pages/Shop/ShopPage.component'
import Header from './Components/Header/Header';
import SigninAndSignOut from './Pages/SigninAndSignUp/SigninAndSignUp';
import CheckoutPage from './Pages/checkout/checkout'
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/User/userAction';
import { selectCurrentUser } from './Redux/User/user-selector';
import { createStructuredSelector } from 'reselect';

class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SigninAndSignOut/>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
