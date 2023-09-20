import {ShopPayButton} from '@shopify/hydrogen-react';

export function AddVariantQuantity1({variantId, storeDomain}) {
  return <ShopPayButton variantIds={[variantId]} storeDomain={storeDomain} />;
}

export function AddVariantQuantityMultiple({variantId, quantity, storeDomain}) {
  return (
    <ShopPayButton
      variantIdsAndQuantities={[{id: variantId, quantity}]}
      storeDomain={storeDomain}
    />
  );
}


/* 

ShopPayButton
component
The ShopPayButton component renders a button that redirects to the Shop Pay checkout. It renders a <shop-pay-button> custom element, for which it will lazy-load the source code automatically.

Anchor to section titled 'Props'
Props
ShopPayButtonStyleProps & ShopPayDomainProps & (ShopPayVariantIds | ShopPayVariantAndQuantities)
Anchor to ShopPayButtonStyleProps
ShopPayButtonStyleProps
Anchor to className
className
string
A string of classes to apply to the div that wraps the Shop Pay button.

Anchor to width
width
string
A string that's applied to the CSS custom property (variable) --shop-pay-button-width for the Buy with Shop Pay component.

Anchor to ShopPayDomainProps
ShopPayDomainProps
Anchor to storeDomain
storeDomain
string
The domain of your Shopify storefront URL (eg: your-store.myshopify.com).

Anchor to ShopPayVariantAndQuantities
ShopPayVariantAndQuantities
Anchor to variantIdsAndQuantities
variantIdsAndQuantities
{ id: string; quantity: number; }[]
required
An array of variant IDs and quantities to purchase with Shop Pay.

Anchor to variantIds
variantIds
never
An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use variantIdsAndQuantities.

Anchor to ShopPayVariantIds
ShopPayVariantIds
Anchor to variantIds
variantIds
string[]
required
An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use variantIdsAndQuantities.

Anchor to variantIdsAndQuantities
variantIdsAndQuantities
never
An array of variant IDs and quantities to purchase with Shop Pay.

*/