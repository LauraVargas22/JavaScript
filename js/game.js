const SearchList = [
    { name:"Spark", image: "../images/spark.png" },
    { name:"Aveo", image: "../images/aveo.png" },
    { name:"Camaro", image: "../images/camaro.png" },
    { name:"Swift",  image: "../images/swift.png" },
    { name:"Vitara", image: "../images/vitara.png" }, 
    { name:"Jimny", image: "../images/jimny.png" },
    { name:"Clio", image: "../images/clio.png" },
    { name:"Megane", image: "../images/megane.png" },
    { name:"Kangoo", image: "../images/kangoo.png" },
];

let score = 0;
let currentRound = 0;
const totalRounds = 10;

const resultBox = document.querySelector(".results"); //Resultados de búsqueda
const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
const submitButton = document.querySelector(".submit-btn");
const scoreBox = document.querySelector(".score-box");
const carImage = document.querySelector(".car-image");

function displayCarImage(round) {
    carImage.innerHTML = `<img src="${SearchList[round].image}" alt="Imagen de ${SearchList[round].name}" style"max-width: 100%; height: auto;">`;
}

displayCarImage(currentRound);

//Representa resultados de búsqueda
/*const displayResults = function (result) { 
    const resultHTML = result.map (function (cars) {return `<li onclick=selectInput(this)>${cars}</li onclick=selectInput>`;});

    resultBox.innerHTML = '<ul>' + resultHTML.join ("") + '</ul>';
}
// Detecta la pulsación sobre la barra de búsqueda
inputBox.onkeyup = function (e) {
    let result = [];

    const input = inputBox.value.toLowerCase();

    if (input.length === 0) {
        resultBox.innerHTML = "";
    }

    if (input.length) {
        result = SearchList.filter ((cars) => {return cars.toLowerCase().includes(input);});

        displayResults(result);
    }
};
//Cuando el usuario hace clic sobre el elemento
function selectInput(cars) {
    inputBox.value = cars.innerText;
    resultBox.innerHTML = "";
}; */

submitButton.onclick = function () {
    const userInput = inputBox.value.trim();
    if (userInput.toLowerCase() === SearchList[currentRound].name.toLowerCase()) {
        score += 10;
        alert(`¡Correcto! Has ganado 10 puntos`);
    } else {
        alert(`Incorrecto. La respuesta era: ${SearchList[currentRound].name}`);
    }
    currentRound++;
    inputBox.value = "";

    if (currentRound >= totalRounds) {
        alert(`Juego terminado, tu puntuación final es ${score}`);
        scoreBox.innerText =`Puntuación: ${score}`;
        carImage.innerHTML = "";
        if (score == 100 ) {
            image = "<img src='../images/cienpuntos.png' alt='Cien Puntos' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        } else if (score >=70 && score < 100) {
            image = "<img src='../images/medalla.png' alt='70 a 90' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        } else if (score == 60) {
            image = "<img src='../images/puño.png' alt='60 puntos' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        } else {
            image = "<img src='../images/cara.png' alt='Menos 60' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        }
    } else {
        scoreBox.innerText = `Puntuación: ${score} | Ronda: ${currentRound + 1}/${totalRounds}`;
        displayCarImage(currentRound);
    }
};