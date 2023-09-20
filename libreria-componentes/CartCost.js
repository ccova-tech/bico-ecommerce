import {CartCost} from '@shopify/hydrogen-react';

export default function CartTotals() {
  return (
    <>
      <div>
        Subtotal: <CartCost amountType="subtotal" />
      </div>
      <div>
        Tax: <CartCost amountType="tax" />
      </div>
      <div>
        Total: <CartCost />
      </div>
    </>
  );
}


/* 

CartCost
component
The CartCost component renders a Money component with the cost associated with the amountType prop.

If no amountType prop is specified, then it defaults to totalAmount.

Depends on useCart() and must be a child of <CartProvider/>

Anchor to section titled 'Props'
Props
Anchor to amountType
amountType
"total" | "subtotal" | "tax" | "duty"
A string type that defines the type of cost needed. Valid values: total, subtotal, tax, or duty.

Anchor to children
children
ReactNode
Any ReactNode elements.

Anchor to as
as
AsType
An HTML tag or React Component to be rendered as the base element wrapper. The default is div.

Anchor to withoutCurrency
withoutCurrency
boolean
Whether to remove the currency symbol from the output.

Anchor to withoutTrailingZeros
withoutTrailingZeros
boolean
Whether to remove trailing zeros (fractional money) from the output.

Anchor to measurement
measurement
PartialObjectDeep<UnitPriceMeasurement, { recurseIntoArrays: true; }>
A UnitPriceMeasurement object.

Anchor to measurementSeparator
measurementSeparator
ReactNode
Customizes the separator between the money output and the measurement output. Used with the measurement prop. Defaults to '/'.

*/