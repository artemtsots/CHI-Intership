let currentPage = 1;
let totalPages;
let loading = false;

const characterList = document.getElementById('character-list');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalStatus = document.getElementById('modal-status');

async function fetchCharacters(page) {
    if (loading) return;
    loading = true;

    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    totalPages = data.info.pages;

    displayCharacters(data.results);
    loading = false;
}

function displayCharacters(characters) {
    characterList.innerHTML += characters.map(character =>
        `<div class="character" data-id="${character.id}">
            <img src="${character.image}" alt="${character.name}" style="width: 100px; height: auto;">
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
        </div>`
    ).join('');
}

function showModal(characterId) {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(character => {
            modalImage.src = character.image;
            modalName.innerText = character.name;
            modalStatus.innerText = `Status: ${character.status}`;
            modal.style.display = "block";
        });
}

function closeModal() {
    modal.style.display = "none";
}

// Event delegation for character cards
characterList.addEventListener('click', (event) => {
    const characterCard = event.target.closest('.character');
    if (characterCard) {
        const characterId = characterCard.getAttribute('data-id');
        showModal(characterId);
    }
});


closeButton.addEventListener('click', closeModal);

// Close modal on outside click
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) { // Отступ для срабатывания события
        if (currentPage < totalPages) {
            currentPage++;
            fetchCharacters(currentPage);
        }
    }
});


fetchCharacters(currentPage);
