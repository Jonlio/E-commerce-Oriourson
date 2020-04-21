// Affichage Ourson Selectionne
let section = document.querySelector('#produit');
let params = new URLSearchParams(window.location.search); //URL query parameters
let id = params.get("id");
let api = 'http://localhost:3000/api/teddies/';

let request = new XMLHttpRequest();
request.open('GET', api + id);
request.responseType = 'json';
request.send();

//Fonctions dynamiques
request.onload = function () {
    let product = request.response;
    console.log(product);
    let {oursChoisi, oursImage, oursNom, oursDescri, oursPrix} = varElements();
    elementsContent(product, oursImage, oursNom, oursDescri, oursPrix);
    appendiceChild(oursChoisi, oursImage, oursNom, oursDescri, oursPrix);
};

//Fonctions détaillees

function varElements() {
    let oursChoisi = document.createElement('article');
    let oursImage = document.createElement('img');
    let oursNom = document.createElement('h3');
    let oursDescri = document.createElement('p');
    let oursPrix = document.createElement('p');
    return {oursChoisi, oursImage, oursNom, oursDescri, oursPrix,};
}


function elementsContent(product, oursImage, oursNom, oursDescri, oursPrix) {
    oursImage.src = product.imageUrl;
    oursNom.textContent = product.name;
    oursDescri.textContent = product.description;
    oursPrix.textContent = 'Prix: ' + product.price / 100 + '€';
}

function appendiceChild(oursChoisi, oursImage, oursNom, oursDescri, oursPrix) {
    produit.appendChild(oursChoisi);
    oursChoisi.appendChild(oursImage);
    oursChoisi.appendChild(oursNom);
    oursChoisi.appendChild(oursDescri);
    oursChoisi.appendChild(oursPrix);
}

//Else
request.onerror = function () {
    alert('Server error, please try again later');
};
