import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss"
import { signInWithGoogle } from "../../firebase/firebase.utils";
export class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            "email":"",
            "password":""
        }
    }
    handleChange=event=>{
        const {value,name}=event.target
        this.setState({[name]:value})
    }

     handleSubmit=event=>{
        event.preventDefualt()
    this.setState({email:"",password:""})
    }
    render(){
        return <div className="sign-in">
            <h2 className="title"> I already have an account</h2>
            <span> Sign in with you email and password</span>
            <form onSubmit={this.handleSubmit}>
            <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} label="email" required/>
            
            <FormInput name="password" type="password" value={this.state.password} onChange={this.handleChange} label="password" required/>
            <div className="buttons">
            <CustomButton type="submit" >Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in With Google</CustomButton>
            </div>
            </form>
        </div>
    }
}