let diagTrig = document.getElementById("trigger_Diag");
let eje1Trig = document.getElementById("trigger_Eje1");
let eje2Trig = document.getElementById("trigger_Eje2");
let trabajosTrig = document.getElementById("trigger_Trabajos");

let diagSect = document.getElementById("diagnostico");
let eje1Sect = document.getElementById("eje1");
let eje2Sect = document.getElementById("eje2");
let trabajosSect = document.getElementById("trabajos");


/* function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
} */

function hiddenSect (inactive1, inactive2, inactive3) {
    inactive1.style.display = "none";
    inactive2.style.display = "none";
    inactive3.style.display = "none";
}

diagTrig.addEventListener("mouseover", (event) => {
    diagSect.style.display = "block";
    hiddenSect (eje1Sect, eje2Sect, trabajosSect);
}, false);

eje1Trig.addEventListener("mouseover", (event) => {
    eje1Sect.style.display = "block";
    hiddenSect (diagSect, eje2Sect, trabajosSect);
}, false);

eje2Trig.addEventListener("mouseover", (event) => {
    eje2Sect.style.display = "block";
    hiddenSect (diagSect, eje1Sect, trabajosSect);
});

trabajosTrig.addEventListener("mouseover", (event) => {
    trabajosSect.style.display = "block";
    hiddenSect (diagSect, eje1Sect, eje2Sect);
}); 

function displayTarea() {
    let modal = document.getElementById("tarea_modal");
    modal.classList.add('show');
    document.getElementById("main").classList.add("blur");
}

function cerrar() {
    let modal = document.getElementById("tarea_modal");
    modal.classList.remove('show');
    document.getElementById("main").classList.remove("blur");
}

function controlePagina() {
    let pagina = document.getElementById('pagina_dropdown');
    let arrow = document.getElementsByClassName('fa-angle-right');
    if (pagina.classList.contains("show")) {
        pagina.classList.remove('show');
        arrow[0].classList.add('rotado');
    } else {
        pagina.classList.add('show');
    }
}

function buttoncheck() {
    let check =  document.getElementById("checkbox");
    if (check.value == "undone") {
        check.style.backgroundColor = "rgb(0, 179, 0)";
        check.value = "done";
        check.innerHTML = "Hecho";
    } else {
        check.style.backgroundColor = "var(--MY-gray-lighter)";
        check.value = "undone";
        check.innerHTML = "Marcar como hecha";
    }
}
