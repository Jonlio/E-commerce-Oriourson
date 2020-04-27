//Panier
let panier = JSON.parse(localStorage.getItem('panier'));
console.log(panier)

for (let i = 0; i < panier.length; i++) {
    let oursChoisi = document.createElement('article');
    let oursImage = document.createElement('img');
    let oursNom = document.createElement('h3');
    let oursPrix = document.createElement('p');

    oursImage.src = panier[i].image;
    oursNom.textContent = panier[i].name;
    oursPrix.textContent = 'Prix: ' + panier[i].price / 100 + '€';

    let section = document.querySelector('#section');
    section.appendChild(oursChoisi);
    oursChoisi.appendChild(oursImage);
    oursChoisi.appendChild(oursNom);
    oursChoisi.appendChild(oursPrix);
}
