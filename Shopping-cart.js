const products = [
    { name: 'Laptop', price: 40000 },
    { name: 'Shirt', price: 1500 },
    { name: 'Watch', price: 3000 },
    { name: 'Iphone', price: 60000 }
];
let totalPrice = 0;
for (const price of products) {
    // console.log(price);
    totalPrice = totalPrice + price.price;
}
console.log(totalPrice);

//Shopping cart calculation
const cart = [
    { name: 'Laptop', price: 40000, Quantity: 1 },
    { name: 'Shirt', price: 1500, Quantity: 2 },
    { name: 'Watch', price: 3000, Quantity: 1 },
    { name: 'Iphone', price: 60000, Quantity: 1 }
];

let totalcart = 0;
for (const price of cart) {
    // console.log(price);
    totalcart = totalcart + (price.price * price.Quantity);
}
console.log(totalcart);

