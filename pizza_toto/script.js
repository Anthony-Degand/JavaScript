// variables

let chorizo = document.getElementById('pizzaChorizoCheck');
let tartiflette = document.getElementById('pizzaTartiCheck');
let margarita = document.getElementById('pizzaMargaCheck');

let pannier = document.getElementById('pannier');
let ttc = document.getElementById('TTC');
let tva = document.getElementById('TVA');
let  commander = document.getElementById('commander');

let menu = document.getElementById('s01');

// écouteurs

chorizo.addEventListener('change', (event) => {
    let menu = document.getElementById('s01').value;

    if (event.currentTarget.checked) {
        menu.innerHTML = 'Pizza chorizo 10,80€';
    } else {
      alert('not checked');
    }
  })


// console.log(chorizo.checked);



// form.addEventListener('submit', function (e) { // quand on valide le formulaire, lancer ma fonction validMdp

//     e.preventDefault();// l'ors de la soumission du formulaire, ne pas engager l'événement de base ( ne pas envoyer les données )

//    if (validEmail(form.email) && validMdp(form.mdp)) { // si mes champs son correct soumettre le formulaire
//         form.submit();
//    }
   
// });





























/*
chorizo = document.getElementById("chorizo").value;

function toggleCheckboxc() {
    document.getElementById("chorizo").checked = !document.getElementById("chorizo").checked;
    if ( document.getElementById("chorizo").checked){document.getElementById("chorizo") = 11.50}
}

margarita = document.getElementById("margarita").value;

function toggleCheckboxm() {
    document.getElementById("margarita").checked = document.getElementById("margarita").value;
    console.log(margarita);
}

tartiflette = document.getElementById("tartiflette").value;

function toggleCheckboxt() {
    document.getElementById("tartiflette").checked = document.getElementById("tartiflette").value;
    console.log(tartiflette);
}

function ftotal(){
    if ( chorizo.checked + margarita.checked + tartiflette.checked ){
        document.getElementById("valider").innerHTML = (chorizo * 1.1) + (margarita * 1.1) + (tartiflette * 1.1);
        console.log(chorizo.value + margarita.value + tartiflette.value);
    }
}*/