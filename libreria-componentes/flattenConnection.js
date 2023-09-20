import {flattenConnection} from '@shopify/hydrogen-react';

export function ProductList({productConnection}) {
  const products = flattenConnection(productConnection);
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}


/* 

flattenConnection
utility
The flattenConnection utility transforms a connection object from the Storefront API (for example, Product-related connections) into a flat array of nodes. The utility works with either nodes or edges.node.

If connection is null or undefined, will return an empty array instead in production. In development, an error will be thrown.

Anchor to section titled 'Parameters'
Parameters
Anchor to connection
connection

ConnectionEdges
 | 
ConnectionNodes

*/