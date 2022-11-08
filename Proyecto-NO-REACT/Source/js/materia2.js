let diagTrig = document.getElementById("trigger_Diag");
let eje1Trig = document.getElementById("trigger_Eje1");
let eje2Trig = document.getElementById("trigger_Eje2");
let trabajosTrig = document.getElementById("trigger_Trabajos");

let diagSect = document.getElementById("diagnostico");
let eje1Sect = document.getElementById("eje1");
let eje2Sect = document.getElementById("eje2");
let trabajosSect = document.getElementById("trabajos");
const inactive = document.getElementById('inactive');

// OUTS: animate__fadeOutRightBig animate__fadeOutLeftBig

/* function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
} */

/* function flyAway() {
    objetivo.classList.add("animacion");
    setTimeout(()=> {
        objetivo.classList.remove("animacion2");
        objetivo.style.display = "none";
    }, 1000)
} */

diagTrig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    diagSect.style.display = "block";
    if (eje1Sect.style.display == "block") { //desaparece hacia derecha
        diagSect.classList.add('animate__fadeInLeftBig');
        eje1Sect.classList.add('animate__fadeOutRightBig');
        eje1Sect.style.position = "fixed";
        eje1Sect.style.marginTop = "80px";
        eje1Sect.style.top = "42px";
        setTimeout(() => {
            eje1Sect.style.display = "none";
            diagSect.classList.remove('animate__fadeInLeftBig');
            eje1Sect.classList.remove('animate__fadeOutRightBig');
            eje1Sect.style.position = "relative";
            eje1Sect.style.marginTop = "";
            eje1Sect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    } else if (eje2Sect.style.display == "block") { //desaparece hacia derecha
        diagSect.classList.add('animate__fadeInLeftBig');
        eje2Sect.classList.add('animate__fadeOutRightBig');
        eje2Sect.style.position = "fixed";
        eje2Sect.style.marginTop = "80px";
        eje2Sect.style.top = "42px";
        setTimeout(() => {
            eje2Sect.style.display = "none";
            diagSect.classList.remove('animate__fadeInLeftBig');
            eje2Sect.classList.remove('animate__fadeOutRightBig');
            eje2Sect.style.position = "relative";
            eje2Sect.style.marginTop = "";
            eje2Sect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    } else if (trabajosSect.style.display == "block") { //desaparece hacia derecha
        diagSect.classList.add('animate__fadeInLeftBig');
        trabajosSect.classList.add('animate__fadeOutRightBig');
        trabajosSect.style.position = "fixed";
        trabajosSect.style.marginTop = "80px";
        trabajosSect.style.top = "42px";
        setTimeout(() => {
            trabajosSect.style.display = "none";
            diagSect.classList.remove('animate__fadeInLeftBig');
            trabajosSect.classList.remove('animate__fadeOutRightBig');
            trabajosSect.style.position = "relative";
            trabajosSect.style.marginTop = "";
            trabajosSect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    }
}, false);

eje1Trig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    eje1Sect.style.display = "block";

    if (eje2Sect.style.display == "block") { //desaparece hacia derecha
        eje1Sect.classList.add('animate__fadeInLeftBig');
        eje2Sect.classList.add('animate__fadeOutRightBig');
        eje2Sect.style.position = "fixed";
        eje2Sect.style.marginTop = "80px";
        eje2Sect.style.top = "42px";
        setTimeout(() => {
            eje2Sect.style.display = "none";
            eje1Sect.classList.remove('animate__fadeInLeftBig');
            eje2Sect.classList.remove('animate__fadeOutRightBig');
            eje2Sect.style.position = "relative";
            eje2Sect.style.marginTop = "";
            eje2Sect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    } else if (trabajosSect.style.display == "block") { //desaparece hacia derecha
        eje1Sect.classList.add('animate__fadeInLeftBig');
        trabajosSect.classList.add('animate__fadeOutRightBig');
        trabajosSect.style.position = "fixed";
        trabajosSect.style.marginTop = "80px";
        trabajosSect.style.top = "42px";
        setTimeout(() => {
            trabajosSect.style.display = "none";
            eje1Sect.classList.remove('animate__fadeInLeftBig');
            trabajosSect.classList.remove('animate__fadeOutRightBig');
            trabajosSect.style.position = "relative";
            trabajosSect.style.marginTop = "";
            trabajosSect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    } else if (diagSect.style.display == "block") { //desaparece hacia izquierda
        eje1Sect.classList.add('animate__fadeInRightBig');
        diagSect.classList.add('animate__fadeOutLeftBig');
        diagSect.style.position = "fixed";
        diagSect.style.marginTop = "80px";
        diagSect.style.top = "42px";
        setTimeout(() => {
            diagSect.style.display = "none";
            eje1Sect.classList.remove('animate__fadeInRightBig');
            diagSect.classList.remove('animate__fadeOutLeftBig');
            diagSect.style.position = "relative";
            diagSect.style.marginTop = "";
            diagSect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    }
    
    cerrarTareaForz()
}, false);

eje2Trig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    eje2Sect.style.display = "block";

    if (trabajosSect.style.display == "block") { //desaparece hacia derecha
        eje2Sect.classList.add('animate__fadeInLeftBig');
        trabajosSect.classList.add('animate__fadeOutRightBig');
        trabajosSect.style.position = "fixed";
        trabajosSect.style.marginTop = "80px";
        trabajosSect.style.top = "42px";
        setTimeout(() => {
            trabajosSect.style.display = "none";
            eje2Sect.classList.remove('animate__fadeInLeftBig');
            trabajosSect.classList.remove('animate__fadeOutRightBig');
            trabajosSect.style.position = "relative";
            trabajosSect.style.marginTop = "";
            trabajosSect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    } else if (eje1Sect.style.display == "block") { //desaparece hacia izquierda
        eje2Sect.classList.add('animate__fadeInRightBig');
        eje1Sect.classList.add('animate__fadeOutLeftBig');
        eje1Sect.style.position = "fixed";
        eje1Sect.style.marginTop = "80px";
        eje1Sect.style.top = "42px";
        setTimeout(() => {
            eje1Sect.style.display = "none";
            eje2Sect.classList.remove('animate__fadeInRightBig');
            eje1Sect.classList.remove('animate__fadeOutLeftBig');
            eje1Sect.style.position = "relative";
            eje1Sect.style.marginTop = "";
            eje1Sect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    } else if (diagSect.style.display == "block") { //desaparece hacia izquierda
        eje2Sect.classList.add('animate__fadeInRightBig');
        diagSect.classList.add('animate__fadeOutLeftBig');
        diagSect.style.position = "fixed";
        diagSect.style.marginTop = "80px";
        diagSect.style.top = "42px";
        setTimeout(() => {
            diagSect.style.display = "none";
            eje2Sect.classList.remove('animate__fadeInRightBig');
            diagSect.classList.remove('animate__fadeOutLeftBig');
            diagSect.style.position = "relative";
            diagSect.style.marginTop = "";
            diagSect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    }

    cerrarTareaForz()
});

trabajosTrig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    trabajosSect.style.display = "block";

    if (eje1Sect.style.display == "block") { //desaparece hacia izquierda
        trabajosSect.classList.add('animate__fadeInRightBig');
        eje1Sect.classList.add('animate__fadeOutLeftBig');
        eje1Sect.style.position = "fixed";
        eje1Sect.style.marginTop = "80px";
        eje1Sect.style.top = "42px";
        setTimeout(() => {
            eje1Sect.style.display = "none";
            trabajosSect.classList.remove('animate__fadeInRightBig');
            eje1Sect.classList.remove('animate__fadeOutLeftBig');
            eje1Sect.style.position = "relative";
            eje1Sect.style.marginTop = "";
            eje1Sect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    } else if (eje2Sect.style.display == "block") { //desaparece hacia izquierda
        trabajosSect.classList.add('animate__fadeInRightBig');
        eje2.classList.add('animate__fadeOutLeftBig');
        eje2.style.position = "fixed";
        eje2.style.marginTop = "80px";
        eje2.style.top = "42px";
        setTimeout(() => {
            eje2Sect.style.display = "none";
            trabajosSect.classList.remove('animate__fadeInRightBig');
            eje2Sect.classList.remove('animate__fadeOutLeftBig');
            eje2Sect.style.position = "relative";
            eje2Sect.style.marginTop = "";
            eje2Sect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    } else if (diagSect.style.display == "block") { //desaparece hacia izquierda
        trabajosSect.classList.add('animate__fadeInRightBig');
        diagSect.classList.add('animate__fadeOutLeftBig');
        diagSect.style.position = "fixed";
        diagSect.style.marginTop = "80px";
        diagSect.style.top = "42px";
        setTimeout(() => {
            diagSect.style.display = "none";
            trabajosSect.classList.remove('animate__fadeInRightBig');
            diagSect.classList.remove('animate__fadeOutLeftBig');
            diagSect.style.position = "relative";
            diagSect.style.marginTop = "";
            diagSect.style.top = "";
            if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
                inactive.style.display = "block";
            }
        }, 450)
    }

    cerrarTareaForz()
}); 

function ejecutarAnimacionDobleIzq() {

}

function ejecutarAnimacionDobleDer() {
    
}

function cerrarTareaForz() {
    document.getElementById('tarea_modal').classList.remove('show'); 
    document.getElementById('main').classList.remove('blur');
}

function remove(objetivo) {
    objetivo.classList.remove("animate__fadeInLeftBig");
    objetivo.classList.remove("animate__fadeInRightBig");
}

function displayTarea(objective) {
    let modal = document.getElementById(objective);
    modal.classList.add('show');
    modal.classList.add('animate__fadeInDownBig');
    //document.getElementById("main").classList.add("blur");
    modal.classList.add('noblur');
}

function cerrar(objective) {
    let modal = document.getElementById(objective);
    modal.classList.remove('animate__fadeInDownBig');
    document.getElementById("main").classList.remove("blur");
    modal.classList.add('animate__fadeOutDownBig');
    setTimeout(() => {
        modal.classList.remove('animate__fadeOutDownBig');
        modal.classList.remove('show');
    }, 1000)
}

function controlePagina(objective) {
    let pagina = document.getElementById(objective);
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