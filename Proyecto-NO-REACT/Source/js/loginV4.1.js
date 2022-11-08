const contImg = document.getElementById("fillZone");
const contReg = document.getElementById("registerZone");
const contLog = document.getElementById("loginZone");

/* FUNCIONES CAMBIO DE SECCION */

function setToLogin() {
    contImg.style.marginLeft = "0vw";
}

function setToRegister() {
    contImg.style.marginLeft = "50vw";
}

/* CREACION DE USUARIOS Y REGISTER */
let getThisItem = localStorage.getItem('userList');
let userList = JSON.parse(getThisItem);
if (userList == null) {
    userList = [{user: "admin", password: "admin", email: "", telefono: "", notas: []}];
}
userListToJSON = JSON.stringify(userList);
localStorage.setItem("userList", userListToJSON);


function createUser() {
    userNameRegis = document.getElementsByClassName("registerInput")[0].value;
    userMailRegis = document.getElementsByClassName("registerInput")[1].value;
    userPassRegis = document.getElementsByClassName("registerInput")[2].value;
    userPas2Regis = document.getElementsByClassName("registerInput")[3].value;
    userPhonRegis = document.getElementsByClassName("registerInput")[4].value;

    let nuevoUsuario = { //Creacion del objeto 
        user: userNameRegis,
        password: userPassRegis,
        email: userMailRegis,
        telefono: userPhonRegis,
        notas: []
    }

    let getThisItem = localStorage.getItem('userList');
    let userList = JSON.parse(getThisItem); //Se recibe el LocalStorage para asegurarse de que existan todos los usuarios
    
    if (userList == null) { //En caso de no haber LS crea usuario admin
        userList = [{user: "admin", password: "admin", email: "", telefono: "", notas: []}];
    }
    
    if (userNameRegis.length != 0 && userMailRegis.length != 0 && userPassRegis.length != 0 && userPas2Regis.length != 0) { //Se verifica que todos los campos necesarios tengan datos
        let continuar = true;

        userList.forEach(element => { //Revisa si ya existen cuentas con esa direccion de mail/usuario
            if (element.user == userNameRegis) {
                continuar = false;
                Swal.fire("Ya existe una cuenta con este nombre de usuario");
            }
            if (element.email == userMailRegis) {
                continuar = false;
                Swal.fire("Ya existe una cuenta con esta direccion de email");
            }
        });

        if (userPassRegis != userPas2Regis) { //Verificacion de contraseñas
            Swal.fire("Las contraseñas no coinciden");
            continuar = false;
        }
        
        if (continuar) { //Si no se detectó ningun error anteriormente
            userList.push(nuevoUsuario);
            userListToJSON = JSON.stringify(userList);
            
            localStorage.setItem("userList", userListToJSON);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se ha creado la cuenta',
                showConfirmButton: false,
                timer: 1500
              })

            setToLogin()
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: 'Por favor, completa todos los campos'
          })
    }
    
}

/* VERIFICACION DE USUARIOS PARA LOGIN */

function verifUser() {
    userNameLogin = document.getElementsByClassName("loginInput")[0].value;
    userPassLogin = document.getElementsByClassName("loginInput")[1].value;

    console.log(userNameLogin + " " + userPassLogin);

    userListFromJSON = JSON.parse(localStorage.getItem("userList")); 

    let usuarioEncontrado = false;

    if (userListFromJSON != null) {
        if (userListFromJSON.find( (e) => e.user == userNameLogin) != undefined) {
            if (userListFromJSON.find( (e) => e.password == userPassLogin) != undefined) {
                const user = {
                    user: userNameLogin,
                    password: userPassLogin
                };
                let userToJson = JSON.stringify(user);
                sessionStorage.setItem("user", userToJson);
    
                usuarioEncontrado = true;
                
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '',
                    showConfirmButton: false,
                    timer: 1500
                })
    
                setTimeout(function timeout() {
                    window.location.href = "http://127.0.0.1:5500/index.html";
                }, 2000)
            } else {
                const bajoPass = document.getElementById("bajoPass");
                bajoPass.innerHTML = '<div class="error"><i class="fa-solid fa-circle-xmark"></i> La contraseña es incorrecta</div>';
                bajoUser.innerHTML = "";
            }
        } else {
            const bajoUser = document.getElementById("bajoUser");
            bajoUser.innerHTML = '<div class="error"><i class="fa-solid fa-circle-xmark"></i> El nombre de usuario no existe</div>';
            bajoPass.innerHTML = "";
        }
    }

    // userListFromJSON.forEach(element => {
    //     if (element.user == userNameLogin && element.password == userPassLogin) {
    //         const user = {
    //             user: userNameLogin,
    //             password: userPassLogin
    //         };
    //         let userToJson = JSON.stringify(user);
    //         sessionStorage.setItem("user", userToJson);

    //         usuarioEncontrado = true;
            
    //         Swal.fire({
    //             position: 'center',
    //             icon: 'success',
    //             title: '',
    //             showConfirmButton: false,
    //             timer: 1500
    //         })

    //         setTimeout(function timeout() {
    //             window.location.href = "http://127.0.0.1:5500/index.html";
    //         }, 2000) //Tiempo para que se ejecute, deberia ser tiempo que tarda la animacion de salida
            
    //     }
    // });

    // let existeUsuario = false;
    // if (!usuarioEncontrado) {
    //     userListFromJSON.forEach(element => {
    //         if (element.user == userNameLogin) {
    //             existeUsuario = true;
    //             //Existe usuario pero no coincide contraseña
    //         }  // else {//No existe usuario}
    //     })
    // }

    // if (existeUsuario) {
    //     //Crear DOM de que no hay contraseña
    //     const bajoPass = document.getElementById("bajoPass");
    //     bajoPass.innerHTML = '<div class="error"><i class="fa-solid fa-circle-xmark"></i> La contraseña es incorrecta</div>';
    //     bajoUser.innerHTML = "";
    // } else {
    //     //Crear DOM de que no hay usuario
    //     const bajoUser = document.getElementById("bajoUser");
    //     bajoUser.innerHTML = '<div class="error"><i class="fa-solid fa-circle-xmark"></i> El nombre de usuario no existe</div>';
    //     bajoPass.innerHTML = "";
    // }
}