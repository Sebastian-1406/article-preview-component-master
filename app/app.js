let boton = document.getElementById("share");
let caja = document.querySelector(".contenedor-texto");



boton.addEventListener("click", () => {
    
    caja.classList.toggle("active")
})