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
const totalRounds = 9;

const resultBox = document.querySelector(".results"); //Resultados de búsqueda
const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
const submitButton = document.querySelector(".submit-btn");
const scoreBox = document.querySelector(".score-box");
const carImage = document.querySelector(".car-image");
const resultDiv = document.getElementById('result');

function displayCarImage(round) {
    if (round < SearchList.length) {
        carImage.innerHTML = `<img src="${SearchList[round].image}" alt="Imagen de ${SearchList[round].name}" style="max-width: 100%; height: auto;">`;
    }
}

displayCarImage(currentRound);

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

    if (currentRound >= totalRounds || currentRound >= SearchList.length) {
        alert(`Juego terminado, tu puntuación final es ${score}`);
        scoreBox.innerText =`Score: ${score}`;
        carImage.innerHTML = "";

        let image = "";
        if (score == 90 ) {
            image = "<img src='../images/cienpuntos.png' alt='Cien Puntos' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        } else if (score >=70 && score < 90) {
            image = "<img src='../images/medalla.png' alt='70 a 90' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        } else if (score == 60) {
            image = "<img src='../images/puño.png' alt='60 puntos' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        } else {
            image = "<img src='../images/cara.png' alt='Menos 60' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        }

        resultDiv.innerHTML = image;
        resultDiv.style.display = 'block';

    } else {
        scoreBox.innerText = `Score: ${score} | Round: ${currentRound + 1}/${totalRounds}`;
        displayCarImage(currentRound);
        resultDiv.innerHTML = image;
        resultDiv.style.display = 'block';
    }
};