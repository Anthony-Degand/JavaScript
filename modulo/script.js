/*function modulo(nbr){
    if ( a % b == 0 ){document.getElementById("resultat").innerHTML = "est égale a 0"}
    else {document.getElementById("resultat").innerHTML = "n'est pas égale à 0"} 
}*/

var a = new Number , 
Premier = Boolean(true);

function modulo()
{
    a = Number(document.getElementById("a").value);
    Premier = true;
for ( b = 2 ; b < a ; b++ ) //b=2 ; le temps que b est inferieur à a ; b prend + 1 
{
    if ( a % b == 0 ) Premier = false; // si a est divisible alors ma variable premier prend la valeur faux
}
//si le nombre est premier j'affiche premier à la place du html qui à l'ID resultat :
if ( Premier == true ) { document.getElementById("resultat").innerHTML = "Premier" }
//si le nombre n'est pas premier j'affiche  pas premier à la place du html qui à l'ID resultat :
if ( Premier == false ) { document.getElementById("resultat").innerHTML = "Pas premier" }
}

