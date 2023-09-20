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

ProductProvider
component
<ProductProvider /> is a context provider that enables use of the useProduct() hook. It helps manage selected options and variants for a product.

Anchor to section titled 'Props'
Props
Anchor to data
data
PartialObjectDeep<Product, { recurseIntoArrays: true; }>
required
A Storefront API Product object.

Anchor to children
children
ReactNode
required
A ReactNode element.

Anchor to initialVariantId
initialVariantId
string
The initially selected variant. The following logic applies to initialVariantId:

If initialVariantId is provided, then it's used even if it's out of stock.
If initialVariantId is provided but is null, then no variant is used.
If nothing is passed to initialVariantId then the first available / in-stock variant is used.
If nothing is passed to initialVariantId and no variants are in stock, then the first variant is used.

*/