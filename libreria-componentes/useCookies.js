import * as React from 'react';
import {useShopifyCookies} from '@shopify/hydrogen-react';

export default function App({Component, pageProps}) {
  useShopifyCookies({hasUserConsent: false});

  return <Component {...pageProps} />;
}


/* 

useShopifyCookies
hooks
Sets Shopify user and session cookies and refreshes the expiry time.

Anchor to section titled '[object Object]'
useShopifyCookies(
options
)
Manages Shopify cookies. If hasUserConsent option is false, Shopify cookies will be removed.

Anchor to section titled 'Parameters'
Parameters
Anchor to options
options

UseShopifyCookiesOptions

*/