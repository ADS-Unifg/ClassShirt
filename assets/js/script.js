//formulario
document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("click", function() {
        window.open("https://forms.gle/EzLPmoHmJVXRmVbj8", "_blank");
    });
});


//lista
const lista = document.getElementById("lista");
const listaContainer = document.getElementById("listaContainer");

lista.addEventListener("click", function() {
    if (listaContainer.style.display === "flex") {
        listaContainer.style.display = "none";
    } else {
        listaContainer.style.display = "flex";
    }
});


//home