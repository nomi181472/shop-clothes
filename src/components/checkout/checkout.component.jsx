import { connect } from "react-redux"
import { addItem, clearItemFromCart } from "../../redux/cart/cart.action"
import { removeItemFromCart } from "../../redux/cart/cart.utils"

import "./checkout-item.styles.scss"


const CheckoutItem=({cartItem,clearItem,addingItem,removingItem})=>{
    const {name,imageUrl,price,quantity}=cartItem
    return(
    <div className="checkout-item">
    <div className="image-container">
    <img  src={imageUrl} alt="item" />

    </div>
    <span className="name">
{name}
    </span>
    <span className="price">
{price}
    </span>
    <span className="quantity">
    <div className="arrow" onClick={()=>removingItem(cartItem)}>&#10094;</div>
{quantity}
<div className="arrow" onClick={()=>addingItem(cartItem)}>&#10095;</div>
    </span>
    <div className="remove-button" onClick={()=>clearItem(cartItem)}>
&#10005;
    </div>
 
    </div>
    )}
const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearItemFromCart(item)),
    addingItem:item=>dispatch(addItem(item)),
    removingItem:item=>dispatch(removeItemFromCart(item))
}

)
export default connect(null,mapDispatchToProps) (CheckoutItem)