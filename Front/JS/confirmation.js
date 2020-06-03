//Confirmation de la commande
function affichageConfirmationCommande() {

    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id == null) {
        window.location.href = 'index.html';
    } else {
        let prixTotal = params.get("price");
        let recapCommande = document.getElementById('confirmation');
        let numCommande = document.createElement('p');
        let recapPrix = document.createElement('p');

        numCommande.textContent = 'Votre numéro de commande: ' + id;
        recapPrix.textContent = 'Montant total de votre commande: ' + prixTotal + ' €';

        recapCommande.appendChild(numCommande);
        recapCommande.appendChild(recapPrix);

        localStorage.clear();
    };
}

affichageConfirmationCommande();
