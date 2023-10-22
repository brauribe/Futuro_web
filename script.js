alert("Hola Este Es Mi Primer Script");

//FUNCIONES//

let nombre = "Bryam";
let ciudad = "Paris";
let profesion = "Ingeniero";

let parrafo = document.querySelector(".Parrafo2");

function cambiarTexto(nombre,ciudad,profesion){

let contenido = `Me Llamo ${nombre}, Naci En Colombia Exactamente en la cuidad de
${ciudad} en el año 1997, Soy ${profesion} de la universidad Santiago De Cali. Tengo diplomados y cursos sobre`;

return contenido;
}
parrafo.innerText = cambiarTexto(nombre,ciudad,profesion);


let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
