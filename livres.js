function convertirEnEuros() {
  let livres = document.querySelector('.livres').value;
  let euros = (livres * 1.15);
  return euros;
}
document.querySelector('.button1').addEventListener('click', function(){
  let resultat = convertirEnEuros();
  document.querySelector ('.euros').value = `Montant en €uros : ${resultat} €`;
});

function convertirEnLivres() {
  let euros = document.querySelector('.euros2').value;
  let livres = (euros / 1.15);
  return livres;
}
document.querySelector('.button2').addEventListener('click', function(){
  let resultat = convertirEnLivres();
  document.querySelector ('.livres2').value = `Montant en £ivres : ${resultat} £`;
});
