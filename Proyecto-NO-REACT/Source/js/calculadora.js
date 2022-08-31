var numero = parseInt(prompt("Ingrese un numero"));
var numero2 = parseInt(prompt("Ingrese otro numero"));

var suma = function() {
	var resultado = numero+numero2;
    return resultado;
}
function resta() {
    var resultado = numero-numero2;
    return resultado;
}
/*multiplicacion = () => {
    var resultado = numero*numero2;
    return resultado;
}*/ ///Comentario porque se usa funcion anonima
division = () => {
    var resultado = numero/numero2;
    return resultado;
}

var operacion = prompt("Ingrese la operacion: \n1 para suma \n2 para resta\n3 para multiplicacion\n4 para division");

/*switch (operacion) {
    case 1:
        alert(suma());
        break;
    case 2:
        alert(resta());
        break;
    case 3:
        alert(multiplicacion());
        break;
    case 4:
        alert(division());
        break;
    default:
        alert("No se ingreso un numero valido");
}*/
if (operacion == 1){
    alert(suma());
} else if (operacion == 2){
    alert(resta());
} else if (operacion == 3){
    (function(){
        alert(numero*numero2);
    })();
} else if (operacion == 4){
    alert(division());
} else {
    alert("No se ingreso un numero valido");
}