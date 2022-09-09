console.log("Hello word");
//Seleccionamos los elemetos que queremos capturar del html
const h1 = document.querySelector("h1");
const pclass = document.getElementsByClassName("pclass");
const pid = document.getElementById("pid");
const input = document.querySelector("input");
//Me imprime el valor que posee el input, lo que el usuario ingresa

//Imprime los datos que poseen los selectores
console.log({
  h1,
  pclass,
  pid,
  input,
});

// h1.innerHTML = "Nuevo <br/> título"
h1.innerText = "Nuevo Título";

h1.setAttribute("class", "rojo");
h1.classList.add("azul");
h1.classList.remove("gris");
console.log(h1.getAttribute("class"));

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://i.pinimg.com/564x/05/66/43/0566436a771c131cfebaadc3dfe2cc58.jpg"
);

pid.innerText = "";
pid.append(img);
