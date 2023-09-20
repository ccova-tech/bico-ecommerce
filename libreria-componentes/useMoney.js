import {useMoney, ShopifyProvider} from '@shopify/hydrogen-react';

export function App() {
  return (
    <ShopifyProvider languageIsoCode="EN" countryIsoCode="US">
      <UsingMoney />
    </ShopifyProvider>
  );
}

function UsingMoney() {
  const myMoney = {amount: '100', currencyCode: 'USD'};
  const money = useMoney(myMoney);
  return (
    <>
      <div>Localized money: {money.localizedString}</div>
      <div>Money without trailing zeros: {money.withoutTrailingZeros}</div>
    </>
  );
}


/* 

useMoney
hook
The useMoney hook takes a MoneyV2 object and returns a default-formatted string of the amount with the correct currency indicator, along with some of the parts provided by Intl.NumberFormat.

Anchor to section titled '[object Object]'
useMoney(
money
)
useMoney must be a descendent of a ShopifyProvider component.

Anchor to section titled 'Parameters'
Parameters
Anchor to money
money
MoneyV2
required
Anchor to section titled '[object Object]'
Returns

UseMoneyValue
UseMoneyValue

currencyCode
CurrencyCode
The currency code from the MoneyV2 object.

amount
string
The localized amount, without any currency symbols or non-number types from the Intl.NumberFormat.formatToParts parts.

parts
NumberFormatPart[]
All parts returned by Intl.NumberFormat.formatToParts.

localizedString
string
A string returned by new Intl.NumberFormat for the amount and currency code, using the locale value in the LocalizationProvider component.

original
MoneyV2
The MoneyV2 object provided as an argument to the hook.

withoutTrailingZeros
string
A string with trailing zeros removed from the fractional part, if any exist. If there are no trailing zeros, then the fractional part remains. For example, $640.00 turns into $640. $640.42 remains $640.42.

withoutTrailingZerosAndCurrency
string
A string without currency and without trailing zeros removed from the fractional part, if any exist. If there are no trailing zeros, then the fractional part remains. For example, $640.00 turns into 640. $640.42 turns into 640.42.

currencyName
string
The name for the currency code, returned by Intl.NumberFormat.

currencySymbol
string
The currency symbol returned by Intl.NumberFormat.

currencyNarrowSymbol
string
The currency narrow symbol returned by Intl.NumberFormat.



*/