const precio = 1650.00;
let contador = 0;
let color;

document.getElementById("precio").innerHTML = precio.toFixed(2);




// btnAumentar.addEventListener("click", () => {
//     console.log("me diste click");
//     color = "black";
//     span.textContent = contador;
// })

// btnDisminuir.addEventListener("click", () => {
//     if(contador > 0){
//         console.log("me diste click");
//         contador--;
//         span.textContent = contador;
//     }
// })

function blanco(){
    colorSeleccionado.style.background="white";
}

function rojo(){
    colorSeleccionado.style.background="red";
}

function negro(){
    colorSeleccionado.style.background="black";
}

function gris(){
    colorSeleccionado.style.background="gray";
}

function calcular() {
    console.log("calculando...")

    // Buscamos el input
    cantidad = document.querySelector("#cantidad");

    document.getElementById("cantidad-total").innerHTML = cantidad.value; 

    // Acceder al valor del input
    console.log(cantidad.value * precio);
    document.getElementById("total").innerHTML = cantidad.value * precio.toFixed(5); 
}