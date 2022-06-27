function multiplier(){
    num1 = document.getElementById("01").value;
    num2 = document.getElementById("02").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function ttc(){
    b = document.getElementById("b").value;
    p = document.getElementById("p").value;
    s = document.getElementById("s").value;
    document.getElementById("ttc").innerHTML = (b * 1.1) + (p * 1.1) + (s * 1.1);
}

function tva(){
    b = document.getElementById("b").value;
    p = document.getElementById("p").value;
    s = document.getElementById("s").value;
    document.getElementById("tva").innerHTML = (b * 1.1) + (p * 1.1) + (s * 1.1) - b - p - s;
}

function ht(){
    b = document.getElementById("b").value;
    p = document.getElementById("p").value;
    s = document.getElementById("s").value;
    document.getElementById("ht").innerHTML = parseFloat(b) + parseFloat(p) + parseFloat(s);
}

var n = new Number , estPrem = Boolean(true);
function tester ()
{
    n = Number(document.getElementById("nbre").value);
    estPrem = true;
for(j=2;j<n;j++)
{
    if ( n % j == 0 ) estPrem = false;
}
//si le nombre est premier j'affiche :
if ( estPrem == true ) { document.getElementById("resultat3").innerHTML = n + " " + "Est un nombre premier" }
//s'il n'est pas premier j'affiche :
if ( estPrem == false ) { document.getElementById("resultat3").innerHTML = n + " " + "N'est pas un nombre premier" }
//si le nombre est premier je passe le body en vert
if (estPrem == true) {document.getElementById("body").style.backgroundColor = "green";}
//sinon je passe le body en rouge
if (estPrem == false) {document.getElementById("body").style.backgroundColor = "red";}
}
