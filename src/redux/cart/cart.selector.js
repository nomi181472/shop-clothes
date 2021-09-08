import { createSelector } from "reselect";

const selectCart=state=>state.cart;

export const SelectCartItems=createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)

export const selectCartItemsCount=createSelector([SelectCartItems],
    cartItems=>cartItems.reduce(
        (accumalatedValues,cartItem)=>accumalatedValues+cartItem.quantity,0))