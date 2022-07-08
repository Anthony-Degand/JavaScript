const personne = [2];

personne[0] = "John";
personne[1] = "Doe";
personne[2] = 46;


/*personne[1] ["prenom"] = "joe";
personne[1] ["nom"] = "smith";
personne[1] ["age"] = 35;

personne[2] ["prenom"] = "toto";
personne[2] ["nom"] = "titi";
personne[2] ["age"] = 23;*/



console.log(personne.toString()); // afficher le tableau
console.log(personne.join(" / ")); // afficher le tableau avec séparation 
console.log(personne.pop());//supprimer le dernier elements du tableau
console.log(personne);
console.log(personne.push("Maubeuge")); // ajouter un elements a mon tableau
console.log(personne); 
console.log(personne.shift());//supprimer la premiere valeur du tableau
console.log(personne);

