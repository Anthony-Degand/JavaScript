
/*const chorizo = 11.50;
const margarita = 10.00;
const tartiflette = 12.00;
const total = (chorizo * 1.1)+(margarita * 1.1)+(tartiflette * 1.1);
const ht = chorizo + margarita + tartiflette;*/

function ftotal(){
    chorizo = document.getElementById("chorizo").value;
    chorizo.checked = 11.50;

    margarita = document.getElementById("margarita").value;
    chorizo.checked = 10.00;

    tartiflette = document.getElementById("tartiflette").value;
    tartiflette.checked = 12.00;

    if ( chorizo.checked + margarita.checked + tartiflette.checked ) {
        total = ( chorizo * 1.1 ) + ( margarita * 1.1 ) + ( tartiflette * 1.1 );
    document.getElementById("clic2").innerHTML = total;
    }
}

function fht(){

}


