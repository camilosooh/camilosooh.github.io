function scrollByAmount(amount) {
    window.scrollBy({ top: amount, behavior: 'smooth' });
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
var boton = document.getElementById("btnHistoria");
var parrafo = document.getElementById("parrafo");
function toggleTexto() {
  if (parrafo.style.display === "none") {
    parrafo.style.display = "block";
    parrafo.classList.remove("fadeOut");
    parrafo.classList.add("fadeIn");
    boton.style.backgroundColor = "#000";
  } else {
    parrafo.classList.remove("fadeIn");
    parrafo.classList.add("fadeOut");
    boton.style.backgroundColor = "";
    setTimeout(function() {
      parrafo.style.display = "none";
    }, 500);
  }
}