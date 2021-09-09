
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg.svg"
import {ToggleCarHidden} from "../../redux/cart/cart.action"
import { selectCartItemsCount } from "../../redux/cart/cart.selector"
import "./cart-icon.styles.scss"
const CartIcon=({ToggleCarHidden,itemCount})=>(
    <div className="cart-icon">

    <ShoppingIcon className="shopping-con" onClick={ToggleCarHidden}/>
    <span className="item-count" >{itemCount}</span>
    </div>
)

const mapDispatchToProps=dispatch=>({
    ToggleCarHidden:()=>dispatch(ToggleCarHidden())
})
const mapStateToProps=createStructuredSelector(
    {
        itemCount:selectCartItemsCount
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)