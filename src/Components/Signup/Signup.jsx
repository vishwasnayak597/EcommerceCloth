import React,{Component} from 'react';
import FormInput from '../FormInput/FormInput';
import './Signup.styles.scss';
import CustomButton from '../custom-button/customButton';
import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class signup extends Component{
    constructor(){
        super();
        this.state={
           displayName:'',
           email:'',
           password:'',
           confirmPassword:''
        }
    }
    handleSubmit=async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} =this.state;
        if(password !== confirmPassword){
            alert("Password Dont Match");
            return;
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user,{displayName});
           this.setState({
               displayName:'',
               email:'',
               password:'',
               confirmPassword:''
           });
        }catch(error){
            console.error(error);
        }
    };

    handleChange=(event)=>{
        const {value,name} =event.target;
        this.setState({ [name]: value });  //name might be email or password and value will be corresponsing entered

    };
    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign Up with Your Email and Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" value={displayName} handleChange={this.handleChange} 
                     label="Display Name" required></FormInput>
                     <FormInput name="email" type="email" value={email} handleChange={this.handleChange} 
                     label="Email" required></FormInput>
                     <FormInput name="password" type="password" value={password} handleChange={this.handleChange}
                     label="Password" required></FormInput>
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} handleChange={this.handleChange} 
                     label="Confirm Password" required></FormInput>
                     
                     <CustomButton type="submit" >Sign Up</CustomButton>
                    
                  </form>
            </div>
        );
    }
}
export default signup;