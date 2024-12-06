const SearchList = [
    "Chevrolet",
    "Renault",
    "Suzuki",
];

const resultBox = document.querySelector(".results"); //Resultados de búsqueda
const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto

//Representa resultados de búsqueda
const displayResults = function (result) { 
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
};