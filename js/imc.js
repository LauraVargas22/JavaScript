/*Calcular El Indice de Masa Corporal*/
document.getElementById('imcForm').addEventListener('submit', function (e) { e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');

    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
        const imc = weight / (height ** 2);
        let message =`Sr Usuario ${name}, de ${age} años. Tu IMC es ${imc.toFixed(2)}, lo cual corresponde a  `;
        let image = "";
        
        if (imc < 18.5) {
            message += "<strong>Su IMC corresponde a BAJO PESO</strong>.";
            image = "<img src='../images/caso1.png' alt='Bajo Peso' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        } else if (imc >= 18.5 && imc <= 24.9){
            message += "<strong>Su IMC corresponde a PESO NORMAL</strong>.";
            image = "<img src='../images/caso2.png' alt='Peso Normal' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        } else if (imc >= 25 && imc <= 29.9) {
            message += "<strong>Su IMC corresponde a SOBREPESO</strong>.";
            image = "<img src='../images/caso3.png' alt='Sobrepeso' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        } else {
            message += "<strong>Su IMC corresponde a OBESIDAD</strong>.";
            image = "<img src='../images/caso4.png' alt='Obesidad' style='max-width: 100%; height: auto; margin-top: 10px;'>";
        }

        resultDiv.innerHTML = message + image;
        resultDiv.style.display = 'block';    
    } else {
        resultDiv.innerHTML = "Los valores ingresados son inválidos";
        resultDiv.style.display = 'block';
    }
});
