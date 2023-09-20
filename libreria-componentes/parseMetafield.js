import {parseMetafield} from '@shopify/hydrogen-react';

export function DateMetafield({metafield}) {
  const parsedMetafield = parseMetafield(metafield);

  return <div>Date: {parsedMetafield.parsedValue?.toDateString()}</div>;
}

export function VariantReferenceMetafield({metafield}) {
  const parsedMetafield = parseMetafield(metafield);

  return <div>Variant title: {parsedMetafield.parsedValue?.title}</div>;
}

export function ListCollectionReferenceMetafield({metafield}) {
  const parsedMetafield = parseMetafield(metafield);

  return (
    <div>
      The first collection title: {parsedMetafield.parsedValue?.[0].title}
    </div>
  );
}


/*

parseMetafield
gear
A function that uses metafield.type to parse the Metafield's value or reference or references (depending on the metafield.type) and places the result in metafield.parsedValue.

Anchor to section titled '[object Object]'
parseMetafield(
metafield
)
Use the ParsedMetafields type as the returned type of parseMetafield(metafield)

Anchor to section titled 'Parameters'
Parameters
Anchor to metafield
metafield
PartialObjectDeep<Metafield, { recurseIntoArrays: true; }>
required

*/