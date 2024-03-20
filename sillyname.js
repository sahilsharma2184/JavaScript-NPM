/*
Make sure to add 'type=module' in the package.json file else the import won't work
Sillyname NPM module generates a random sillyname
Get to know more about this module on https://www.npmjs.com/package/sillyname
*/
import generateName from "sillyname";
var sillyname=generateName();
console.log(`My name is ${sillyname}`);
