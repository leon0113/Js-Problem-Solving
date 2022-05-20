const phones = [
    { name: 'Samsung s5', price: 45800, camera: '10mp', storage: '32GB' },
    { name: 'Walton Note 3', price: 25000, camera: '8mp', storage: '16GB' },
    { name: 'Mi 5', price: 32000, camera: '64mp', storage: '16GB' },
    { name: 'HTC 3', price: 15000, camera: '32mp', storage: '16GB' },
    { name: 'Huawei 7s pro', price: 20000, camera: '20mp', storage: '64GB' }
];

let cheapest = phones[0];
for (const phone of phones) {
    // console.log(phone);
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);