let elementos = document.querySelector("div");
let button = document.getElementById("buttonTheme");

button.addEventListener(() =>{
    elementos.classList.toggle("dark");
});