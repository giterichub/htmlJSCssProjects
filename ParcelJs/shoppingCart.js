import 'core-js/actual';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const shippingCost = 10;
export const cart = [];

const totalPrice = 237;
const totalQuantity = 23;

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}