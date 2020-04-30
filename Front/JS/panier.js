//Récupération contenu localStorage
let panier = JSON.parse(localStorage.getItem('panier'));

const gestionPanier = () => {
    if (panier === null) {
        panierVide()
    } else {
        panierPlein();
        commandeTotal();
        viderPanier();
    }
}

function panierVide() {
    let section = document.querySelector('#section');
    let btn = document.querySelector('button');

    let panierVide = document.createElement('h3');
    let link = document.createElement('a');

    panierVide.textContent = '... est vide';
    link.href = 'index.html';
    btn.textContent = 'Go shopping';

    section.appendChild(panierVide);
    section.appendChild(link);
    link.appendChild(btn);
}

function panierPlein() {
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
}

function commandeTotal() {
    let total = 0;
    for (let i = 0; i < panier.length; i++) {
        total += panier[i].price;
    }
    let prixTotal = document.createElement('p');
    prixTotal.textContent = 'Le montant total de votre panier est de ' + total / 100 + ' €';
    section.appendChild(prixTotal);
}

function viderPanier() {
    let btnVider = document.querySelector('button');
    btnVider.textContent = 'Vider le panier';
    btnVider.addEventListener('click', function () {
        localStorage.clear();
        location.reload(true);
    })
}

gestionPanier()

/*
//Formulaire
//Récupération données saisies
let clientPrenom = document.querySelector('#clientPrenom');
let clientNom = document.querySelector('#clientNom');
let clientAdresse = document.querySelector('#clientAdresse');
let clientVille = document.querySelector('#clientVille');
let clientEmail = document.querySelector('#clientEmail');
let validBtn = document.querySelector('#validBtn');

validBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let infoClient = {
        firstName: clientPrenom.value,
        lastName: clientNom.value,
        address: clientAdresse.value,
        city: clientVille.value,
        email: clientEmail.value,
    }
    console.log(infoClient)
});
*/