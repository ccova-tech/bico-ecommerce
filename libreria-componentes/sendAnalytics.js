import {
    sendShopifyAnalytics,
    getClientBrowserParameters,
    AnalyticsEventName,
    useShopifyCookies,
  } from '@shopify/hydrogen-react';
  import {useRouter} from 'next/router';
  import {useEffect} from 'react';
  
  function sendPageView(analyticsPageData) {
    const payload = {
      ...getClientBrowserParameters(),
      ...analyticsPageData,
    };
    sendShopifyAnalytics({
      eventName: AnalyticsEventName.PAGE_VIEW,
      payload,
    });
  }
  
  // Hook into your router's page change events to fire this analytics event:
  // for example, in NextJS:
  
  const analyticsShopData = {
    shopId: 'gid://shopify/Shop/{your-shop-id}',
    currency: 'USD',
    acceptedLanguage: 'en',
  };
  
  export default function App({Component, pageProps}) {
    const router = useRouter();
  
    // eslint-disable-next-line no-undef
    const hasUserConsent = yourFunctionToDetermineIfUserHasConsent();
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const analytics = {
      hasUserConsent,
      ...analyticsShopData,
      ...pageProps.analytics,
    };
    const pagePropsWithAppAnalytics = {
      ...pageProps,
      analytics,
    };
  
    useEffect(() => {
      const handleRouteChange = () => {
        sendPageView(analytics);
      };
  
      router.events.on('routeChangeComplete', handleRouteChange);
  
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }, [analytics, router.events]);
  
    useShopifyCookies();
  
    return <Component {...pagePropsWithAppAnalytics} />;
  }

  
  /*
  
  sendShopifyAnalytics
utility
Sends analytics to Shopify.

Anchor to section titled '[object Object]'
sendShopifyAnalytics(
event
,
shopDomain
)
If event.payload.hasUserConsent is false, no analytics event will happen.

Anchor to section titled 'Parameters'
Parameters
Anchor to event
event

ShopifyAnalytics
required
The analytics event.

Anchor to shopDomain
shopDomain
string
The Online Store domain to sent Shopify analytics under the same top level domain.

Anchor to section titled '[object Object]'
Returns
Promise<void>
Was this section helpful?
YesNo
Anchor to section titled 'AnalyticsEventName'
AnalyticsEventName
Analytics event names accepted by Shopify analytics.

Anchor to PAGE_VIEW
PAGE_VIEW
"PAGE_VIEW"
required
Page view

Anchor to ADD_TO_CART
ADD_TO_CART
"ADD_TO_CART"
required
Add to cart

Was this section helpful?
YesNo
Anchor to section titled 'AnalyticsPageType'
AnalyticsPageType
Analytics page type values accepted by Shopify analytics.

Anchor to article
article
"article"
required
Anchor to blog
blog
"blog"
required
Anchor to captcha
captcha
"captcha"
required
Anchor to cart
cart
"cart"
required
Anchor to collection
collection
"collection"
required
Anchor to customersAccount
customersAccount
"customers/account"
required
Anchor to customersActivateAccount
customersActivateAccount
"customers/activate_account"
required
Anchor to customersAddresses
customersAddresses
"customers/addresses"
required
Anchor to customersLogin
customersLogin
"customers/login"
required
Anchor to customersOrder
customersOrder
"customers/order"
required
Anchor to customersRegister
customersRegister
"customers/register"
required
Anchor to customersResetPassword
customersResetPassword
"customers/reset_password"
required
Anchor to giftCard
giftCard
"gift_card"
required
Anchor to home
home
"index"
required
Anchor to listCollections
listCollections
"list-collections"
required
Anchor to forbidden
forbidden
"403"
required
Anchor to notFound
notFound
"404"
required
Anchor to page
page
"page"
required
Anchor to password
password
"password"
required
Anchor to product
product
"product"
required
Anchor to policy
policy
"policy"
required
Anchor to search
search
"search"
required
Was this section helpful?
YesNo
Anchor to section titled 'ShopifySalesChannel'
ShopifySalesChannel
Analytics sales channel values accepted by Shopify analytics.

Anchor to hydrogen
hydrogen
"hydrogen"
required
Shopify Hydrogen sales channel

Anchor to headless
headless
"headless"
required
Shopify Headless sales channel
  
  */