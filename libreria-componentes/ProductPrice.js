import {ProductPrice} from '@shopify/hydrogen-react';

export function ProductPricing({product}) {
  return <ProductPrice data={product} priceType="compareAt" valueType="max" />;
}


/* 

ProductPrice
component
The ProductPrice component renders a Money component with the product priceRange's maxVariantPrice or minVariantPrice, for either the regular price or compare at price range.

Anchor to section titled 'Props'
Props
Anchor to data
data
PartialObjectDeep<Product, { recurseIntoArrays: true; }>
required
A Storefront API Product object.

Anchor to priceType
priceType
"regular" | "compareAt"
The type of price. Valid values: regular (default) or compareAt.

Anchor to valueType
valueType
"max" | "min" | "unit"
The type of value. Valid values: min (default), max or unit.

Anchor to variantId
variantId
string
The ID of the variant.

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

Anchor to measurementSeparator
measurementSeparator
ReactNode
Customizes the separator between the money output and the measurement output. Used with the measurement prop. Defaults to '/'.

*/