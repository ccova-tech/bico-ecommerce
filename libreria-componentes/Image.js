import {Image} from '@shopify/hydrogen-react';

// An example query
const IMAGE_QUERY = `#graphql
  query {
    product {
      featuredImage {
        altText
        url
        height
        width
      }
    }
  }
`;

export default function ProductImage({product}) {
  if (!product.featuredImage) {
    return null;
  }

  return (
    <Image
      data={product.featuredImage}
      sizes="(min-width: 45em) 50vw, 100vw"
      aspectRatio="4/5"
    />
  );
}

/* 

Image
component
The Image component renders an image for the Storefront API's Image object by using the data prop. You can customize this component using passthrough props.

Images default to being responsive automativally (width: 100%, height: auto), and expect an aspectRatio prop, which ensures your image doesn't create any layout shift. For fixed-size images, you can set width to an exact value, and a srcSet with 1x, 2x, and 3x DPI variants will automatically be generated for you.

Anchor to section titled 'Props'
Props
Anchor to aspectRatio
aspectRatio
string
The aspect ratio of the image, in the format of width/height.

Anchor to crop
crop

Crop
Default: `center`
The crop position of the image.

Anchor to data
data
PartialObjectDeep<Image, { recurseIntoArrays: true; }>
Data mapping to the Storefront API Image object. Must be an Image object.

Anchor to loader
loader

Loader
A function that returns a URL string for an image.

Anchor to srcSetOptions
srcSetOptions

SrcSetOptions
An optional prop you can use to change the default srcSet generation behaviour

Anchor to loaderOptions
loaderOptions

ShopifyLoaderOptions

deprecated
Anchor to widths
widths
(string | number)[]

deprecated

*/