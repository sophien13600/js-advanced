const personnes = [
    {id:1, nom: "Wick", prenom:"John", age:45},
    {id:2, nom: "Dalton", prenom:"Jack", age:12},
    {id:3, nom: "Maggio", prenom:"Candice", age:30},
    {id:4, nom: "Baggio", prenom:"John", age:15},
]
//nom des personnes majeures
personnes.filter(p => p.age >=18).forEach(print)

//les personnes appelées John
personnes.filter(p=> p.prenom =='John').forEach(print)

//la premiere personne majeure de la liste
print(personnes.find(p =>p.age >=18))
//le nom de la premiere personne à la retraite

print(personnes.find(p => p.age >=64) ?.nom)// chainage optionnel



function print(elt){
    console.log(elt)
}