    document.addEventListener("DOMContentLoaded", function () {

            function convertDriveLink(driveLink) {
                const regex = /\/d\/([a-zA-Z0-9_-]+)\/.*/;
                const match = driveLink.match(regex);
                if (match) {
                    const fileId = match[1];
                    return `https://drive.google.com/uc?export=view&id=${fileId}`;
                }
                return driveLink;
            }


            fetch('data/data.json')
                .then(response => response.json())
                .then(data => {
                    const container = document.getElementById('listaContainer');


                    data.forEach(profile => {
                        const profileCard = document.createElement('div');
                        profileCard.className = 'profileCard';


                        const directImageLink = convertDriveLink(profile.Foto);

                        profileCard.innerHTML = `
                                <img class="ProfileImage" src="${directImageLink}" alt="avatar">
                                <div class="text">
                                    <h1 class="name">${profile.Nome}</h1>
                                    <p class="nickname">${profile.Apelido.Vulgo}</p>
                                </div>
                                <div class="buttons">
                                    <a href="${profile.Linkedin}" target="_blank"><i class="fi fi-brands-linkedin"></i></a>
                                    <a href="${profile.Instagram}" target="_blank"><i class="fi fi-brands-instagram"></i></a>
                                    <a href="${profile.GitHub}" target="_blank"><i class="fi fi-brands-github"></i></a>
                                </div>
                            `;


                        container.appendChild(profileCard);
                    });
                })
                .catch(error => console.error('Error loading JSON:', error));
        });
