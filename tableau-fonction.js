let nombres =[1, 2, 5, 8, 4, 7];

console.log(nombres.filter(n=> n % 2 == 0));
console.log(nombres.map(n=> n + 2));
nombres.forEach(n => console.log(n));// forEach estu une expression de terminaison 
console.log("------------------------------------------------------");


nombres
.filter(n=> n % 2 == 0)
.map(n=> n + 2)
.forEach(n => console.log(n))

console.log("********************");
//  la premiere valeur paire de nombres
   console.log(nombres .filter(n=> n % 2 == 0).slice(0,1));
    console.log(nombres.find(n => n % 2 == 0));
   // l'indice de la première valeur paire
console.log(nombres.findIndex(n => n % 2 == 0));
    

