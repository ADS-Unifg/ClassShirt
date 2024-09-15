document.addEventListener("DOMContentLoaded", function () {
    fetch('https://classapi-production.up.railway.app/all_users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('listaContainer');
            container.innerHTML = ''; 

            data.forEach(profile => {
                const profileCard = document.createElement('div');
                profileCard.className = 'profileCard';

                
                const directImageLink = `https://classapi-production.up.railway.app/photo/${profile.ID}`; 

                profileCard.innerHTML = `
                    <img class="ProfileImage" src="${directImageLink}" alt="avatar">
                    <div class="text">
                        <h1 class="name">${profile.Name}</h1>
                        <p class="nickname">${profile.Apelido}</p>
                    </div>
                    <div class="buttons">
                        <a href="${profile.Linkedin}" target="_blank"><i class="fi fi-brands-linkedin"></i></a>
                        <a href="${profile.Instagram}" target="_blank"><i class="fi fi-brands-instagram"></i></a>
                        <a href="${profile.Github}" target="_blank"><i class="fi fi-brands-github"></i></a>
                    </div>
                `;

                container.appendChild(profileCard);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
