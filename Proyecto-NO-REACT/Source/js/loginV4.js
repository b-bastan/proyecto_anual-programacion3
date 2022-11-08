let contLog = document.getElementById("cont_log");
let contReg = document.getElementById("cont_reg");

// const usuario = 1234;
// const password = 1234;

function iniciarSesion() {
    let userNameLogin = document.getElementById("login_user").value;
    let passwordLogin = document.getElementById("login_password").value;
    // if (userNameLogin == usuario && passwordLogin == password){
    //     window.location.replace("/index.html");
    //     //window.location.href = "http://127.0.0.1:5501/index.html";
    // } else {
    //     alert("El usuario y/o contraseña no es válido");
    // }
    const user = {
        user: userNameLogin,
        password: passwordLogin
    };

    let userToJson = JSON.stringify(user);
    sessionStorage.setItem("user", userToJson);

    window.location.href = "http://127.0.0.1:5500/index.html";
}

function registrarse() {
    contLog.style.display="none";
    contReg.style.display="flex";
}

function login() {
    contLog.style.display="flex";
    contReg.style.display="none";
}