import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import CheckoutItem from "../../components/checkout/checkout.component"
import { SelectCartItems, selectCostTotal } from "../../redux/cart/cart.selector"
import "./checkout.styles.scss"
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"
const CheckoutPage=({total,cartItems})=>(
    <div className="checkout-page">
    <div className="checkout-header">
    <div className="header-block">
    <span> Product</span> 
    </div>
    <div className="header-block">
    <span> Description</span>
    </div>
    <div className="header-block">
    <span> Price</span>
    </div>
    <div className="header-block">
    <span> Remove</span>
    </div>
    </div>
    {
        cartItems.map(cartItem=>(<CheckoutItem key={ cartItem.id} cartItem={cartItem} />))
    }
    <div className="total">
<span>Total:${total}</span>
    </div>
    <StripeCheckoutButton price={total} />
    </div>
)
const mapStateToProps=createStructuredSelector(
    {
        cartItems:SelectCartItems,
        total:selectCostTotal
    }
)

export default connect(mapStateToProps )(CheckoutPage)