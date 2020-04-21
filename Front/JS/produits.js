// Affichage Ourson Selectionne
let params = new URLSearchParams(window.location.search); 
let id = params.get("id");
let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/teddies/' + id);
request.responseType = 'json';
request.send();

//Fonctions dynamiques
request.onload = function () {
    let data = request.response;
    let {oursChoisi, oursImage, oursNom, oursDescri, oursPrix} = varElements();
    elementsContent(data, oursImage, oursNom, oursDescri, oursPrix);
    appendiceChild(oursChoisi, oursImage, oursNom, oursDescri, oursPrix);
};

//Error
request.onerror = function () {
    alert('Server error, please try again later');
};

//Fonctions détaillees

function varElements() {
    let oursChoisi = document.createElement('article');
    let oursImage = document.createElement('img');
    let oursNom = document.createElement('h3');
    let oursDescri = document.createElement('p');
    let oursPrix = document.createElement('p');
    return {oursChoisi, oursImage, oursNom, oursDescri, oursPrix};
}


function elementsContent(data, oursImage, oursNom, oursDescri, oursPrix) {
    oursImage.src = data.imageUrl;
    oursNom.textContent = data.name;
    oursDescri.textContent = data.description;
    oursPrix.textContent = 'Prix: ' + data.price / 100 + '€';
}

function appendiceChild(oursChoisi, oursImage, oursNom, oursDescri, oursPrix) {
    let section = document.querySelector('#produit');
    section.appendChild(oursChoisi);
    oursChoisi.appendChild(oursImage);
    oursChoisi.appendChild(oursNom);
    oursChoisi.appendChild(oursDescri);
    oursChoisi.appendChild(oursPrix);
}

