import {ExternalVideo} from '@shopify/hydrogen-react';

export default function MyProductVideo({products}) {
  const firstMediaElement = products.nodes[0].media.nodes[0];

  if (firstMediaElement.__typename === 'ExternalVideo') {
    return <ExternalVideo data={firstMediaElement} />;
  }
}


/* 

ExternalVideo
component
The ExternalVideo component renders an embedded video for the Storefront API's ExternalVideo object.

Anchor to section titled 'Props'
Props
Takes in the same props as a native <iframe> element, except for src.

Anchor to data
data
PartialObjectDeep<ExternalVideo, { recurseIntoArrays: true; }>
required
An object with fields that correspond to the Storefront API's ExternalVideo object.

Anchor to options
options

YouTube
 | 
Vimeo
An object containing the options available for either YouTube or Vimeo.

*/