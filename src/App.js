import React,{Component} from 'react'
import './App.css';
import HomePage from './Pages/Homepage/homepageComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import ShopPage from './Pages/Shop/ShopPage.component'
import Header from './Components/Header/Header';
import Signinandsignup from './Pages/SigninAndSignUp/SigninAndSignUp';
import checkoutPage from './Pages/checkout/checkout'
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/User/userAction'

class App extends Component {
  
  unsubscribeFromAuth=null;

  componentDidMount() {
    //gets notification when user sign in for this project
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth=>{
      //checks whether user has signed it or not
      if (userAuth) {
        //get userref from create.. from userAuth object passed...if there is no docmunet it creates new in try catch block
        //of firebase and return here
      const userRef = await createUserProfileDocument(userAuth);
      //listen to useref for anhy changes and get first state with snapshot
      userRef.onSnapshot(snapShot => {
       
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });

      });
    }
    //if user signsout set currentuser to null
    setCurrentUser(userAuth);
  });
}

  componentWillUnmount() {
    //close the subscription when user closes 
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      //regardless of what user clicks header should be constant so header should be above switch
      <div>
        <Header/> 
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={checkoutPage}></Route>
          <Route exact path='/signin' render={()=>
              this.props.currentuser?
              (<Redirect to="/" />) :(<Signinandsignup/>)
          }
          ></Route>
        </Switch>
         
      </div>
    );
  }
  
}
const mapStateToProps=({user}) =>({
  currentuser:user.currentuser
})

const mapDispatchToProps=dispatch =>({
   setCurrentUser:user=> dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
