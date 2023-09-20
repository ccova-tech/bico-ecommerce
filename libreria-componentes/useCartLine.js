import {CartLineProvider, useCartLine} from '@shopify/hydrogen-react';

export function CartWrapper({cart}) {
  const firstCartLine = cart.lines.nodes[0];
  return (
    <CartLineProvider line={firstCartLine}>
      <CartLineQuantity />
    </CartLineProvider>
  );
}

function CartLineQuantity() {
  const cartLine = useCartLine();

  return <div>{cartLine.quantity}</div>;
}


/*

useCartLine
component
The useCartLine hook provides access to the CartLine object from the Storefront API. It must be a descendent of a CartProvider component.

Anchor to section titled '[object Object]'
useCartLine()
useCartLine must be a descendent of a CartProvider component.

Anchor to section titled '[object Object]'
Returns

CartLinePartialDeep
CartLinePartialDeep

PartialDeep< CartLine | ComponentizableCartLine, {recurseIntoArrays: true} >

*/