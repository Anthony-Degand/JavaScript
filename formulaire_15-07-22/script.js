function conca(){
    a = document.getElementById("nom").value; //  a = la valeur de l'input "nom"
    b = document.getElementById("prenom").value; // b = la valeur de l'input "prenom"
    c = `${a} ${b}`; // c = la valeur d" l'input a suivis d'un espace puis de la valeur de l'input b 
    
    document.getElementById("netp").value = c; // la valeur de netp = c
}

