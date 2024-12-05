let year = Number (prompt('¿Ingrese el año de su graduaciòn?'));

if (typeof(Number(year)) == 'number') {
    alert(`El dato ingresado es ${year} ${typeof year}`); 
} else {
    console.error(`El dato ingresado ${year} es incorrecto`);
}
let confirmData = confirm("¿Estàs seguro de regresar al menù principal?");
if (confirmData) {
    console.log("Si");
} else {
    console.log("No");
}
