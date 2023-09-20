import {BuyNowButton} from '@shopify/hydrogen-react';

export default function ProductBuyNowButton({product}) {
  const variantId = product.variants[0].id;

  if (!variantId) {
    return null;
  }

  return <BuyNowButton variantId={variantId} />;
}

/*

BuyNowButton
component
The BuyNowButton component renders a button that adds an item to the cart and redirects the customer to checkout.

Must be a child of a CartProvider component.

Anchor to section titled 'Props'
Props
Anchor to variantId
variantId
string
required
The ID of the variant.

Anchor to children
children
ReactNode
required
Any ReactNode elements.

Anchor to quantity
quantity
number
The item quantity. Defaults to 1.

Anchor to attributes
attributes
{ key: string; value: string; }[]
An array of cart line attributes that belong to the item being added to the cart.

Anchor to as
as
AsType
Provide a React element or component to render as the underlying button. Note: for accessibility compliance, almost always you should use a button element, or a component that renders an underlying button.

Anchor to onClick
onClick
(event?: MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void
Click event handler. Default behaviour triggers unless prevented

Anchor to defaultOnClick
defaultOnClick
(event?: MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void
A default onClick behavior

Anchor to buttonRef
buttonRef
Ref<HTMLButtonElement>
A ref to the underlying button

*/