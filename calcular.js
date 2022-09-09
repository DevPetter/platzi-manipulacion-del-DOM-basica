//Seleccionar elementos
const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.getElementById("resultado");

//AddEventListener lo utilizamos para escuchar los eventos que sucedan en el selector nombrado, cabe aclarar que este recibe el nombre del evento y la referencia al callback
form.addEventListener("submit", sumarInput);

function sumarInput(event) {
    console.log({event})
    //hacemos esto para que no se borre la información al hacer click en el boton
    event.preventDefault();
  //El simbolo más convierte el dato en entero
  const suma = +input1.value + +input2.value;
  resultado.innerText = "Resultado de la suma es: " + suma;
}
