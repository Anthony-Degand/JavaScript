function afficher() {
    eleves = document.getElementById("eleves");
    eleves = ["toto", "titi", "tata", "tutu", "tete"];
    
    toto = document.getElementById("toto");
    toto = [13, 15, 18, 11, 14];

    /*titi = document.getElementById("titi");
    titi = [4,9,7,14,12];*/
    
    if (eleves = eleves[0]) {
        document.getElementById("n1").innerHTML = toto[0];
        document.getElementById("n2").innerHTML = toto[1];
        document.getElementById("n3").innerHTML = toto[2];
        document.getElementById("n4").innerHTML = toto[3];
        document.getElementById("n5").innerHTML = toto[4];
        document.getElementById("n6").innerHTML = (toto[0] + toto[1] + toto[2] + toto[3] + toto[4]) / 5;
    }
else {
    alert("erreur")
}
    /*if (eleves = eleves[2]) {
        document.getElementById("n1").innerHTML = titi[0];
        document.getElementById("n2").innerHTML = titi[1];
        document.getElementById("n3").innerHTML = titi[2];
        document.getElementById("n4").innerHTML = titi[3];
        document.getElementById("n5").innerHTML = titi[4];
        document.getElementById("n6").innerHTML = (titi[0] + titi[1] + titi[2] + titi[3] + titi[4]) / 5;
    }*/
}




//saisie manuelle

function calculer() {
    n1 = document.getElementById("note1").value;
    n2 = document.getElementById("note2").value;
    n3 = document.getElementById("note3").value;
    n4 = document.getElementById("note4").value;
    n5 = document.getElementById("note5").value;
    document.getElementById("moy").innerHTML = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5;
}