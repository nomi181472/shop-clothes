import { SignIn } from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"
import "./signin-signup.style.scss"
const SignInAndUp=()=>{
    return (<div className="sign-in-and-sign-up">
    Sign In
    <SignIn/>
    <SignUp/>
        </div>)
}
export default SignInAndUp