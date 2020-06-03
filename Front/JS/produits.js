// Recuperation ourson selectionné
async function recupOurson() {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    const response = await fetch("http://localhost:3000/api/teddies/" + id);
    if (response.ok) {
        return await response.json();
    } else {
        alert('Désolé, une erreur est survenue! Retour du serveur: ' + response.status);
        window.location.href = 'index.html';
    }
};

//Affichage ourson selectionné
async function affichOurson() {
    const data = await recupOurson()
    let oursChoisi = document.createElement('article');
    let oursImage = document.createElement('img');
    let oursNom = document.createElement('h3');
    let oursDescri = document.createElement('p');
    let oursPrix = document.createElement('p');
    let oursListColor = document.createElement('select');

    const calculMontantOurson = () => {
        return data.price / 100;
    }

    oursImage.src = data.imageUrl;
    oursNom.textContent = data.name;
    oursDescri.textContent = data.description;
    oursPrix.textContent = 'Prix: ' + calculMontantOurson() + '€';

    let section = document.querySelector('#produit');
    section.appendChild(oursChoisi);
    oursChoisi.appendChild(oursImage);
    oursChoisi.appendChild(oursNom);
    oursChoisi.appendChild(oursDescri);
    oursChoisi.appendChild(oursPrix);
    oursChoisi.appendChild(oursListColor);

    //Selection couleur 
    let colors = data.colors;
    for (let color of colors) {
        let choixCouleur = document.createElement('option');
        choixCouleur.textContent = color;
        oursListColor.appendChild(choixCouleur);
    }
}

//Ajouter l'ourson au panier via le localStorage
async function ajouterAuPanier() {
    const data = await recupOurson();
    let bouton = document.querySelector('button');
    bouton.innerHTML = 'Je l\'adopte';
    let oursonDonnees = {
        id: data._id,
        name: data.name,
        price: data.price,
        image: data.imageUrl
    };

    let oursonTableau = localStorage.getItem('panier') ?
        JSON.parse(localStorage.getItem('panier')) : [];
    oursonTableau.push(oursonDonnees);
    bouton.addEventListener('click', function() {
        localStorage.setItem('panier', JSON.stringify(oursonTableau));
        bouton.innerHTML = 'Adopté!';
    });
}

affichOurson();
ajouterAuPanier();
