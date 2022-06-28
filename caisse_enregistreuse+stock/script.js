let stk_plat = 10;
let stk_supp = 10;
let stk_boisson = 10;
//stock

function qt_p() {

    if (qt_plat > stk_plat) {
        alert("stock épuiser");
        let stk_plat = 10;
        let qt_plat = prompt("Nombre de plat ?");
        stk_plat = stk_plat - qt_plat;
        document.write("Quantité plat : ");
        document.write("x", qt_plat);
    }
    else {
        document.write("Quantité plat : ");
        document.write("x", qt_plat);
        stk_plat = stk_plat - qt_plat;
    }

}

function qt_s() {

    if (qt_supp > stk_supp) {
        alert("stock épuiser");
        let stk_supp = 10;
        let qt_supp = prompt("Nombre supplément crud : ");
        stk_supp = stk_supp - qt_supp;
        document.write("Quantité supplément crud : ");
        document.write("x", qt_supp);
    }
    else {
        document.write("Quantité supplément crud : ");
        document.write("x", qt_supp);
        stk_supp = stk_supp - qt_supp;
    }

}

function qt_b() {

    if (qt_boisson > stk_boisson) {
        alert("stock épuiser");
        let stk_boisson = 10;
        let qt_boisson = prompt("Nombre boisson : ");
        stk_boisson = stk_boisson - qt_boisson;
        document.write("Quantité boisson : ");
        document.write("x", qt_boisson);
    }
    else {
        document.write("Quantité boisson : ");
        document.write("x", qt_boisson);
        stk_boisson = stk_boisson - qt_boisson;
    }

}

//fonctions

document.write("__________Menu__________", "</br>");
document.write("________________________", "</br>");


let prix_plat = prompt("Prix du plat : ");
document.write("Prix du plat : ");
document.write(prix_plat, " €", "</br>");

let qt_plat = prompt("Nombre : ");
qt_p();
document.write("</br>");
document.write("________________________", "</br>");

let prix_supp = prompt("Prix supplément crud : ");
document.write("Prix supplément crud : ");
document.write(prix_supp, " €", "</br>");

let qt_supp = prompt("Nombre : ");
qt_s();
document.write("</br>");
document.write("________________________", "</br>");

let prix_boisson = prompt("Prix boisson : ")
document.write("Prix boisson : ")
document.write(prix_boisson, " €", "</br>")

let qt_boisson = prompt("Nombre : ")
qt_b();
document.write("</br>");
document.write("________________________", "</br>");

//prix/quantité

let prix_ht = (prix_plat*qt_plat)+(prix_supp*qt_supp)+(prix_boisson*qt_boisson);
let tva = ((prix_plat*qt_plat)*1.1)+((prix_supp*qt_supp)*1.1)+((prix_boisson*qt_boisson)*1.1) - prix_ht;
prix_ttc = prix_ht + tva;

document.write("Net à payer : ",prix_ttc.toFixed(2)," €","</br>")
document.write("_________Détail_________","</br>")
document.write("Prix H.T : ",prix_ht.toFixed(2)," €","</br>")
document.write("TVA : ",tva.toFixed(2)," €","</br>")

document.write("________________________", "</br>");
document.write("________________________", "</br>");

//Facture