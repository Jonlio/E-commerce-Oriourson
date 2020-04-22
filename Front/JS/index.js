//Affichage des Oursons
async function affichTeddies() {
    let response = await fetch('http://localhost:3000/api/teddies');
    let datas = await response.json();

    if (response.ok) {
        console.log(datas);

        for (let i = 0; i < datas.length; i++) {
            let nomOurson = datas[i].name;
            let imgOurson = datas[i].imageUrl;

            let liOursons = document.createElement("li");
            let imgOursons = document.createElement("img");
            let aOursons = document.createElement("a");
            let h3Oursons = document.createElement('h3');

            imgOursons.src = datas[i].imageUrl;
            aOursons.href = 'produits.html?id=' + datas[i]._id;
            h3Oursons.textContent = nomOurson;

            let ulOursons = document.getElementById("produits");
            ulOursons.appendChild(liOursons);
            liOursons.appendChild(imgOursons);
            aOursons.appendChild(h3Oursons);
            liOursons.appendChild(aOursons);
        }

    } else {
        console.error("retour du serveur : ", response.status);
    }
}

affichTeddies();
