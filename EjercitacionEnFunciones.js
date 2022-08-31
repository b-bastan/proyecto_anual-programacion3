let numero1;
let numero2;
var check1;
var check2;
let numPorIng;
let listaelementos = [];
var listacopia;

function ejercicio1(){
    numero1 = parseInt(prompt("Ingrese un numero"));
    numero2 = parseInt(prompt("Ingrese otro numero"));
    check1 = isNaN(numero1);
    check2 = isNaN(numero2);
    if (numero1<numero2){
        var textoEj1 = "El segundo numero es mayor ("+numero2+") ";
    } else if (numero1>numero2){
        var textoEj1 = "El primer numero es mayor ("+numero1+") ";
    } else if (numero1==numero2){
        var textoEj1 = "Ambos numeros son iguales ";
    } //else if (numero)
    etiqueta1 = document.getElementById("etiquetaEj1");
    let texto1 = document.createTextNode(textoEj1);
    etiqueta1.appendChild(texto1);
}

function ejercicio2(){
    numero1 = parseInt(prompt("Debido a que no se puede hacer si no existen números, ingrese un numero"));
    numero2 = parseInt(prompt("Ingrese otro numero"));
    while (true){
        if (check1 == false && check2 == false){
            break;
        } else {
            if (check1){
                numero1 = parseInt(prompt("Ej2. Ingrese un numero"));
            }
            if (check2){
                numero2 = parseInt(prompt("Ej2. Ingrese otro numero"));
            }
        }
        var check1 = isNaN(numero1);
        var check2 = isNaN(numero2);
    }
}

function ejercicio3(){
    let numero3 = 0;
    let suma = 0;
    let media = 0;
    let cantnumeros = 0;

    while (true){
        numero3 = parseInt(prompt("Ej3. Ingrese un numero"));
        cantnumeros = cantnumeros + 1;
        if (numero3 < 0){
            break;
        } else {
            suma = suma + numero3;
        }
    }

    media = suma/cantnumeros;

    console.log("Resultado total de la suma: "+suma);
    console.log("Cantidad de numeros ingresados: "+cantnumeros);
    console.log("Media de los números: "+media);
    var textoEj3 = "Resultado total de la suma: "+suma+"\nCantidad de numeros ingresados: "+cantnumeros+"\nMedia de los números: "+media+" ";
    etiqueta3 = document.getElementById("etiquetaEj3");
    let texto3 = document.createTextNode(textoEj3);
    etiqueta3.appendChild(texto3);
}

function ejercicio4(){
    for (var i = 1; i<11; i++){
        console.log("El primer numero ("+numero1+") multiplicado por "+i+" da como resultado: "+numero1*i);
        console.log("El segundo numero ("+numero2+") multiplicado por "+i+" da como resultado: "+numero2*i);
        var textoEj4 = numero1+" * "+i+" = "+ numero1*i +" // "+ numero2+" * "+i+" = "+ numero2*i;
        etiqueta4 = document.getElementById("etiquetaEj4");
        var texto4 = document.createTextNode(textoEj4);
        etiqueta4.appendChild(texto4);
    }
    
}

function ejercicio5(){
    let numero4 = parseInt(prompt("Ej 5. Ingrese un numero"));
    let numero5 = parseInt(prompt("Ej 5. Ingrese el otro numero que determinara el rango"));
    
    for (var i = numero4+1; i < numero5; i++){
        console.log(i);
        var textoEj5 = i+"; ";
        etiqueta5 = document.getElementById("etiquetaEj5");
        var texto5 = document.createTextNode(textoEj5);
        etiqueta5.appendChild(texto5);
    }
}

function ejercicio6(){
    let numero6 = parseInt(prompt("Ej 6. Ingrese un numero"));
    let numero7 = parseInt(prompt("Ej 6. Ingrese el otro numero que determinara el rango"));
    
    for (var i = numero6+1; i < numero7; i++){
        if (i % 2 != 0){
            console.log(i);
            var textoEj6 = i+"; ";
            etiqueta6 = document.getElementById("etiquetaEj6");
            var texto6 = document.createTextNode(textoEj6);
            etiqueta6.appendChild(texto6);
        }
    }    
}

function ejercicio7(){
    let numero8 = parseInt(prompt("Ej 7. Ingrese un numero, no ingresar ningún valor equivaldrá a 0"));

    if (numero8 % 2 == 0){
        var textoEj7 = "Este número es par";
    } else {
        var textoEj7 = "Este número es impar";
    }
    etiqueta7 = document.getElementById("etiquetaEj7");
    let texto7 = document.createTextNode(textoEj7);
    etiqueta7.appendChild(texto7);
}

