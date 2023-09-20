import {parseGid} from '@shopify/hydrogen-react';

const {id, resource} = parseGid('gid://shopify/Order/123');

console.log(id); // 123
console.log(resource); // Order


/*

parseGid
gear
Parses Shopify Global ID (GID) and returns the resource type and ID.

Anchor to section titled '[object Object]'
parseGid(
gid
)
Anchor to section titled 'Parameters'
Parameters
Anchor to gid
gid
string
required
A shopify GID (string)

Anchor to section titled '[object Object]'
Returns

ShopifyGid
ShopifyGid

id
string
resource
string

*/