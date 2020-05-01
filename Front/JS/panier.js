//Récupération contenu localStorage
let panier = JSON.parse(localStorage.getItem('panier'));

const gestionPanier = () => {
    if (panier === null) {
        affichagePanierVide()
    } else {
        affichagePanierPlein();
        affichageMontantTotal();
        initViderPanier();
    }
}

function affichagePanierVide() {
    let section = document.querySelector('#section');
    let btn = document.querySelector('button');

    let affichagePanierVide = document.createElement('h3');
    let link = document.createElement('a');

    affichagePanierVide.textContent = '... est vide';
    link.href = 'index.html';
    btn.textContent = 'Go shopping';

    section.appendChild(affichagePanierVide);
    section.appendChild(link);
    link.appendChild(btn);
}

function affichagePanierPlein() {
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

function affichageMontantTotal() {
    let total = 0;
    for (let i = 0; i < panier.length; i++) {
        total += panier[i].price;
    }
    let prixTotal = document.createElement('p');
    prixTotal.textContent = 'Le montant total de votre panier est de ' + total / 100 + ' €';
    section.appendChild(prixTotal);
}

function initViderPanier() {
    let btnVider = document.querySelector('button');
    btnVider.textContent = 'Vider le panier';
    btnVider.addEventListener('click', function () {
        localStorage.clear();
        location.reload(true);
    })
}

gestionPanier()


    let clientPrenom = document.querySelector('#clientPrenom');
    let clientNom = document.querySelector('#clientNom');
    let clientAdresse = document.querySelector('#clientAdresse');
    let clientVille = document.querySelector('#clientVille');
    let clientEmail = document.querySelector('#clientEmail');
    let validBtn = document.querySelector('#validBtn');

    validBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var infoClient = new Object();
        infoClient.contact = {
            firstName: clientPrenom.value,
            lastName: clientNom.value,
            address: clientAdresse.value,
            city: clientVille.value,
            email: clientEmail.value,
        };

        infoClient.products = [];
        for (var i = 0; i < panier.length; i++) {
            infoClient.products.push(panier[i].id);
        }

        let response = fetch("http://localhost:3000/api/teddies/order", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(infoClient),
        })
        localStorage.clear()
    });



