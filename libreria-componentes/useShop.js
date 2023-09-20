import {ShopifyProvider, useShop} from '@shopify/hydrogen-react';

export default function App() {
  return (
    <ShopifyProvider
      storeDomain="my-store"
      storefrontToken="abc123"
      storefrontApiVersion="2022-10"
      countryIsoCode="CA"
      languageIsoCode="EN"
    >
      <UsingUseShop />
    </ShopifyProvider>
  );
}

export function UsingUseShop() {
  const shop = useShop();

  return (
    <>
      <div>{shop.storeDomain}</div>
      <div>{shop.storefrontToken}</div>
      <div>{shop.storefrontApiVersion}</div>
    </>
  );
}


/*

useShop
hook
Provides access to the shopifyConfig prop of <ShopifyProvider/>.

Anchor to section titled '[object Object]'
useShop()
useShop must be a descendent of a ShopifyProvider component.

Anchor to section titled '[object Object]'
Returns

ShopifyContextValue
ShopifyContextValue

storeDomain
string
The full domain of your Shopify storefront URL (eg: the complete string of {subdomain}.myshopify.com).

storefrontToken
string
The Storefront API public access token. Refer to the authentication documentation for more details.

storefrontApiVersion
string
The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify API versioning for more details.

countryIsoCode
CountryCode
The code designating a country, which generally follows ISO 3166-1 alpha-2 guidelines. If a territory doesn't have a country code value in the CountryCode enum, it might be considered a subdivision of another country. For example, the territories associated with Spain are represented by the country code ES, and the territories associated with the United States of America are represented by the country code US.

languageIsoCode
LanguageCode
ISO 369 language codes supported by Shopify.

getStorefrontApiUrl
(props?: 
GetStorefrontApiUrlProps
) => string
Creates the fully-qualified URL to your store's GraphQL endpoint.

By default, it will use the config you passed in when creating <ShopifyProvider/>. However, you can override the following settings on each invocation of getStorefrontApiUrl({...}):

storeDomain
storefrontApiVersion
getPublicTokenHeaders
(props: 
GetPublicTokenHeadersProps
) => Record<string, string>
Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This uses the public Storefront API token.

By default, it will use the config you passed in when creating <ShopifyProvider/>. However, you can override the following settings on each invocation of getPublicTokenHeaders({...}):

contentType
storefrontToken
getShopifyDomain
(props?: 
GetShopifyDomainProps
) => string
Creates the fully-qualified URL to your myshopify.com domain.

By default, it will use the config you passed in when calling <ShopifyProvider/>. However, you can override the following settings on each invocation of getShopifyDomain({...}):

storeDomain
storefrontId
string
The globally-unique identifier for the Shop

*/