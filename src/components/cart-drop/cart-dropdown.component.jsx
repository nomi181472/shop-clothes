
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import "./cart-dropdown.styles.scss"
import CartDroppedItem from "../cart-dropped-Item/cart-dropped-item.component"
import { SelectCartItems } from "../../redux/cart/cart.selector"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router"
import { ToggleCarHidden } from "../../redux/cart/cart.action"
const CartDropDown =({cartItems,history,dispatch})=>{
//console.log("cart",cartItems)
    return(
    <div className="cart-dropdown">
    
    <div className="cart-items">{
        cartItems.length?
        cartItems.map(cartItem=>
        <CartDroppedItem key={cartItem.id} item={cartItem}/>):
    <span className="empty-message">There is no Item in Cart</span>}
     </div>
    <CustomButton onClick={()=>{history.push("/checkout");
    dispatch(ToggleCarHidden());
}}>Go To Checkout
</CustomButton>
    
    </div>)
    }

const mapStateToProps=createStructuredSelector(
    {
        cartItems:SelectCartItems
    }
)

export default withRouter( connect(mapStateToProps)(CartDropDown))