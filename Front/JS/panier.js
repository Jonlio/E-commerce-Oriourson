//Récupération localStorage
let panier = JSON.parse(localStorage.getItem('panier'));

//Affichage contenu panier
for (let i = 0; i < panier.length; i++) {
    let oursChoisi = document.createElement('article');
    let oursNom = document.createElement('h3');
    let oursPrix = document.createElement('p');

    oursNom.textContent = panier[i].name;
    oursPrix.textContent = 'Prix: ' + panier[i].price / 100 + '€';

    let section = document.querySelector('#section');
    section.appendChild(oursChoisi);
    oursChoisi.appendChild(oursNom);
    oursChoisi.appendChild(oursPrix);
}

//Affichage prix total
let total = 0;
for (let i = 0; i < panier.length; i++) {
    total += panier[i].price;
}

let prixTotal = document.createElement('p');
prixTotal.textContent = 'Le montant total de votre panier est de ' + total / 100 + ' €';
section.appendChild(prixTotal);
