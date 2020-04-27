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
        let lienPannier = document.createElement('a');
        let bouton = document.createElement('p');

        oursImage.src = data.imageUrl;
        oursNom.textContent = data.name;
        oursDescri.textContent = data.description;
        oursPrix.textContent = 'Prix: ' + data.price / 100 + '€';
        lienPannier.href = 'pannier.html'
        bouton.textContent = 'Je l\'adopte!';

        let section = document.querySelector('#produit');
        section.appendChild(oursChoisi);
        oursChoisi.appendChild(oursImage);
        oursChoisi.appendChild(oursNom);
        oursChoisi.appendChild(oursDescri);
        oursChoisi.appendChild(oursPrix);
        oursChoisi.appendChild(oursListColor);
        oursChoisi.appendChild(lienPannier);
        lienPannier.appendChild(bouton);

        let colors = data.colors;
        for (let color of colors) {
            let choixCouleur = document.createElement('option');
            choixCouleur.textContent = color;
            oursListColor.appendChild(choixCouleur);
        }
    })


