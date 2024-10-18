// Sélectionner les éléments nécessaires
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");

// Événement de clic pour le bouton hamburger
hamburger.addEventListener("click", function() {
    sidebar.classList.toggle("active"); // Ajouter ou retirer la classe active pour afficher/cacher la barre latérale
    menu.classList.toggle("active"); // Ajouter ou retirer la classe active pour afficher/cacher le menu
});
