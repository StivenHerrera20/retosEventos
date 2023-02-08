const capa = document.querySelector("#btnCapa");
const fondo = document.querySelector("#btnFondo");
const capaCambiar = document.querySelector("#capaCambiar");
const color = document.querySelector("#color");

capa.addEventListener("click", () => {
  capaCambiar.setAttribute("style", "background-color:" + color.value + ";");
});
fondo.addEventListener("click", () => {
  document.body.setAttribute("style", "background-color:" + color.value + ";");
});
