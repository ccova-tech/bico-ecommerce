import {CartLineQuantity, CartLineProvider} from '@shopify/hydrogen-react';

export function Example({line}) {
  return (
    <CartLineProvider line={line}>
      <CartLineQuantity />
    </CartLineProvider>
  );
}


/* 

CartLineQuantity
component
The <CartLineQuantity/> component renders a span (or another element / component that can be customized by the as prop) with the cart line's quantity.

It must be a descendent of a <CartLineProvider/> component, and uses the useCartLine() hook internally.

Anchor to section titled 'Props'
Props
Anchor to as
as
ComponentGeneric
An HTML tag or React Component to be rendered as the base element wrapper. The default is span.

*/