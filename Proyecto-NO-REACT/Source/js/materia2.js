const diagTrig = document.getElementById("trigger_Diag");
const eje1Trig = document.getElementById("trigger_Eje1");
const eje2Trig = document.getElementById("trigger_Eje2");
const trabajosTrig = document.getElementById("trigger_Trabajos");

const diagSect = document.getElementById("diagnostico");
const eje1Sect = document.getElementById("eje1");
const eje2Sect = document.getElementById("eje2");
const trabajosSect = document.getElementById("trabajos");
const inactive = document.getElementById('inactive');

function cerrarTareaForz() {
    document.getElementById('tarea_modal').classList.remove('show'); 
    document.getElementById('main').classList.remove('blur');
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

/* FUNCIONES DE PAGINAS */

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

/* FUNCIONES AUXILIARES */

function remove(objetivo) {
    objetivo.classList.remove("animate__fadeInLeftBig");
    objetivo.classList.remove("animate__fadeInRightBig");
}

function controleSection(before, then, entry, leave) { // IF NOT INCLUDED
    then.classList.add(entry);
    before.classList.add(leave);
    before.style.position = "fixed";
    before.style.marginTop = "80px";
    before.style.top = "42px";

    setTimeout(() => {
        before.style.display = "none";
        then.classList.remove(entry);
        before.classList.remove(leave);
        before.style.position = "relative";
        before.style.marginTop = "";
        before.style.top = "";

        if (diagSect.style.display != "block" && eje1Sect.style.display != "block" && eje2Sect.style.display != "block" && trabajosSect.style.display != "block") {
            inactive.style.display = "block";
        }
    }, 450)
    
}

/* EVENT LISTENERS */

diagTrig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    diagSect.style.display = "block";

    if (eje1Sect.style.display == "block") {
        controleSection(eje1Sect, diagSect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig');
    } else if (eje2Sect.style.display == "block") {
        controleSection(eje2Sect, diagSect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig')
    } else if (trabajosSect.style.display == "block") {
        controleSection(trabajosSect, diagSect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig');
    }

}, false);

eje1Trig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    eje1Sect.style.display = "block";

    if (diagSect.style.display == "block") {
        controleSection(diagSect, eje1Sect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig');
    } else if (eje2Sect.style.display == "block") {
        controleSection(eje2Sect, eje1Sect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig')
    } else if (trabajosSect.style.display == "block") {
        controleSection(trabajosSect, eje1Sect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig');
    }
    
    cerrarTareaForz();
}, false);

eje2Trig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    eje2Sect.style.display = "block";

    if (diagSect.style.display == "block") {
        controleSection(diagSect, eje2Sect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig');
    } else if (eje1Sect.style.display == "block") {
        controleSection(eje1Sect, eje2Sect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig')
    } else if (trabajosSect.style.display == "block") {
        controleSection(trabajosSect, eje2Sect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig');
    }

    cerrarTareaForz();
});

trabajosTrig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    trabajosSect.style.display = "block";

    if (diagSect.style.display == "block") {
        controleSection(diagSect, trabajosSect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig');
    } else if (eje1Sect.style.display == "block") {
        controleSection(eje1Sect, trabajosSect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig')
    } else if (eje2Sect.style.display == "block") {
        controleSection(eje2Sect, trabajosSect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig');
    }

    cerrarTareaForz();
}); 

