
n = document.getElementById("input").value; // je dit que "n" est égale à la valeur de mon id "input"

function calcul(n){ // je crée la fonction 
n = document.getElementById("input").value; // je lui dit que "n" est égale a la valeur de mon id "input"
document.getElementById("result").innerHTML = `Le carré de ${n} est ${n*n}`; // je lui dit que à la place de mon html id "result" j'affiche : le carré de n est égale a n * n
}

//------------------------------------------------------------------------------------------------------------

function carré(nbr){
return nbr * nbr
}

// avec backtics
console.log(`Le carré de ${5} est égale à ${carré(5)}`);
//sans backtics
console.log ("le carré de " + 5 + " est égale à " + carré(5))


//------------------------------------------------------------------------------------------------------------