function ejercicio8(){
    numPorIng = parseInt(prompt("Ej 8. Ingrese la cantidad de numeros que ingresara"));

    /*
    Cuando se ingrese un numero, revisar ubicacion por ubicacion si es menor, mayor o igual, segun eso se calcula en que posicion ingresa
    */
    
    for (var i = 0; i < numPorIng; i++){
        // console.log("Llegamos al for xD");
        let numero9 = parseInt(prompt("Ej 8. Ingrese un numero")); // Se ingresa un numero
        if (i == 0){
            listaelementos.push(numero9); // Al primer numero va a ingresarlo si o si al inicio
        } else {
            let mayor = true; // Condicion del while
            let pos = -1; // Posicion es -1
            while (mayor) {
                // console.log("while");
                if (listaelementos[pos+1] < numero9){ // Inicia desde 0  y revisa si el valor de la ubicacion SIGUIENTE es menor, en caso de serlo, sigue con la siguiente posicion
                    pos = pos+1; 
                    // [7, 10, 11, 13]
                } else {
                    //listaelementos[pos].push(numero9); No funciona asi que a hacer lo de abajo
                    let pasaje = listaelementos.splice(pos+1, listaelementos.length - (pos+1)); // Iba - pos+1// Debido a que el resultado siguiente es mayor, retira DESDE ese resultado mayor
                    listaelementos.push(numero9); // Se posiciona el nuevo valor
                    //console.log(listaelementos);
                    var z = pasaje.length // Se consigue la longitud del almacenamiento secundario
                    for (var y = 0; y < z; y++){
                        var x = pasaje.shift();
                        listaelementos.push(x);
                        //console.log("Ejecucion"); // Carga valor por valor los numeros
                    }
                    mayor = false;
                }
            } 
        }
    }
    var textoEj8 = listaelementos;
    etiqueta8 = document.getElementById("etiquetaEj8");
    var texto8 = document.createTextNode(textoEj8);
    etiqueta8.appendChild(texto8);
    console.log(listaelementos);

    let minval = listaelementos.shift()
    let maxval = listaelementos.pop()
    listaelementos.unshift(minval);
    listaelementos.push(maxval);
    console.log("El menor numero es "+minval);
    console.log("El mayor numero es "+maxval);
    
    for (var i = 0; i == listaelementos.length; i++){
        console.log(listaelementos[i]);
    }

    var textoEj8p1 = "El mayor valor es "+maxval;
    var texto8p1 = document.createTextNode(textoEj8p1);

    var textoEj8p2 = "El menor valor es "+minval;

    var texto8p2 = document.createTextNode(textoEj8p2);
    etiqueta8.appendChild(texto8p2);
    etiqueta8.appendChild(texto8p1);
}

function ejercicio9(){
    //alert("Separar por renglones los items, parecen todos el mismo, el br no funciona")
    console.log(listaelementos);
    for (var i = 0; i < listaelementos.length; i++){
        console.log(listaelementos[i]);
        var textoEj9 = listaelementos[i]+"; ";
        etiqueta9 = document.getElementById("etiquetaEj9");
        var texto9 = document.createTextNode(textoEj9);
        etiqueta9.appendChild(texto9);
    }
}

function ejercicio10(){
    alert("Llamé al ejercicio 8 para que exponga por mí");
    ejercicio8();
}

function ejercicio11(){
    var listacopia = listaelementos.slice();
    console.log("Lista original: "+listaelementos);
    let nuevaLista = [];
    for (var i = 0; i < listaelementos.length; i++){
        var cambio = listacopia.pop();
        nuevaLista.push(cambio);
    }
    console.log("Lista invertida: "+nuevaLista);
    let textoEj11 = "Lista invertida: "+nuevaLista;
    etiqueta11 = document.getElementById("etiquetaEj11");
    let texto11 = document.createTextNode(textoEj11);
    etiqueta11.appendChild(texto11);
}

function ejercicio12(){
    console.log("La lista tiene "+listaelementos.length+" elementos");
    let textoEj12 = "La lista tiene "+listaelementos.length+" elementos";
    etiqueta12 = document.getElementById("etiquetaEj12");
    let texto12 = document.createTextNode(textoEj12);
    etiqueta12.appendChild(texto12);
}

function ejercicio13(){
    let buscNum = parseInt(prompt("Ej13. Ingresa el numero que desees buscar"));
    let notFound = true;
    for (var i = 0; i < listaelementos.length; i++){
        if (listaelementos[i] == buscNum){
            console.log("Se ha encontrado un resultado en la posicion "+i);
            var textoEj13 = "Se ha encontrado un resultado en la posición "+i;
            notFound = false;
        }
    }
    if (notFound){
        console.log("No se encontraron resultados")
        var textoEj13 = "No se encontraron resultados";
    }
    etiqueta13 = document.getElementById("etiquetaEj13");
    let texto13 = document.createTextNode(textoEj13);
    etiqueta13.appendChild(texto13);
}

function ejercicio14(){
    let variable = "AWSAWDWAWSWA";
    while (variable.includes("AWS")){
        variable = variable.replace("AWS","");
    }
    console.log(variable);
    let textoEj14 = variable;
    etiqueta14 = document.getElementById("etiquetaEj14");
    let texto14 = document.createTextNode(textoEj14);
    etiqueta14.appendChild(texto14);
}

function ejercicio15(){
    let texto = "AWSAWDWAWSWA";

    function invertir(){
        let cadAInv = texto.split("");
        let cadRotada = cadAInv.reverse();
        let textoInvertido = cadRotada.join("");
        while (textoInvertido.includes("AWS")){
          textoInvertido = textoInvertido.replace("AWS","");
        }
        return textoInvertido;
    }
    
    let inverText = invertir(); 
    console.log(inverText);
    let textoEj15 = inverText;
    etiqueta15 = document.getElementById("etiquetaEj15");
    let texto15 = document.createTextNode(textoEj15);
    etiqueta15.appendChild(texto15);
}

function clear(x){
    let objeto = document.getElementById(x)
    objeto.innerText = "";
}

function cleanup(){
    clear("etiquetaEj1");
    clear("etiquetaEj2");
    clear("etiquetaEj3");
    clear("etiquetaEj4");
    clear("etiquetaEj5");
    clear("etiquetaEj6");
    clear("etiquetaEj7");
    clear("etiquetaEj8");
    clear("etiquetaEj9");
    clear("etiquetaEj10");
    clear("etiquetaEj11");
    clear("etiquetaEj12");
    clear("etiquetaEj13");
    clear("etiquetaEj14");
    clear("etiquetaEj15");
}