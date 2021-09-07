
import { connect } from "react-redux"
import {ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg.svg"
import {ToggleCarHidden} from "../../redux/cart/cart.action"
import "./cart-icon.styles.scss"
const CartIcon=({ToggleCarHidden})=>(
    <div className="cart-icon">

    <ShoppingIcon className="shopping-con" onClick={ToggleCarHidden}/>
    <span className="item-count" >0</span>
    </div>
)

const mapDispatchToProps=dispatch=>({
    ToggleCarHidden:()=>dispatch(ToggleCarHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon)