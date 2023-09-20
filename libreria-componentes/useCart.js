import {CartProvider, useCart} from '@shopify/hydrogen-react';

export function App() {
  <CartProvider
    onLineAdd={() => {
      console.log('a line is being added');
    }}
    onLineAddComplete={() => {
      console.log('a line has been added');
    }}
  >
    <CartComponent />
  </CartProvider>;
}

function CartComponent() {
  const {linesAdd, status} = useCart();

  const merchandise = {merchandiseId: '{id-here}'};

  return (
    <div>
      Cart Status: {status}
      <button onClick={() => linesAdd([merchandise])}>Add Line</button>
    </div>
  );
}


/* 

useCart
hook
Provides access to the cart object.

Anchor to section titled 'Props'
Props
useCart hook must be a descendent of a CartProvider component.

() => CartWithActionsDocs
Anchor to CartWithActionsDocs
CartWithActionsDocs
Anchor to lines
lines
(CartLine | ComponentizableCartLine)[]
required
The cart lines.

Anchor to attributes
attributes
Attribute[]
required
The cart's attributes.

Anchor to status
status
"uninitialized" | "fetching" | "creating" | "updating" | "idle"
required
The status of the cart. This returns uninitialized when the cart is not yet created, creating when the cart is being created, fetching when an existing cart is being fetched, updating when the cart is updating, and idle when the cart isn't being created or updated.

Anchor to cartCreate
cartCreate
(cart: CartInput) => void
required
A callback that creates a cart. Expects the same input you would provide to the Storefront API's cartCreate mutation.

Anchor to linesAdd
linesAdd
(lines: CartLineInput[]) => void
required
A callback that adds lines to the cart. Expects the same lines input that you would provide to the Storefront API's cartLinesAdd mutation. If a cart doesn't already exist, then it will create the cart for you.

Anchor to linesRemove
linesRemove
(lines: string[]) => void
required
A callback that removes lines from the cart. Expects the same lines input that you would provide to the Storefront API's cartLinesRemove mutation. Only lines that are included in the lines parameter will be in the cart afterwards.

Anchor to linesUpdate
linesUpdate
(lines: CartLineUpdateInput[]) => void
required
A callback that updates lines in the cart. Expects the same lines input that you would provide to the Storefront API's cartLinesUpdate mutation. If a line item is not included in the lines parameter, it will still exist in the cart and will not be changed.

Anchor to noteUpdate
noteUpdate
(note: string) => void
required
A callback that updates the note in the cart. Expects the same note input that you would provide to the Storefront API's cartNoteUpdate mutation.

Anchor to buyerIdentityUpdate
buyerIdentityUpdate
(buyerIdenity: CartBuyerIdentityInput) => void
required
A callback that updates the buyer identity in the cart. Expects the same buyerIdentity input that you would provide to the Storefront API's cartBuyerIdentityUpdate mutation.

Anchor to cartAttributesUpdate
cartAttributesUpdate
(attributes: AttributeInput[]) => void
required
A callback that updates the cart attributes. Expects the same attributes input that you would provide to the Storefront API's cartAttributesUpdate mutation.

Anchor to discountCodesUpdate
discountCodesUpdate
(discountCodes: string[]) => void
required
A callback that updates the cart's discount codes. Expects the same codes input that you would provide to the Storefront API's cartDiscountCodesUpdate mutation.

Anchor to cartFragment
cartFragment
string
required
The fragment used to query the cart object for all queries and mutations.

Anchor to id
id
string
The cart's ID if it has been created through the Storefront API.

Anchor to checkoutUrl
checkoutUrl
string
The checkout URL for the cart, if the cart has been created in the Storefront API.

Anchor to note
note
string
The cart's note.

Anchor to buyerIdentity
buyerIdentity
CartBuyerIdentity
The cart's buyer identity.

Anchor to discountCodes
discountCodes
CartDiscountCode[]
The discount codes applied to the cart.

Anchor to cost
cost
CartCost
The cost for the cart, including the subtotal, total, taxes, and duties.

Anchor to totalQuantity
totalQuantity
number
The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

Anchor to error
error
unknown
If an error occurred on the previous cart action, then error will exist and cart will be put back into the last valid status it was in.

*/