/*Calcular El Indice de Masa Corporal*/

console.log('Calcular Indice de Masa Corporal');

let user = prompt('Ingrese su nombre: ');
let age = prompt(`Sr Usuario ${user} ingrese su edad: `);

let weight = prompt(`${user}, ingrese su peso en kilogramos: `);
let height = prompt(`${user}, ingrese su altura en metros: `);

console.log(`Sr Usuario ${user} de ${age} años, un peso de ${weight} y una altura de ${height}`);

if ((typeof(Number(weight)) == 'number') && (typeof(Number(height)) == 'number')) {
    imc = (weight/height**2);
    if (imc < 18.5) {
        alert('Su IMC corresponde a BAJO PESO');
    } else if (imc > 18.5 && imc <= 24.9){
        alert('Su IMC corresponde a peso NORMAL');
    } else if (imc > 25 && imc >= 29.9) {
        alert('Su IMC corresponde a SOBREPESO');
    } else {
        alert('Su IMC corresponde a OBESIDAD')
    }
} else {
    console.log('Error en los datos ingresados');
}