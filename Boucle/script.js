let i = 0;

while (i < 50)// temps que i est strictement inferieur a 50, ecrit : je copie 50 fois 
{
    document.write("je copie 50 fois");
    i++;
    document.write("</br>");
}

let n = 10;

do // tu affiche " aaa " :
{
    document.write("aaa");
}

while (n < 10); // puis, le temps que n est strictement inferieur a 10 répéte l'operation



for (let a = 0 ; a < 50 ; ++a ) // a vaux 0 , le temps que a est inferieur a 50, a prend + 1 donc j'affiche "a " 50 fois
{
    document.write("a ");
}