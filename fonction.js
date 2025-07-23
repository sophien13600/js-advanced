//declaration d'une fonciton nommée
console.log(somme(2,3))
console.log(somme(2))
console.log(somme())

//function somme (a=0, b=0){
  //  return a +b
//}
function somme(...params){
var resultat = 0
    for (const param of params){
    resultat += param
   } 
   return resultat
}
 //declaration d'une fonction anonyme 
var produit = function  (a, b){
  return a * b
}
console.log(produit(5,6));
// déclaration d'une arrow function
// const division = (a, b) => a / b

// console.log(division(10, 2));
const division = (a, b) => {
    if (b != 0) {
        return a / b
    }
    throw "Problème de division par zéro"
}

console.log(division(10, 2));
console.log(division(10, 0));