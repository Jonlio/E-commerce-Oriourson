// Affichage Ourson Selectionne
function affichOurson() {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/teddies/' + id);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        let data = request.response;
        let colors = data.colors;

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
        
        for (let color of colors) {
            let choixCouleur = document.createElement('option');
            choixCouleur.textContent = color;
            oursListColor.appendChild(choixCouleur);
            }
    }

    //Error
    request.onerror = function () {
        console.log('Server error, please try again later');
    }
}

affichOurson()
