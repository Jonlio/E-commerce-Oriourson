// Recupère tous les Oursons
const recupOursons = async () => {
    const response = await fetch('http://localhost:3000/api/teddies');
    return await response.json();
}

// Affiche tous les Oursons
const affichOursons = async () => {
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
        liOursons.appendChild(imgOursons);
        aOursons.appendChild(nomOursons);
        liOursons.appendChild(aOursons);
    }
}

affichOursons();
