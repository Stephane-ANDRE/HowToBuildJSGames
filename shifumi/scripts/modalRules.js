// Récupérer les éléments nécessaires
const modal = document.getElementById("modal");
const rulesHeader = document.getElementById("rules-header");
const closeButton = document.getElementsByClassName("close")[0];

// Ouvrir la modale lorsque le h2 est cliqué
rulesHeader.addEventListener("click", function() {
  modal.style.display = "block";
});

// Fermer la modale lorsque l'utilisateur clique sur le bouton de fermeture
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// Fermer la modale si l'utilisateur clique en dehors de la modale
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
