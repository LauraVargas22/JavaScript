//Posibles resultados de búsqueda
const SearchList = [
    {
        brand: "Chevrolet",
        models: ["Spark", "Aveo", "Camaro"]
    },
    {
        brand: "Suzuki",
        models: ["Swift", "Vitara", "Jimny"]
    },
    {
        brand: "Renault",
        models: ["Clio", "Megane", "Kangoo"]
    }
];

const resultBox = document.querySelector(".results"); //Resultados de búsqueda
const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
const carImage = document.getElementById("carImage");

const carImages = {
    Spark: "../images/spark.png",
    Aveo: "../images/aveo.png",
    Camaro: "../images/camaro.png",
    Swift: "../images/swift.png",
    Vitara: "../images/vitara.png",
    Jimny: "../images/jimny.png",
    Clio: "../images/clio.png",
    Megane: "../images/megane.png",
    Kangoo: "../images/kangoo.png",
};
//Representa resultados de búsqueda
const displayResults = function (results) { 
    const resultHTML = results.map(item => `<li onclick="selectInput(this)">${item}</li>`).join("");
    resultBox.innerHTML = `<ul>${resultHTML}</ul>`;
};
// Detecta la pulsación sobre la barra de búsqueda
inputBox.onkeyup = function () {
    let results = [];
    const input = inputBox.value.toLowerCase();

    if (input.length === 0) {
        resultBox.innerHTML = "";
        return;
    }

    SearchList.forEach(car => {
        if (car.brand.toLowerCase().includes(input)) {
            results.push(car.brand);
        }

        car.models.forEach(model => {
            if (model.toLowerCase().includes(input)) {
                results.push(model);
            }
        });
    });

    displayResults(results);
};
//Cuando el usuario hace clic sobre el elemento de música
function selectInput(item) {
    const selected = item.innerText;
    inputBox.value = selected;
    resultBox.innerHTML = "";

    if (carImages[selected]) {
        carImage.src = `images/${carImages[selected]}`;
        carImage.style.display = "block";
    } else {
        carImage.style.display = "none";
    }
}
