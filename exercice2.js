langages = ["PHP", "Java", "C++", "Python", "CSS", "Scala"]

// 1 - afficher les langages qui commencent par C ou qui se terminent par a
langages
.filter(l =>  l.startsWith("C") || l.endsWith("a"))
.forEach(l => console.log(l));

// 2 - afficher le nombre de caractères de chaque langage
langages
.map(l => l.length)
.forEach(l=>console.log(l));

// 3 - afficher les langages composés d'un nombre pair de caractères
console.log("********************");

langages
.filter(l => l.length %2 == 0)
.forEach(l=>console.log(l));

