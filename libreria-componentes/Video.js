import {Video} from '@shopify/hydrogen-react';

export default function MyProductVideo({products}) {
  const firstMediaElement = products.edges[0].node.media.edges[0].node;

  if (firstMediaElement.__typename === 'Video') {
    return <Video data={firstMediaElement} />;
  }
}


/* 

Video
component
The Video component renders a video for the Storefront API's Video object. The component outputs a video element. You can customize this component using passthrough props.

Anchor to section titled 'Props'
Props
Anchor to data
data
PartialObjectDeep<Video, { recurseIntoArrays: true; }>
required
An object with fields that correspond to the Storefront API's Video object.

Anchor to previewImageOptions
previewImageOptions

LoaderParams
An object of image size options for the video's previewImage. Uses shopifyImageLoader to generate the poster URL.

Anchor to sourceProps
sourceProps
HTMLAttributes<HTMLSourceElement> & { 'data-testid'?: string; }
Props that will be passed to the video element's source children elements.

*/