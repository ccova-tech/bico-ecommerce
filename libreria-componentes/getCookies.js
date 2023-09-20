import * as React from 'react';
import {useEffect} from 'react';
import {getShopifyCookies} from '@shopify/hydrogen-react';

export default function App({Component, pageProps}) {
  useEffect(() => {
    getShopifyCookies(document.cookie);
  });

  return <Component {...pageProps} />;
}


/*

getShopifyCookies
utility
Parses cookie string and returns Shopify cookies.

Anchor to section titled '[object Object]'
getShopifyCookies(
cookies
)
If the Shopify cookies doesn't exist, this method will return empty string for each missing cookie.

Anchor to section titled 'Parameters'
Parameters
Anchor to cookies
cookies
string
required
Anchor to section titled '[object Object]'
Returns

ShopifyCookies
ShopifyCookies

_shopify_y
string
Shopify unique user token: Value of _shopify_y cookie.

_shopify_s
string
Shopify session token: Value of _shopify_s cookie.

Was this section helpful?
YesNo
Anchor to section titled 'ShopifyCookies'
ShopifyCookies
Shopify cookies names

Anchor to _shopify_y
_shopify_y
string
required
Shopify unique user token: Value of _shopify_y cookie.

Anchor to _shopify_s
_shopify_s
string
required
Shopify session token: Value of _shopify_s cookie.

*/