//formulario
document.addEventListener("DOMContentLoaded", (event) => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("click", function () {
        window.open("https://classapi-production.up.railway.app/", "_blank");
    });
});

//edit
document.addEventListener("DOMContentLoaded", (event) => {
    const formulario = document.getElementById("edit");
    formulario.addEventListener("click", function () {
        window.open("https://classapi-production.up.railway.app/edit_user/", "_blank");
    });
});

//delete
document.addEventListener("DOMContentLoaded", (event) => {
    const formulario = document.getElementById("delete");
    formulario.addEventListener("click", function () {
        window.open("https://classapi-production.up.railway.app/delete_user/", "_blank");
    });
});

