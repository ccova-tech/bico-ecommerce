import {CartCheckoutButton} from '@shopify/hydrogen-react';

export default function ProductCartCheckoutButton() {
  return <CartCheckoutButton />;
}


/*

CartCheckoutButton
component
The CartCheckoutButton component renders a button that redirects to the checkout URL for the cart.

Must be a descendent of a CartProvider component.

Anchor to section titled 'Props'
Props
Anchor to children
children
ReactNode
required
Any ReactNode elements.

Anchor to as
as
AsType
Provide a React element or component to render as the underlying button. Note: for accessibility compliance, almost always you should use a button element, or a component that renders an underlying button.

Anchor to defaultOnClick
defaultOnClick
(event?: MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void
A default onClick behavior

Anchor to buttonRef
buttonRef
Ref<HTMLButtonElement>
A ref to the underlying button

*/