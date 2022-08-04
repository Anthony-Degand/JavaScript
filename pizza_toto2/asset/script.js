// Créer un Panier E-commerce en JS Html Css
//   https://www.youtube.com/watch?v=klmKSJaAyAo&ab_channel=PROJETDEVELOPPEMENT-D%C3%A9veloppeurCodeur


// JS : Gérer un panier e-commmerce avec le localstorage
// https://www.youtube.com/watch?v=vMT4NNFYno0&ab_channel=trainingdev

// ************************************Menu burger js ( improviser )*****************************
let menu = document.getElementById('img_open');
let fermer = document.querySelector('.img_close');
let nav = document.getElementById('nav');
let menuMenu = document.getElementById('menuMenu');
let liste = document.querySelector('#liste') 
let liste01 = document.querySelector('#liste01');
let liste02 = document.querySelector('#liste02');
let liste03 = document.querySelector('#liste03');
let ul = document.getElementById('ul');


menu.addEventListener('click', () => {

    nav.style.height = "100vh";
    menuMenu.style.position = "absolute";
    menuMenu.style.top = "20vh";
    ul.style.display = "block";
    
    menuMenu.style.left = "75%";
    menuMenu.style.transform = "translate(-50%)"; 
    menuMenu.style.color = "white";
    liste.style.display = "none";
    

    liste01.style.listStyle = "none";
    liste01.style.marginBottom = "50px";
    liste01.style.textAlign = "center";
    liste01.style.backgroundColor = "red";
    liste01.style.borderRadius = "30px";
    liste01.style.cursor = "pointer";
    liste01.addEventListener("mouseover", () => {
        liste01.style.backgroundColor = "rgb(139, 12, 12)";
    })
    liste01.addEventListener("mouseout", () => {
        liste01.style.backgroundColor = "red";
    })

    liste02.style.listStyle = "none";
    liste02.style.marginBottom = "50px";
    liste02.style.textAlign = "center";
    liste02.style.backgroundColor = "red";
    liste02.style.borderRadius = "30px";
    liste02.style.cursor = "pointer";
    liste02.addEventListener("mouseover", () => {
        liste02.style.backgroundColor = "rgb(139, 12, 12)";
    })
    liste02.addEventListener("mouseout", () => {
        liste02.style.backgroundColor = "red";
    })

    liste03.style.listStyle = "none";
    liste03.style.marginBottom = "50px";
    liste03.style.textAlign = "center";
    liste03.style.backgroundColor = "red";
    liste03.style.borderRadius = "30px";
    liste03.style.cursor = "pointer";
    liste03.addEventListener("mouseover", () => {
        liste03.style.backgroundColor = "rgb(139, 12, 12)";
    })
    liste03.addEventListener("mouseout", () => {
        liste03.style.backgroundColor = "red";
    })

    menu.style.display = "none";

    fermer.style.display = "block";
    fermer.style.position = "relative"; 
    
})

fermer.addEventListener('click', () => {

    nav.style.height = "10vh";
    ul.style.display = "none";
    menu.style.display = "block";
    fermer.style.display = "none";
    location.reload()

})

// ***************************************fin du menu********************************************

