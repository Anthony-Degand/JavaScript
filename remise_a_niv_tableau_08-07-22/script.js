const personne = [2];

personne[0] = "John";
personne[1] = "Doe";
personne[2] = 46;

console.log(personne.toString()); // afficher le tableau
console.log(personne.join(" / ")); // afficher le tableau avec séparation 
console.log(personne.pop());//supprimer le dernier elements du tableau
console.log(personne);
console.log(personne.push("Maubeuge")); // ajouter un elements a mon tableau
console.log(personne); 
console.log(personne.shift());//supprimer la premiere valeur du tableau
console.log(personne);
console.log(personne.unshift("toto"));// rajoute un élément au début du tableau
console.log(personne);
personne[personne.length] = "titi"; // ajouter une valeur au tableau par avec la méthode length
console.log(personne);
console.log(personne.splice(1,1,"tata"));// je lui indique l'élément à supprimer de mon tableau , je lui indique combien d'élément je souhaite ajouter puis je lui indique le nom du ou des element(s) à ajouter.
console.log(personne);
console.log(personne.slice(2)); // crée un second tableau a partir de la case souhaitez
console.log(personne);
console.log(delete personne[1]); // supprime un élement mais laisse une case vide
console.log(personne);

