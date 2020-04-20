async function affichTeddies() {
        let response = await fetch('http://localhost:3000/api/teddies');
        let data = await response.json();

        if (response.ok) {
            console.log(data);

        } else {
            console.error("retour du serveur : ", response.status);
        }

        affichTeddy();
