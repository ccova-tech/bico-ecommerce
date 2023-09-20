import {ModelViewer} from '@shopify/hydrogen-react';

export default function MyProductModel({products}) {
  const firstMediaElement = products.nodes[0].media.nodes[0];

  if (firstMediaElement.__typename === 'Model3d') {
    return <ModelViewer data={firstMediaElement} />;
  }
}

/* 

ModelViewer
component
The ModelViewer component renders a 3D model (with the model-viewer custom element) for the Storefront API's Model3d object. The model-viewer custom element is lazily downloaded through a dynamically-injected <script type='module'> tag when the <ModelViewer /> component is rendered. ModelViewer is using version 1.21.1 of the @google/model-viewer library.

Anchor to section titled 'Props'
Props
Anchor to data
data
PartialObjectDeep<Model3d, { recurseIntoArrays: true; }>
required
An object with fields that correspond to the Storefront API's Model3D object.

Anchor to onError
onError
(event: Event) => void
The callback to invoke when the 'error' event is triggered. Refer to error in the documentation.

Anchor to onLoad
onLoad
(event: Event) => void
The callback to invoke when the load event is triggered. Refer to load in the documentation.

Anchor to onPreload
onPreload
(event: Event) => void
The callback to invoke when the 'preload' event is triggered. Refer to preload in the documentation.

Anchor to onModelVisibility
onModelVisibility
(event: Event) => void
The callback to invoke when the 'model-visibility' event is triggered. Refer to model-visibility in the documentation.

Anchor to onProgress
onProgress
(event: Event) => void
The callback to invoke when the 'progress' event is triggered. Refer to progress in the documentation.

Anchor to onArStatus
onArStatus
(event: Event) => void
The callback to invoke when the 'ar-status' event is triggered. Refer to ar-status in the documentation.

Anchor to onArTracking
onArTracking
(event: Event) => void
The callback to invoke when the 'ar-tracking' event is triggered. Refer to ar-tracking in the documentation.

Anchor to onQuickLookButtonTapped
onQuickLookButtonTapped
(event: Event) => void
The callback to invoke when the 'quick-look-button-tapped' event is triggered. Refer to quick-look-button-tapped in the documentation.

Anchor to onCameraChange
onCameraChange
(event: Event) => void
The callback to invoke when the 'camera-change' event is triggered. Refer to camera-change in the documentation.

Anchor to onEnvironmentChange
onEnvironmentChange
(event: Event) => void
The callback to invoke when the 'environment-change' event is triggered. Refer to environment-change in the documentation.

Anchor to onPlay
onPlay
(event: Event) => void
The callback to invoke when the 'play' event is triggered. Refer to play in the documentation.

Anchor to onPause
onPause
(event: Event) => void
The callback to invoke when the 'pause' event is triggered. Refer to pause in the documentation.

Anchor to onSceneGraphReady
onSceneGraphReady
(event: Event) => void
The callback to invoke when the 'scene-graph-ready' event is triggered. Refer to scene-graph-ready in the documentation.

*/