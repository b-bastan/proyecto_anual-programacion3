
///////////////////////////////////////////////////////ANTES////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////ANTES////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////ANTES////////////////////////////////////////////////////////////////////////////

diagTrig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    diagSect.style.display = "block";

    if (eje1Sect.style.display == "block" || eje2Sect.style.display == "block" || trabajosSect.style.display == "block") {
        hiddenSect (eje1Sect, eje2Sect, trabajosSect, -1, diagSect);
        diagSect.style.display = "block";
    }
    /* cerrarTareaForz()*/
}, false);

function hiddenSect (inactive1, inactive2, inactive3, direction, using) { //Quita display a los 3 inactivos, según dirección aplica animación
    inactive1.style.display = "none";
    remove(inactive1);
    inactive2.style.display = "none";
    remove(inactive2);
    inactive3.style.display = "none";
    remove(inactive3);
    inactive.style.display = "none";
    if (direction == -1) {
        using.classList.add("animate__fadeInLeftBig");
    } else if (direction == 1) {
        using.classList.add("animate__fadeInRightBig");
    }
}

///////////////////////////////////////////////////////AHORA////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////AHORA////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////AHORA////////////////////////////////////////////////////////////////////////////

diagTrig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    diagSect.style.display = "block";
    if (eje1Sect.style.display == "block") { //desaparece hacia derecha
        diagSect.classList.add('animate__fadeInLeftBig');
        eje1Sect.classList.add('animate__fadeOutRightBig');
        eje1Sect.style.position = "fixed";
        eje1Sect.style.marginTop = "80px";
        setTimeout(() => {
            eje1Sect.style.display = "none";
            diagSect.classList.remove('animate__fadeInLeftBig');
            eje1Sect.classList.remove('animate__fadeOutRightBig');
        }, 500)
    } else if (eje2Sect.style.display == "block") { //desaparece hacia derecha
        diagTrig.classList.add('animate__fadeInLeftBig');
        eje2Sect.classList.add('animate__fadeOutRightBig');
        eje2Sect.style.position = "fixed";
        eje2Sect.style.marginTop = "80px";
        setTimeout(() => {
            eje2Sect.style.display = "none";
            diagSect.classList.remove('animate__fadeInLeftBig');
            eje2Sect.classList.remove('animate__fadeOutRightBig');
        }, 500)
    } else if (trabajosSect.style.display == "block") { //desaparece hacia derecha
        diagSect.classList.add('animate__fadeInLeftBig');
        trabajosSect.classList.add('animate__fadeOutRightBig');
        eje2Sect.style.position = "fixed";
        eje2Sect.style.marginTop = "80px";
        setTimeout(() => {
            trabajosSect.style.display = "none";
            diagSect.classList.remove('animate__fadeInLeftBig');
            trabajosSect.classList.remove('animate__fadeOutRightBig');
        }, 500)
    }
}, false);

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
        }, 450)
    }
}, false);