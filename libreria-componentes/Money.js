import {Money} from '@shopify/hydrogen-react';

export default function ProductMoney({product}) {
  const price = product.variants.nodes[0].price;

  return <Money data={price} />;
}


/* 

Money
component
The Money component renders a string of the Storefront API'sMoneyV2 object according to the locale in the ShopifyProvider component. The component outputs a <div>. You can customize this component using passthrough props.

Anchor to section titled 'Props'
Props
Anchor to data
data
PartialObjectDeep<MoneyV2, { recurseIntoArrays: true; }>
required
An object with fields that correspond to the Storefront API's MoneyV2 object.

Anchor to as
as
ComponentGeneric
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