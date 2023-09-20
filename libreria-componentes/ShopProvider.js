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

ShopifyProvider
component
The ShopifyProvider component wraps your entire app and provides functionality for many components, hooks, and utilities. The ShopifyProvider component also provides localization data for the app. You should place it in your app's entry point component.

Anchor to section titled 'Props'
Props
Anchor to storeDomain
storeDomain
string
required
The full domain of your Shopify storefront URL (eg: the complete string of {subdomain}.myshopify.com).

Anchor to storefrontToken
storefrontToken
string
required
The Storefront API public access token. Refer to the authentication documentation for more details.

Anchor to storefrontApiVersion
storefrontApiVersion
string
required
The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify API versioning for more details.

Anchor to countryIsoCode
countryIsoCode
CountryCode
required
The code designating a country, which generally follows ISO 3166-1 alpha-2 guidelines. If a territory doesn't have a country code value in the CountryCode enum, it might be considered a subdivision of another country. For example, the territories associated with Spain are represented by the country code ES, and the territories associated with the United States of America are represented by the country code US.

Anchor to languageIsoCode
languageIsoCode
LanguageCode
required
ISO 369 language codes supported by Shopify.

Anchor to children
children
ReactNode
React children to render.

Anchor to storefrontId
storefrontId
string
The globally-unique identifier for the Shop

*/