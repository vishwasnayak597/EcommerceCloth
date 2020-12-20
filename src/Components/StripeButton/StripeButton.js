import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    //converting into cents
    const priceForStripe= price * 0.0412;
    //from stripe site
    const publishableKey="pk_test_51I0LiILoL3JG0kgVw9wJRq0u4HeHetFVnLRnqAbMi1O0PFZrWQeyRLmIHFgxrunzY8Ae0lZAAYhDHvvZz9exV0np00pwaMmnDP";
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };
    return(
        <StripeCheckout
            label="Pay Now"
            name="Nayak clothing ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price} rupees`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} 
          />
    );

}

export default StripeCheckoutButton;