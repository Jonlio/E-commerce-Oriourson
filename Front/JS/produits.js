// Affichage Ourson Selectionne
async function recupOurson() {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    response = await fetch("http://localhost:3000/api/teddies/" + id);
    let data = await response.json();
    return data;
}

recupOurson()
    .then(function (data) {

        let oursChoisi = document.createElement('article');
        let oursImage = document.createElement('img');
        let oursNom = document.createElement('h3');
        let oursDescri = document.createElement('p');
        let oursPrix = document.createElement('p');
        let oursListColor = document.createElement('select');

        oursImage.src = data.imageUrl;
        oursNom.textContent = data.name;
        oursDescri.textContent = data.description;
        oursPrix.textContent = 'Prix: ' + data.price / 100 + '€';

        let section = document.querySelector('#produit');
        section.appendChild(oursChoisi);
        oursChoisi.appendChild(oursImage);
        oursChoisi.appendChild(oursNom);
        oursChoisi.appendChild(oursDescri);
        oursChoisi.appendChild(oursPrix);
        oursChoisi.appendChild(oursListColor);

        let colors = data.colors;
        for (let color of colors) {
            let choixCouleur = document.createElement('option');
            choixCouleur.textContent = color;
            oursListColor.appendChild(choixCouleur);
        }

        //Ajout de l'ourson au pannier
        let bouton = document.querySelector('button');
        var productData = {
            id: data._id,
            name: data.name,
            price: data.price,
            image: data.imageUrl
        };
        var itemsArray = localStorage.getItem('panier') ?
            JSON.parse(localStorage.getItem('panier')) : [];
        itemsArray.push(productData);
        bouton.addEventListener('click', function () {
            localStorage.setItem('panier', JSON.stringify(itemsArray));
        });
    });
