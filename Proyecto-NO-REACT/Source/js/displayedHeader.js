let show = "none";

const displayer = document.getElementById("displayer");

let getData = sessionStorage.getItem("user");
let getDataToJson
if (getData == null) {
    getDataToJson = {
        user: "Inicie sesión",
        password: "Inicie sesión"
    }
} else {
    getDataToJson = JSON.parse(getData);
}

function userTrig() {
    if (show === "user") {
        displayer.innerHTML = '';
        show = "none";
    } else if (show != "user") {
        if (getData != null) {
            displayer.innerHTML = '<nav class="usernav"><div class="usernav-datazone"><p class="usernav-username">'+getDataToJson.user+'</p><i class="fa-solid fa-x usernav-close" onclick="userTrig()"></i></div><a href="" class="usernav-presetText">Configuración <i class="fa-solid fa-gear"></i></a><a href="./loginV4.1.html" class="usernav-presetText">Cerrar sesión <i class="fa-solid fa-right-from-bracket"></i></a></nav>';
        } else {
            displayer.innerHTML = '<nav class="usernav"><div class="usernav-datazone"><a href="./loginV4.1.html" class="usernav-username" style="color: black;">'+getDataToJson.user+'</a><i class="fa-solid fa-x usernav-close" onclick="userTrig()"></i></div></nav>';
        }
        show = "user";
    }
}

function userTrigIndex() {
    if (show === "user") {
        displayer.innerHTML = '';
        show = "none";
    } else if (show != "user") {
        if (getData != null) {
            displayer.innerHTML = '<nav class="usernav"><div class="usernav-datazone"><p class="usernav-username">'+getDataToJson.user+'</p><i class="fa-solid fa-x usernav-close" onclick="userTrig()"></i></div><a href="" class="usernav-presetText">Configuración <i class="fa-solid fa-gear"></i></a><a href="./pages/loginV4.1.html" class="usernav-presetText">Cerrar sesión <i class="fa-solid fa-right-from-bracket"></i></a></nav>';
        } else {
            displayer.innerHTML = '<nav class="usernav"><div class="usernav-datazone"><a href="./pages/loginV4.1.html" class="usernav-username" style="color: black;">'+getDataToJson.user+'</a><i class="fa-solid fa-x usernav-close" onclick="userTrig()"></i></div></nav>';
        }
        show = "user";
    }
}

function chatTrig() { //Chat NO ESTA
    if (show === "chat") {
        displayer.innerHTML = '';
        show = "none";
    } else if (show != "chat") {
        displayer.innerHTML = '<nav class="chatnav"><div class="usernav-datazone"><p class="usernav-username">Benjamin Bastan</p><i class="fa-solid fa-x usernav-close" onclick="userTrig()"></i></div><a href="" class="usernav-presetText">Configuración <i class="fa-solid fa-gear"></i></a><a href="./pages/loginV4.html" class="usernav-presetText">Cerrar sesión <i class="fa-solid fa-right-from-bracket"></i></a></nav>';
        show = "chat";
    }
}

function notifTrig() { //Notificaciones
    if (show === "notif") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<nav class="notifnav"><div class="extranav-topzone"><p class="extranav-title">Notificaciones</p><i class="fa-solid fa-x extranav-close" onclick="notifTrig()"></i></div><div class="notifnav-notifs"><div class="notifnav-notifs-notif"><i class="fa-solid fa-check"></i><a href="#">La tarea se ha entregado con éxito</a></div><div class="notifnav-notifs-notif"><i class="fa-solid fa-lightbulb"></i><a href="#">Tienes tareas pendientes</a></div></div></nav>';
        show = "notif";
    }
}

function markedTrig() { //Cosas de valor guardadas dentro de la plataforma (Como msj fijado) NO ESTA
    if (show === "marked") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<nav class="chatnav"><div class="usernav-datazone"><p class="usernav-username">Benjamin Bastan</p><i class="fa-solid fa-x usernav-close" onclick="userTrig()"></i></div><a href="" class="usernav-presetText">Configuración <i class="fa-solid fa-gear"></i></a><a href="./pages/loginV4.html" class="usernav-presetText">Cerrar sesión <i class="fa-solid fa-right-from-bracket"></i></a></nav>';
        show = "marked";
    }
}

function calendarTrig() { //Calendario con actividades próximas NO ESTA, TAL VEZ ELIMINAR
    if (show === "calendar") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<nav class="chatnav"><div class="usernav-datazone"><p class="usernav-username">Benjamin Bastan</p><i class="fa-solid fa-x usernav-close" onclick="userTrig()"></i></div><a href="" class="usernav-presetText">Configuración <i class="fa-solid fa-gear"></i></a><a href="./pages/loginV4.html" class="usernav-presetText">Cerrar sesión <i class="fa-solid fa-right-from-bracket"></i></a></nav><a href="https://www.sliderrevolution.com/resources/html-calendar/">Ejemplo para "inspirarse"</a>';
        show = "calendar";
    }
}

function notesTrig() { //Notas personales ESTA A MEDIAS, FALTA CREAR Y BORRAR
    if (show === "notes") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<nav class="notenav"><div class="extranav-topzone"><p class="extranav-title">Notas</p><i class="fa-solid fa-x extranav-close" onclick="notesTrig()"></i></div><hr><div id="notenav-notes"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ducimus?</p><hr><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iusto.</p><hr><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, error.</p><hr></div><button id="notenav-add" onclick="addNote()">Añadir nota</button></nav>'
        show = "notes";
    }
}

function folderTrig() { //La idea es almacenar archivos propios acá NO ESTA
    if (show === "folder") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<nav class="chatnav"><div class="usernav-datazone"><p class="usernav-username">Benjamin Bastan</p><i class="fa-solid fa-x usernav-close" onclick="userTrig()"></i></div><a href="" class="usernav-presetText">Configuración <i class="fa-solid fa-gear"></i></a><a href="./pages/loginV4.html" class="usernav-presetText">Cerrar sesión <i class="fa-solid fa-right-from-bracket"></i></a></nav>';
        show = "folder";
    }
}

function addNote() {
    displayer.innerHTML += '<div id="newNote"><center><h3 class="newNote-title">Nueva nota</h3></center><hr><input type="text" id="newNote-input" maxlength="50" placeholder="Finalizar tarea de programacion"><div class="newNote-divButtons"><button onclick="saveNewNote()" style="background-color: rgb(83, 184, 81);">Guardar</button><button onclick="cancelNewNote()" style="background-color: #FF9950;">Cancelar</button></div></div>'
}

function saveNewNote() {
    var newNote = document.getElementById("newNote-input").value;
    var newNoteSect = document.getElementById("newNote");
    displayer.removeChild(newNoteSect);
    document.getElementById("notenav-notes").innerHTML += newNote;
    document.getElementById("notenav-notes").innerHTML += "<hr>";
}

function cancelNewNote() {
    var newNoteSect = document.getElementById("newNote");
    displayer.removeChild(newNoteSect);
}

function modifyHeaderSquare() {
    displayer.innerHTML = '<div id="modificable-input-zone"><center><h3 class="newNote-title">Modificar zona superior</h3></center><hr><input type="text" id="newNote-input" placeholder="Finalizar tarea de programacion"><div class="newNote-divButtons"><button onclick="saveNewNote()" style="background-color: rgb(0, 179, 0);">Guardar</button><button onclick="cancelNewNote()" style="background-color: rgb(239, 0, 0);">Cancelar</button></div></div>';
    let texto = prompt("Ingrese un texto");
    if (texto.length > 0) {
        document.getElementById("modificable-texto").innerHTML = texto;
    }
}