let elementos = document.querySelector("div");
let button = document.getElementById("buttonTheme");

button.addEventListener("click", () =>{
    elementos.classList.toggle("dark");
});