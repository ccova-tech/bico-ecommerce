import {AddToCartButton} from '@shopify/hydrogen-react';

export default function ProductAddToCartButton({product}) {
  const variantId = product.variants[0].id;

  if (!variantId) {
    return null;
  }

  return <AddToCartButton variantId={variantId} />;
}

/*

AddToCartButton
component
The AddToCartButton component renders a button that adds an item to the cart when pressed.

It must be a descendent of the CartProvider component.

Anchor to section titled 'Props'
Props
Anchor to children
children
ReactNode
required
Any ReactNode elements.

Anchor to attributes
attributes
{ key: string; value: string; }[]
An array of cart line attributes that belong to the item being added to the cart.

Anchor to variantId
variantId
string
The ID of the variant.

Anchor to quantity
quantity
number
The item quantity.

Anchor to accessibleAddingToCartLabel
accessibleAddingToCartLabel
string
The text that is announced by the screen reader when the item is being added to the cart. Used for accessibility purposes only and not displayed on the page.

Anchor to sellingPlanId
sellingPlanId
string
The selling plan ID of the subscription variant

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

