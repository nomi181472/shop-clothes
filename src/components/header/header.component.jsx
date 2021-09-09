import "./header.styles.scss"
import {ReactComponent as Logo} from "../../assets/4.3 crown.svg.svg"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"

import "./header.styles.scss"
import { connect } from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component"
import { createStructuredSelector } from "reselect"
import CartDropDown from "../cart-drop/cart-dropdown.component"
import { selectCurrentUser } from "../../redux/user/user.select"
import { selectCartHidden } from "../../redux/cart/cart.selector"
const Header=({currentUser,hidden})=>{
    return (<div className="header">
        <Link className="logo-container" to="/">
        <Logo className="logo"/>
        </Link>
        <div className="options">
        <Link className="option" to ="/shop" >
        Shop
        </Link>
        <Link className="option" to ="/shop">
        Contact
        </Link>
        {
            currentUser?
            <div className="option" onClick={()=>auth.signOut()}> Sign Out</div> :
            <Link className="option" to="/signin" > Sign In </Link>
        }
        <CartIcon/>
        </div>
        {
            hidden?null:  <CartDropDown/>}

        </div>)
}

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps) (Header)