let currentPage = 1;
let totalPages;

const characterList = document.getElementById('character-list');
const pageNumberDisplay = document.getElementById('page-number');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

async function fetchCharacters(page) {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    totalPages = data.info.pages;

    displayCharacters(data.results);
    updatePagination();
}

function displayCharacters(characters) {
    characterList.innerHTML = characters.map(character =>
        `<div style="margin: 20px;">
            <img src="${character.image}" alt="${character.name}" style="width: 100px; height: auto;">
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
        </div>`
    ).join('');
}

function updatePagination() {
    pageNumberDisplay.innerText = currentPage;

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchCharacters(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        fetchCharacters(currentPage);
    }
});

fetchCharacters(currentPage);


//Factory
class Transport {
    ride() {
        console.log("Transport is moving");
    }

    stop() {
        console.log("Transport has stopped");
    }
}


class Car extends Transport {
    ride() {
        console.log("Car is driving");
    }

    stop() {
        console.log("Car has stopped");
    }
}


class Bike extends Transport {
    ride() {
        console.log("Bike is cycling");
    }

    stop() {
        console.log("Bike has stopped");
    }
}


class TransportFactory {
    static createTransport(type) {
        if (type === "car") {
            return new Car();
        } else if (type === "bike") {
            return new Bike();
        } else {
            throw new Error("Unknown transport type");
        }
    }
}


const myCar = TransportFactory.createTransport("car");
myCar.ride(); // Car is driving
myCar.stop(); // Car has stopped

const myBike = TransportFactory.createTransport("bike");
myBike.ride(); // Bike is cycling
myBike.stop(); // Bike has stopped

