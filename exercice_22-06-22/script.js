//tableau

var tab = new Array(4);

var tab;
tab[0]="titi";
tab[1]="tata";
tab[2]="toto";
tab[3]="tutu";
tab[4]="tete";

console.log(tab);
document.write(tab,"</br>");

tab.sort();

console.log(tab.sort());
document.write(tab.sort(),"</br>");

tab.reverse();

console.log(tab.reverse());
document.write(tab.reverse(),"</br>");

//date du jour

var date = new Date();

document.write(date.toLocaleDateString("fr-FR"),"</br>");

var date = ("Mercredi 22 juin 2022");

document.write(date.toUpperCase(),"</br>");

let browserType = ('Mercredi 22 juin 2022'[2]);

document.write(browserType);
