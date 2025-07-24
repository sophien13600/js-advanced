const objet = {
    nom: "Wick",
    prenom: "John",
    age: 45
}


// let prenom = objet.prenom
// let nom = objet.nom
// console.log(prenom);
// console.log(nom);

const { nom, prenom, genre } = objet
//destructuraion
console.log(nom, prenom, genre);

//destructuraion pour les tableaux
const nombres = [1,2,3]
const [first, second] = nombres
console.log(first, second);

const objet2 = {
   ... objet, // les ... correspondent a la decomposition
    ville: 'Marseille'
}

console.log(objet2);
const personne = {
    nom: "Wick",
    prenom: "John",
}

const personne2 = personne // clonage: const personne2 = {...personne} permet de creer un nouvel espace memoire pour le 2eme objet personne2 sinon les 2 partagent le même espace mémoire
personne2.nom = "Travolta"
console.log(personne.nom);
