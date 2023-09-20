import {ProductProvider, useProduct} from '@shopify/hydrogen-react';

export function Product({product}) {
  return (
    <ProductProvider data={product} initialVariantId="some-id">
      <UsingProduct />
    </ProductProvider>
  );
}

function UsingProduct() {
  const {product, variants, setSelectedVariant} = useProduct();
  return (
    <>
      <h1>{product?.title}</h1>
      {variants?.map((variant) => {
        <button onClick={() => setSelectedVariant(variant)} key={variant?.id}>
          {variant?.title}
        </button>;
      })}
      ;
    </>
  );
}


/*

useProduct
hook
Provides access to the product value passed to <ProductProvider />. It also includes properties for selecting product variants, options, and selling plans.

Anchor to section titled 'Props'
Props
PartialDeep< UseProductObjects, {recurseIntoArrays: true} > & UseProductFunctions
Anchor to UseProductFunctions
UseProductFunctions
Anchor to setSelectedVariant
setSelectedVariant
(variant: PartialObjectDeep<ProductVariant, { recurseIntoArrays: true; }>) => void
required
A callback to set the selected variant to the variant passed as an argument.

Anchor to setSelectedOption
setSelectedOption
(name: string, value: string) => void
required
A callback to set the selected option.

Anchor to setSelectedOptions
setSelectedOptions
(options: 
SelectedOptions
) => void
required
A callback to set multiple selected options at once.

Anchor to setSelectedSellingPlan
setSelectedSellingPlan
(sellingPlan: PartialObjectDeep<SellingPlan, { recurseIntoArrays: true; }>) => void
required
A callback to set the selected selling plan to the one passed as an argument.

Anchor to isOptionInStock
isOptionInStock
(name: string, value: string) => boolean
required
A callback that returns a boolean indicating if the option is in stock.

Anchor to UseProductObjects
UseProductObjects
Anchor to product
product
Product
required
The raw product from the Storefront API

Anchor to variants
variants
ProductVariant[]
required
An array of the variant nodes from the VariantConnection.

Anchor to options
options

OptionWithValues
[]
required
An array of the product's options and values.

Anchor to selectedOptions
selectedOptions

SelectedOptions
required
Anchor to variantsConnection
variantsConnection
ProductVariantConnection
Anchor to selectedVariant
selectedVariant
ProductVariant
The selected variant.

Anchor to selectedSellingPlan
selectedSellingPlan
SellingPlan
The selected selling plan.

Anchor to selectedSellingPlanAllocation
selectedSellingPlanAllocation
SellingPlanAllocation
The selected selling plan allocation.

Anchor to sellingPlanGroups
sellingPlanGroups
(Omit<SellingPlanGroup, "sellingPlans"> & { sellingPlans: SellingPlan[]; })[]
The selling plan groups.

Anchor to sellingPlanGroupsConnection
sellingPlanGroupsConnection
SellingPlanGroupConnection

*/