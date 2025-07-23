nombres = [1, 3, 5, 8, 4, 9, 4, 9, 6]
// afficher tous les multiples 2 présents dans nombres
for(let i =0; i <nombres.length; i++){
    if(nombres[i] % 2 ==0){
        console.log(nombres[i]);
    }
}
// supprimer la derniere occurence de 4
nombres.splice(nombres.lastIndexOf(4),1)
console.log(nombres);
console.table(nombres);

