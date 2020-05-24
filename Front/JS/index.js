// Recupère tous les Oursons
async function recupOursons() {
    const response = await fetch('http://localhost:3000/api/teddies');
    if (response.ok) {
        return await response.json();
    } else {
        alert('Désolé, une erreur est survenue! Retour du serveur: ' + response.status);
    }
}

// Affiche tous les Oursons
async function affichOursons() {
    const datas = await recupOursons()
    for (let i = 0; i < datas.length; i++) {

        let liOursons = document.createElement("li");
        let imgOursons = document.createElement("img");
        let aOursons = document.createElement("a");
        let nomOursons = document.createElement('h3');

        imgOursons.src = datas[i].imageUrl;
        aOursons.href = 'produits.html?id=' + datas[i]._id;
        nomOursons.textContent = datas[i].name;

        let ulOursons = document.getElementById("produits");
        ulOursons.appendChild(liOursons);
        liOursons.appendChild(aOursons);
        aOursons.appendChild(imgOursons);
        aOursons.appendChild(nomOursons);
        liOursons.appendChild(aOursons);
    }
}

affichOursons();
