//Confirmation de la commande
function affichageConfirmationCommande () {
var params = new URLSearchParams(window.location.search);
var id = params.get("id");
var prixTotal = params.get("price");

let recapCommande = document.getElementById('confirmation');
let numCommande = document.createElement('p');
let recapPrix = document.createElement('p');

numCommande.textContent = 'Votre numéro de commande: ' + id;
recapPrix.textContent = 'Montant total de votre commande: ' + prixTotal + ' €';

recapCommande.appendChild(numCommande);
recapCommande.appendChild(recapPrix);

localStorage.clear();
};

affichageConfirmationCommande();
