
function checkForm(f) {

    alert( 

    "Nom : " + f.elements["nom"].value + "\n"

    + "Prénom : " + f.elements["prenom"].value + "\n"

    + "Age : " + f.elements["age"].value
    
    ) + "\n"



    return false; // n'envoie pas le formulaire

}