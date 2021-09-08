
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import "./cart-dropdown.styles.scss"
import CartDroppedItem from "../cart-dropped-Item/cart-dropped-item.component"
import { SelectCartItems } from "../../redux/cart/cart.selector"
const CartDropDown =({cartItems})=>{
//console.log("cart",cartItems)
    return(
    <div className="cart-dropdown">
    
    <div className="cart-items">{cartItems.map(cartItem=>
        <CartDroppedItem key={cartItem.id} item={cartItem}/>)} </div>
    <CustomButton>Go To Checkout</CustomButton>
    </div>)
    }

const mapStateToProps=state=>(
    {
        cartItems:SelectCartItems(state)
    }
)

export default connect(mapStateToProps)(CartDropDown)