document.addEventListener("DOMContentLoaded", function () {
    fetch("https://classapi-production.up.railway.app/all_users")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const container = document.getElementById("listaContainer");
            container.innerHTML = "";

            data.forEach((profile) => {
                const profileCard = document.createElement("div");
                profileCard.className = "profileCard";

                const directImageLink = `https://classapi-production.up.railway.app/photo/${profile.ID}`;

                profileCard.innerHTML = `
                    <div class="left">
                        <img class="ProfileImage" src="${directImageLink}" alt="avatar">
                        <div class="text">
                            <div class="nameContainer">
                                <h1 class="name">${profile.Name}</h1>
                            </div>
                            <p class="nickname">${profile.Apelido}</p>
                        </div>
                    </div>
                    <div class="buttons">
                        <a class="linkedin" href="${
                            profile.Linkedin
                        }" target="_blank" style="display: ${
                    isValidUrl(profile.Linkedin) ? "block" : "none"
                };">
                            <i class="fi fi-brands-linkedin"></i>
                        </a>
                        <a class="instagram" href="${
                            profile.Instagram
                        }" target="_blank" style="display: ${
                    isValidUrl(profile.Instagram) ? "block" : "none"
                };">
                            <i class="fi fi-brands-instagram"></i>
                        </a>
                        <a class="github" href="${
                            profile.Github
                        }" target="_blank" style="display: ${
                    isValidUrl(profile.Github) ? "block" : "none"
                };">
                            <i class="fi fi-brands-github"></i>
                        </a>
                    </div>
                `;

                container.appendChild(profileCard);
            });

            // Função para verificar se o URL é válido
            function isValidUrl(url) {
                return /^(https?:\/\/)/.test(url);
            }

            // Aplicando a animação de letreiro em nomes maiores que 10 caracteres no hover
            const nameElements = document.querySelectorAll('.name');
            nameElements.forEach(nameElement => {
                const nameText = nameElement.innerText;

                if (nameText.length > 10) {
                    nameElement.addEventListener('mouseover', () => {
                        nameElement.style.animation = 'letreiro 10s linear infinite';
                    });
                    nameElement.addEventListener('mouseout', () => {
                        nameElement.style.animation = 'none';
                    });
                }
            });

        })
        .catch((error) => console.error("Error loading JSON:", error));
});
