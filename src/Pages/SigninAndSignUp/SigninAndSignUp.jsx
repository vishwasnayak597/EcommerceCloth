import React from 'react';
import './SigninAndSignup.styles.scss';
import SignIn from '../../Components/Signin/Signin';
import SignUp from '../../Components/Signup/Signup'
const SigninAndSignOut =()=>(
    <div className="sign-in-and-sign-up">
       <SignIn/>
       <SignUp/>
    </div>
)

export default SigninAndSignOut;