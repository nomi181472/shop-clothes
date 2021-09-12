import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100
     const publishableKey="pk_test_51JZ0QaBRyCYp9lwm6fkoKueVdnljn7Q6i01WlcLSiCmldO7LsiIWBislkkJV6b2kjSCexgYEoCMUL0Pp68eE4u4r00QyW6niAY"
  const   onToken=token=>{
alert("clicked")
     } 
     return (
         <StripeCheckout  
         label="Pay Now"
         name="crwn Clothing LTD."
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`price: ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

         />
     )
}

export default StripeCheckoutButton