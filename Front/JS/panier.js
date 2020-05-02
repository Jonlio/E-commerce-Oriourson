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

const calculMontantTotal = () => {
    let total = 0;
    for (let i = 0; i < panier.length; i++) {
        total += panier[i].price;
    }
    return total / 100;
}

function affichageMontantTotal() {
    let prixTotal = document.createElement('p');
    prixTotal.textContent = 'Le montant total de votre panier est de ' + calculMontantTotal() + ' €';
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

async function validerCommande() {

    //Récupération données saisies
    let clientPrenom = document.querySelector('#clientPrenom');
    let clientNom = document.querySelector('#clientNom');
    let clientAdresse = document.querySelector('#clientAdresse');
    let clientVille = document.querySelector('#clientVille');
    let clientEmail = document.querySelector('#clientEmail');
    let validBtn = document.querySelector('#validBtn');

    validBtn.addEventListener('click', async function (e) {
        e.preventDefault();


        let donnesCommande = new Object();

        donnesCommande.contact = {
            firstName: clientPrenom.value,
            lastName: clientNom.value,
            address: clientAdresse.value,
            city: clientVille.value,
            email: clientEmail.value,
        };

        donnesCommande.products = [];
        for (let i = 1; i < panier.length; i++) {
            donnesCommande.products.push(panier[i].id);
        }

        if (clientPrenom.value == 0 || clientNom.value == 0 || clientAdresse.value == 0 || clientVille.value == 0 || clientEmail.value == 0) {
            alert('Veuillez remplir tous les champs du formulaire pour valider votre commande!');
        } else {
            //Requête
            response = await fetch("http://localhost:3000/api/teddies/order", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(donnesCommande),
            })

            let reponseCommande = await response.json();
            window.location = 'confirmation.html?id=' + reponseCommande.orderId + '&price=' + calculMontantTotal();
        }
    })
}

validerCommande()