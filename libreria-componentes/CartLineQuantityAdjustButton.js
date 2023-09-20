import {
    CartLineQuantityAdjustButton,
    CartLineProvider,
    CartProvider,
  } from '@shopify/hydrogen-react';
  
export function Example({line}) {
return (
    <CartProvider>
    <CartLineProvider line={line}>
        <CartLineQuantityAdjustButton adjust="increase">
        Increase
        </CartLineQuantityAdjustButton>
        <CartLineQuantityAdjustButton adjust="decrease">
        Decrease
        </CartLineQuantityAdjustButton>
        <CartLineQuantityAdjustButton adjust="remove">
        Remove
        </CartLineQuantityAdjustButton>
    </CartLineProvider>
    </CartProvider>
);
}

  
/* 
  
  CartLineQuantityAdjustButton
component
The <CartLineQuantityAdjustButton/> component renders a span (or another element / component that can be customized by the as prop) with the cart line's quantity.

It must be a descendent of a <CartLineProvider/> component, and uses the useCartLine() hook internally.

Anchor to section titled 'Props'
Props
Anchor to adjust
adjust
"remove" | "increase" | "decrease"
The adjustment for a cart line's quantity. Valid values: increase (default), decrease, or remove.
  
*/