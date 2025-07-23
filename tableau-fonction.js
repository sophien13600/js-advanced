let nombres =[1, 2, 5, 8, 4, 7];

console.log(nombres.filter(n=> n % 2 == 0));
console.log(nombres.map(n=> n + 2));
nombres.forEach(n => console.log(n));
console.log("------------------------------------------------------");


nombres
.filter(n=> n % 2 == 0)
.map(n=> n + 2)
.forEach(n => console.log(n))
str