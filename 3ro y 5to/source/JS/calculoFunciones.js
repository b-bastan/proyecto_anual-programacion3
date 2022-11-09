// VARIABLES GLOBALES

let tipoTiro = 0;

const inputsZone = document.getElementById("input-inputs");
const indiceZone = document.getElementById("indice-botones");

// FUNCIONES DE DEFINICION DE TIPO TIRO

function tiroVertical() {
    document.getElementById("height-angle-p").innerHTML = 'Altura incial <span>(En metros)</span>';
    document.getElementById("function-type").innerHTML = 'tiro vertical';
    Swal.fire({
        icon: 'success',
        title: 'Hemos cambiado la función',
        showConfirmButton: false,
        timer: 1000
    })
    tipoTiro = 0;
    console.log(tipoTiro);
    hideHalfResult("return-0", "return-1", "return-2", "return-3", "return-4")
}

function caidaLibre() {
    document.getElementById("height-angle-p").innerHTML = 'Altura incial <span>(En metros)</span>';
    document.getElementById("function-type").innerHTML = 'caída libre';
    Swal.fire({
        icon: 'success',
        title: 'Hemos cambiado la función',
        showConfirmButton: false,
        timer: 1000
    })
    tipoTiro = 1;
    console.log(tipoTiro);
    hideHalfResult("return-2", "return-3", "return-0", "return-1", "return-4");
}

function tiroOblicuo() {
    document.getElementById("height-angle-p").innerHTML = 'Ángulo de lanzamiento <span>(En grados)</span>';
    document.getElementById("function-type").innerHTML = 'tiro oblicuo';
    Swal.fire({
        icon: 'success',
        title: 'Hemos cambiado la función',
        showConfirmButton: false,
        timer: 1000
    })
    tipoTiro = 2;
    console.log(tipoTiro);
    showAllResults();
}

function tiroHorizontal() {
    document.getElementById("height-angle-p").innerHTML = 'Altura incial <span>(En metros)</span>';
    document.getElementById("function-type").innerHTML = 'tiro horizontal';
    Swal.fire({
        icon: 'success',
        title: 'Hemos cambiado la función',
        showConfirmButton: false,
        timer: 1000
    })
    tipoTiro = 3;
    console.log(tipoTiro);
    hideHalfResult("return-2", "return-4", "return-0", "return-1", "return-3");
}

// FUNCIONES DE RESOLUCION DE EJERCICIO

function resolveFunction() {
    let speed = document.getElementById("init-Speed").value;
    let heightOrAngle = document.getElementById("height-Angle").value;
    let valid = true;

    if (speed.length == 0 || heightOrAngle.length == 0) {
        valid = false;
    } else if (tipoTiro == 2 && heightOrAngle >= 180 || heightOrAngle <= 0 && tipoTiro == 2) {
        valid = false;
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El angulo no es valido',
        })
    } else if (speed < 0 || heightOrAngle < 0) {
        valid = false;
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los datos no son validos',
        })
    }

    if (valid) {
        if (tipoTiro == 0) {
            calcTiroVertic();
            
        } else if (tipoTiro == 1) {
            calcCaidaLibre();
            
        } else if (tipoTiro == 2) {
            calcTiroOblicu();
            
        } else if (tipoTiro == 3) {
            calcTiroHorizo();
            
        }
    }
}

function calcTiroVertic() {
    let speed = document.getElementById("init-Speed").value;
    let heightOrAngle = document.getElementById("height-Angle").value;

    let tiempoMax = speed / 9.8;
    // let altMax = heightOrAngle + (speed * tiempoMax) + (4.9 * tiempoMax**2); FORMULA ORIGINAL QUE HAY EN PYTHON

    let preAltMax = (speed**2)/19.6;
    let altMax = parseFloat(heightOrAngle) + preAltMax;

    console.log("Tiempo: " + tiempoMax);
    console.log("Altura: " + altMax);

    document.getElementById("return-0").innerHTML = altMax.toFixed(2) + " mts";
    document.getElementById("return-1").innerHTML = tiempoMax.toFixed(2) + " seg";
}

function calcCaidaLibre() {
    let speed = parseFloat(document.getElementById("init-Speed").value);
    let heightOrAngle = parseFloat(document.getElementById("height-Angle").value);

    let tiempo = (-speed - (((speed**2) + (17.6 * heightOrAngle))**(1/2))) / -9.8

    let velMax = tiempo * (-9.8) - speed

    document.getElementById("return-2").innerHTML = tiempo.toFixed(2) + " seg";
    document.getElementById("return-3").innerHTML = velMax.toFixed(2) + " mts/seg";
}

