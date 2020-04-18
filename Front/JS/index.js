async function affichTeddies() {
    let response = await fetch('http://localhost:3000/api/teddies');
    let data = await response.json();

    if (response.ok) {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            let nomOurson = data[i].name;
            let imgOurson = data[i].imageUrl;

            let imgOursons = document.createElement("img");
            imgOursons.src = data[i].imageUrl;

            let liOursons = document.createElement("li");
            let aOursons = document.createElement("a");
            aOursons.href = data[i]._id;

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
