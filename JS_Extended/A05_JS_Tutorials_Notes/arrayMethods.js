const items = [
    { name: 'Bike', price: 100},
    { name: 'TV', price: 200},
    { name: 'Album', price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 2000},
    { name: 'Keyboard', price: 25},
]

const filterItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(filterItems);


const mapItems = items.map((item) => {
    return item.name;
});
console.log(mapItems);


const findItem = items.find((item) => {
    return item.name === 'Album';
});
console.log(findItem);


items.forEach((item) => {
    console.log(item.name);
});


const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});
console.log(hasInexpensiveItems);


const everyItem = items.every((item) => {
    return item.price <= 100;
});
console.log(everyItem);


const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);
console.log(total);