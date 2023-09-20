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

CartProvider
component
The CartProvider component synchronizes the state of the Storefront API Cart and a customer's cart, and allows you to more easily manipulate the cart by adding, removing, and updating it. It could be placed at the root of your app so that your whole app is able to use the useCart() hook anywhere.

There are props that trigger when a call to the Storefront API is made, such as onLineAdd={} when a line is added to the cart. There are also props that trigger when a call to the Storefront API is completed, such as onLineAddComplete={} when the fetch request for adding a line to the cart completes.

The CartProvider component must be a descendant of the ShopifyProvider component .

Anchor to section titled 'Props'
Props
Anchor to children
children
ReactNode
required
Any ReactNode elements.

Anchor to numCartLines
numCartLines
number
Maximum number of cart lines to fetch. Defaults to 250 cart lines.

Anchor to onCreate
onCreate
() => void
A callback that is invoked when the process to create a cart begins, but before the cart is created in the Storefront API.

Anchor to onLineAdd
onLineAdd
() => void
A callback that is invoked when the process to add a line item to the cart begins, but before the line item is added to the Storefront API.

Anchor to onLineRemove
onLineRemove
() => void
A callback that is invoked when the process to remove a line item to the cart begins, but before the line item is removed from the Storefront API.

Anchor to onLineUpdate
onLineUpdate
() => void
A callback that is invoked when the process to update a line item in the cart begins, but before the line item is updated in the Storefront API.

Anchor to onNoteUpdate
onNoteUpdate
() => void
A callback that is invoked when the process to add or update a note in the cart begins, but before the note is added or updated in the Storefront API.

Anchor to onBuyerIdentityUpdate
onBuyerIdentityUpdate
() => void
A callback that is invoked when the process to update the buyer identity begins, but before the buyer identity is updated in the Storefront API.

Anchor to onAttributesUpdate
onAttributesUpdate
() => void
A callback that is invoked when the process to update the cart attributes begins, but before the attributes are updated in the Storefront API.

Anchor to onDiscountCodesUpdate
onDiscountCodesUpdate
() => void
A callback that is invoked when the process to update the cart discount codes begins, but before the discount codes are updated in the Storefront API.

Anchor to onCreateComplete
onCreateComplete
() => void
A callback that is invoked when the process to create a cart completes

Anchor to onLineAddComplete
onLineAddComplete
() => void
A callback that is invoked when the process to add a line item to the cart completes

Anchor to onLineRemoveComplete
onLineRemoveComplete
() => void
A callback that is invoked when the process to remove a line item to the cart completes

Anchor to onLineUpdateComplete
onLineUpdateComplete
() => void
A callback that is invoked when the process to update a line item in the cart completes

Anchor to onNoteUpdateComplete
onNoteUpdateComplete
() => void
A callback that is invoked when the process to add or update a note in the cart completes

Anchor to onBuyerIdentityUpdateComplete
onBuyerIdentityUpdateComplete
() => void
A callback that is invoked when the process to update the buyer identity completes

Anchor to onAttributesUpdateComplete
onAttributesUpdateComplete
() => void
A callback that is invoked when the process to update the cart attributes completes

Anchor to onDiscountCodesUpdateComplete
onDiscountCodesUpdateComplete
() => void
A callback that is invoked when the process to update the cart discount codes completes

Anchor to data
data
PartialObjectDeep<
Cart
, { recurseIntoArrays: true; }>
An object with fields that correspond to the Storefront API's Cart object.

Anchor to cartFragment
cartFragment
string
A fragment used to query the Storefront API's Cart object for all queries and mutations. A default value is used if no argument is provided.

Anchor to customerAccessToken
customerAccessToken
string
A customer access token that's accessible on the server if there's a customer login.

Anchor to countryCode
countryCode
CountryCode
The ISO country code for i18n.

*/