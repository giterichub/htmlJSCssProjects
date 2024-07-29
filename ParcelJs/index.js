import 'core-js/actual';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import add, { cart } from './shoppingCart.js';
import cloneDeep from 'lodash-es/cloneDeep.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);


const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
    module.hot.accept();
}
class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');