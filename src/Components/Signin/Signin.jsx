import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import {auth } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/customButton';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './Signin.styles.scss';

 class Signin extends Component {
     constructor(props){
         super(props);
         this.state={
            email:'',
            password:''
         };
     }

      handleSubmit=async event => {
        event.preventDefault();
        const {email,password} =this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
           }catch(error){
            console.error(error);
        }
       
    };

     handleChange=(event)=>{
         const {value,name} =event.target;
         this.setState({ [name]: value });  //name might be email or password and value will be corresponsing entered

     };
    render() {
        return (
            <div className='sign-in'>
                 <h2>I already have a account</h2>
                 <span>Sign In with your Email and Password</span>

                 <form onSubmit={this.handleSubmit}>
                     <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} 
                     label="Email" required></FormInput>
                    
                     <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange}
                     label="Password" required></FormInput>
                     <div className='buttons'>
                     <CustomButton type="button">Sign in</CustomButton>
                     <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                     </div>
                  </form>
            </div>
        );
    }
}
//here signin is children which is passed to custom button
export default Signin;