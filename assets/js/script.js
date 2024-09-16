//formulario
document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("click", function() {
        window.open("https://classapi-production.up.railway.app/", "_blank");
    });
});


//lista
// const lista = document.getElementById("lista");
// const listaContainer = document.getElementById("listaContainer");

// lista.addEventListener("click", function() {
//     if (listaContainer.style.display === "flex") {
//         listaContainer.style.display = "none";
//     } else {
//         listaContainer.style.display = "flex";
//     }
// });


//icon link
//ainda em teste!!!!!!!!!
document.addEventListener("DOMContentLoaded", function () {

    function updateButtonsVisibility() {
        document.querySelectorAll('.buttons').forEach((profileElement) => {
            const linkedinLink = profileElement.querySelector('.linkedin');
            const instagramLink = profileElement.querySelector('.instagram');
            const githubLink = profileElement.querySelector('.github');

            function isValidUrl(url) {
                return url && url !== '.' && url.trim() !== '';
            }

            linkedinLink.style.display = isValidUrl(linkedinLink.getAttribute('href')) ? 'flex' : 'none';
            instagramLink.style.display = isValidUrl(instagramLink.getAttribute('href')) ? 'flex' : 'none';
            githubLink.style.display = isValidUrl(githubLink.getAttribute('href')) ? 'flex' : 'none';

            instagramLink.style.color = "red !important";
        });
    }

    updateButtonsVisibility();
});






//home


