import {createStorefrontClient} from '@shopify/hydrogen-react';

export const client = createStorefrontClient({
  storeDomain: 'https://{store-name}.myshopify.com',
  storefrontApiVersion: '2023-01',
  privateStorefrontToken: '{private token for server-side requests}',
});

// in another file where you need to make queries, for example in NextJS server-side:

// a Storefront API query
const GRAPHQL_QUERY = `
  query {
    shop {
      name
    }
  }
`;

// make the request
export async function getServerSideProps() {
  // Get the Storefront API url
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
    }),
    // Generate the headers using the private token. Additionally, you can pass in the buyer's IP address from the request object to help prevent bad actors from overloading your store.
    headers: client.getPrivateTokenHeaders({buyerIp: '...'}),
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  return {props: json};
}


/* 

createStorefrontClient
utility
The createStorefrontClient() function creates helpers that enable you to quickly query the Shopify Storefront API.

When used on the server, it is recommended to use the privateStorefrontToken prop. When used on the client, it is recommended to use the publicStorefrontToken prop or consider using <ShopifyProvider/> instead.

Anchor to section titled '[object Object]'
createStorefrontClient(
props
)
Anchor to section titled 'Parameters'
Parameters
Anchor to props
props

StorefrontClientProps
required
Anchor to section titled '[object Object]'
Returns

StorefrontClientReturn
StorefrontClientReturn

getShopifyDomain
(props?: Partial<Pick<
StorefrontClientProps
, "storeDomain">>) => string
Creates the fully-qualified URL to your myshopify.com domain.

By default, it will use the config you passed in when calling createStorefrontClient(). However, you can override the following settings on each invocation of getShopifyDomain({...}):

storeDomain
getStorefrontApiUrl
(props?: Partial<Pick<
StorefrontClientProps
, "storeDomain" | "storefrontApiVersion">>) => string
Creates the fully-qualified URL to your store's GraphQL endpoint.

By default, it will use the config you passed in when calling createStorefrontClient(). However, you can override the following settings on each invocation of getStorefrontApiUrl({...}):

storeDomain
storefrontApiVersion
getPrivateTokenHeaders
(props?: Partial<Pick<
StorefrontClientProps
, "contentType">> & Pick<
StorefrontClientProps
, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the private Server-to-Server token which reduces the chance of throttling but must not be exposed to clients. Server-side calls should prefer using this over getPublicTokenHeaders().

By default, it will use the config you passed in when calling createStorefrontClient(). However, you can override the following settings on each invocation of getPrivateTokenHeaders({...}):

contentType
privateStorefrontToken
buyerIp
Note that contentType defaults to what you configured in createStorefrontClient({...}) and defaults to 'json', but a specific call may require using graphql. When using JSON.stringify() on the body, use 'json'; otherwise, use 'graphql'.

getPublicTokenHeaders
(props?: Partial<Pick<
StorefrontClientProps
, "contentType">> & Pick<
StorefrontClientProps
, "publicStorefrontToken">) => Record<string, string>
Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the public token which increases the chance of throttling but also can be exposed to clients. Server-side calls should prefer using getPublicTokenHeaders().

By default, it will use the config you passed in when calling createStorefrontClient(). However, you can override the following settings on each invocation of getPublicTokenHeaders({...}):

contentType
publicStorefrontToken
Note that contentType defaults to what you configured in createStorefrontClient({...}) and defaults to 'json', but a specific call may require using graphql. When using JSON.stringify() on the body, use 'json'; otherwise, use 'graphql'.

*/