function calcTiroOblicu() {
    let speed = document.getElementById("init-Speed").value;
    let heightOrAngle = document.getElementById("height-Angle").value;

    const angleToRadians = heightOrAngle * Math.PI / 180;
    let velX = speed * Math.cos(angleToRadians);
    let velY = speed * Math.sin(angleToRadians);
    let tiempoMax = velY / 9.8;
    let tiempoTot = tiempoMax * 2;
    let distanciaX = velX * tiempoTot;
    let altMax = velY * tiempoMax + (1/2) * (-9.8) * tiempoMax**2

    document.getElementById("return-0").innerHTML = altMax.toFixed(2) + " mts";
    document.getElementById("return-1").innerHTML = tiempoMax.toFixed(2) + " seg";
    document.getElementById("return-2").innerHTML = tiempoTot.toFixed(2) + " seg";
    document.getElementById("return-4").innerHTML = distanciaX.toFixed(2) + " mts";
}

function calcTiroHorizo() {
    let speed = document.getElementById("init-Speed").value;
    let heightOrAngle = document.getElementById("height-Angle").value;
    
    let tiempoCaida = (heightOrAngle / 4.9)**(1/2);
    let distancia = speed * tiempoCaida;

    document.getElementById("return-2").innerHTML = tiempoCaida.toFixed(2) + " seg";
    document.getElementById("return-4").innerHTML = distancia.toFixed(2) + " mts";
}

// FUNCIONES DE DISPLAY DE RESOLUCION

function showAllResults() {
    document.getElementsByClassName("return-0")[0].style.display = "flex";
    document.getElementsByClassName("return-1")[0].style.display = "flex";
    document.getElementsByClassName("return-2")[0].style.display = "flex";
    document.getElementsByClassName("return-4")[0].style.display = "flex";

    document.getElementsByClassName("return-0")[1].style.display = "flex";
    document.getElementsByClassName("return-1")[1].style.display = "flex";
    document.getElementsByClassName("return-2")[1].style.display = "flex";
    document.getElementsByClassName("return-4")[1].style.display = "flex";

    document.getElementsByClassName("return-3")[0].style.display = "none";
    document.getElementsByClassName("return-3")[1].style.display = "none";

    document.getElementById("graph-zone").style.height = "50%";

    clsDivs()
}

function hideHalfResult(show1, show2, hide1, hide2, hide3) {
    document.getElementsByClassName(show1)[0].style.display = "flex";
    document.getElementsByClassName(show2)[0].style.display = "flex";

    document.getElementsByClassName(show1)[1].style.display = "flex";
    document.getElementsByClassName(show2)[1].style.display = "flex";

    document.getElementsByClassName(hide1)[0].style.display = "none";
    document.getElementsByClassName(hide2)[0].style.display = "none";
    document.getElementsByClassName(hide3)[0].style.display = "none";

    document.getElementsByClassName(hide1)[1].style.display = "none";
    document.getElementsByClassName(hide2)[1].style.display = "none";
    document.getElementsByClassName(hide3)[1].style.display = "none";

    document.getElementById("graph-zone").style.height = "70%";

    clsDivs();
}

function clsDivs() {
    document.getElementById("return-0").innerHTML = "";
    document.getElementById("return-1").innerHTML = "";
    document.getElementById("return-2").innerHTML = "";
    document.getElementById("return-3").innerHTML = "";
    document.getElementById("return-4").innerHTML = "";
}

function displayFuncTypes() {
    if (screen.width <= 481) {
        if (indiceZone.style.display == "flex") {
            indiceZone.style.display = "none";
            indiceZone.style.height = "0px";
        } else {
            indiceZone.style.display = "flex";
            indiceZone.style.height = "fit-content";
        }
    } else {
        indiceZone.style.display = "flex";
        indiceZone.style.height = "80%";
    }
}

function displayInputs() {
    if (screen.width <= 481) {
        if (inputsZone.style.display == "flex") {
            inputsZone.style.display = "none";
            inputsZone.style.height = "0px";
        } else {
            inputsZone.style.display = "flex";
            inputsZone.style.height = "fit-content";
        }
    } else {
        inputsZone.style.display = "block";
        inputsZone.style.height = "80%";
    }
}