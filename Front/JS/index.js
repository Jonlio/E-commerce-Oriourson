//Affichage des Oursons
async function affichTeddies() {
    let response = await fetch('http://localhost:3000/api/teddies');
    let datas = await response.json();

    if (response.ok) {
        console.log(datas);

        for (let i = 0; i < datas.length; i++) {
            let nomOurson = datas[i].name;
            let imgOurson = datas[i].imageUrl;
            let imgOursons = document.createElement("img");
            imgOursons.src = datas[i].imageUrl;

            let liOursons = document.createElement("li");
            let aOursons = document.createElement("a");
            aOursons.href = 'produits.html?id=' + datas[i]._id;

            let pOursons = document.createElement('p');
            pOursons.textContent = nomOurson;

            let divOursons = document.getElementById("produits");
            divOursons.appendChild(liOursons);
            liOursons.appendChild(imgOursons);
            aOursons.appendChild(pOursons);
            liOursons.appendChild(aOursons);
        }

    } else {
        console.error("retour du serveur : ", response.status);
    }
}

affichTeddies();
