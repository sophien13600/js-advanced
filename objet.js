// les objets sont comme les tableaux associatif en php

const objet = {
    nom:"Wick",
    prenom:"Wick",
}
console.log(objet['nom']);
console.log(objet.prenom);

// objet = { ville: 'Marseille'}
objet.nom = "Travolta"

console.log(objet['nom']);
objet.ville = "Marseille"

console.log(objet);

console.log(Object.keys(objet));
console.log(Object.values(objet));

const objet2 = {
    nom: "Linus",
    direBonjour: function () {
        console.log(`Bonjour`);
    }
}
console.log(objet2.nom);
objet2.direBonjour()

const objet3 = {
    nom: "Linus",
    direBonjour: function () {
        console.log(`Bonjour ${this.nom}`);
    }
}
objet3.direBonjour()

const objet4 = {
    nom: "Linus",
    direBonjour: () => {// les fonctions flechée n'ont pas accès au mot clé this: à ne pas utiliser dans les objets
        console.log(`Bonjour ${this.nom}`);
    }
}