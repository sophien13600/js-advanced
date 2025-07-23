nombres = [2, 3, 8, 5, 1]

console.log(nombres.length);
console.log(nombres[0]);
console.log(nombres.includes(2));
console.log(nombres.includes(20));
console.log(nombres.indexOf(2));
console.log(nombres.indexOf(20));
nombres.splice(2, 0, 7, 9)
console.log(nombres);
nombres.splice(2, 2)
console.log(nombres);

console.log(nombres.slice(1, 3));

console.log(nombres);
nombres.push(10)
console.log(nombres);
nombres[2] = -1
console.log(nombres);
var tab = [10,20]
nombres.push(...tab) // décomposition
console.log(nombres);
