/**/
let show = "Login";

var container = "all";
let toReg = document.getElementById("toReg");
let toLog = document.getElementById("toLog");
let etecLogo = document.getElementById("etecLogo");
const usuario = 1234;
const password = 1234;

function login(){
    let userNameLogin = document.getElementById("userNameLogin").value;
    let passwordLogin = document.getElementById("passwordLogin").value;
    if (userNameLogin == usuario && passwordLogin == password){
        window.location.replace("/index.html");
        //window.location.href = "http://127.0.0.1:5501/index.html";
    } else {
        alert("El usuario y/o contraseña no es válido");
    }
}

/*
if button.clicked = checkdatos{
    if datos bien:
        index
    else:
        ponete bien los datos
}
*/

function change(value){
    alert(value);
    if(value == "1" || value == 1){
        container = "register";
        update();
    }else if (value == "2" || value == 2){
        container = "login";
        update();
    }
    else{
        alert("No está devolviendo nada pelotudo");
        alert("Haceme un favor y aprovecha tu puto balcon")
    }
}

function update(){
    if (container=="login"){
        document.getElementById("logbox").style.display = "block";
        document.getElementById("regbox").style.display = "none";
        etecLogo.style.display = "block";
        etecLogo.style.marginLeft = "950px";
    } else if (container=="register"){
        document.getElementById("regbox").style.display = "block";
        document.getElementById("logbox").style.display = "none";
        etecLogo.style.display = "block";
        etecLogo.style.marginLeft = "450px";
        
    } else if (container=="all") {
        document.getElementById("etecLogo").style.display = "none";
    }
}



let buttonswap = document.getElementsByClassName("swapbox");
let buttonvalue = document.getElementsByClassName("swapbox").buttonvalue;
let logbox = document.getElementById("logbox");
let regbox = document.getElementById("regbox");

function swap(){
    var actualbox = 1;
    buttonvalue.addEvenntListener("click", callback);
    function callback(){
        actualbox = buttonvalue;
        console.log(actualbox);
    }
    if (actualbox=="0"){
        regbox.style.display="none";
        logbox.style.display="block";
    } else if (actualbox=="1"){
        regbox.style.display="block";
        logbox.style.display="none";
    }
}

/*let login = document.getElementById("login");
let register = document.getElementById("register");
register
function hide(){
    register.setAttribute("display", "none");
    register.setAttribute("visibility", "hidden");
    document.getElementById("register").style.display = "none";
}*/



/*if (registercheck.checked){
    register.setAttribute("display", "none");
    register.setAttribute("visibility", "hidden");

    //register.style.display = none;
}*/

///login.style.display = none;