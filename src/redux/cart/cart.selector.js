import { createSelector } from "reselect";

const selectCart=state=>state.cart;

export const SelectCartItems=createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)

export const selectCartItemsCount=createSelector([SelectCartItems],
    cartItems=>cartItems.reduce(
        (accumalatedValues,cartItem)=>accumalatedValues+cartItem.quantity,0))

export const selectCartHidden=createSelector(
    [selectCart],
    cart=>cart.hidden
)
export const selectCostTotal=createSelector([SelectCartItems],
    cartItems=>cartItems.reduce(
        (accumalatedValues,cartItem)=>accumalatedValues+cartItem.quantity*cartItem.price,0))
