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

CartLineProvider
component
The CartLineProvider component creates a context for using a cart line.

Anchor to section titled 'Props'
Props
Anchor to children
children
ReactNode
required
Any ReactNode elements.

Anchor to line
line

CartLinePartialDeep
required
A cart line object.

*/