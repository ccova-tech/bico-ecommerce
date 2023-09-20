import * as React from 'react';
import {useEffect} from 'react';
import {getClientBrowserParameters} from '@shopify/hydrogen-react';

export default function App({Component, pageProps}) {
  useEffect(() => {
    getClientBrowserParameters();
  });

  return <Component {...pageProps} />;
}


/*

getClientBrowserParameters
utility
Gathers client browser values commonly used for analytics

Anchor to section titled '[object Object]'
getClientBrowserParameters()
If executed on server, this method will return empty string for each field.

Anchor to section titled '[object Object]'
Returns

ClientBrowserParameters
ClientBrowserParameters

uniqueToken
string
Shopify unique user token: Value of _shopify_y cookie.

Use getClientBrowserParameters() to collect this value.

visitToken
string
Shopify session token: Value of _shopify_s cookie.

Use getClientBrowserParameters() to collect this value.

url
string
Value of window.location.href.

Use getClientBrowserParameters() to collect this value.

path
string
Value of window.location.pathname.

Use getClientBrowserParameters() to collect this value.

search
string
Value of window.location.search.

Use getClientBrowserParameters() to collect this value.

referrer
string
Value of window.document.referrer.

Use getClientBrowserParameters() to collect this value.

title
string
Value of document.title.

Use getClientBrowserParameters() to collect this value.

userAgent
string
Value of navigator.userAgent.

Use getClientBrowserParameters() to collect this value.

navigationType
string
Navigation type: 'navigate' | 'reload' | 'back_forward' | 'prerender' | 'unknown'.

Use getClientBrowserParameters() to collect this value.

navigationApi
string
Navigation api: 'PerformanceNavigationTiming' | 'performance.navigation'.

Use getClientBrowserParameters() to collect this value.

*/