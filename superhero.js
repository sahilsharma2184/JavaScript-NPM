/*Make sure to add 'type=module' in the package.json file else the import won't work
The code gives a random superhero name from the superheroes npm module*/
import superheroes from "superheroes";
const name=superheroes.random();
console.log(`My name is ${name}!`);
