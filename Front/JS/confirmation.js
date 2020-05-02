
var params = new URLSearchParams(window.location.search);
var id = params.get("id");
var price = params.get("price");

let totalPrice = document.getElementById('prix');
totalPrice.textContent = 'Montant total de votre commande: ' + price + '€';
let responseOrderId = document.getElementById('test');
responseOrderId.textContent = 'Votre numéro de commande: ' + id;

