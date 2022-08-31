let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));
var check1 = isNaN(numero1);
var check2 = isNaN(numero2);

// Ejercicio 2

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

// Ejercicio 1

function comparacion(){
    if (numero1<numero2){
        alert("El segundo numero es mayor ("+numero2+")");
    } else if (numero1>numero2){
        alert("El primer numero es mayor ("+numero1+")");
    } else if (numero1==numero2){
        alert("Ambos numeros son iguales");
    } //else if (numero)
}

comparacion();

//Ejercicio 3

let numero3 = 0;
let suma = 0;
let media = 0;
let cantnumeros = 0;

while (true){
    numero3 = parseInt(prompt("Ej3. Ingrese un numero"));
    cantnumeros = cantnumeros + 1;
    suma = suma + numero3;
    if (numero3 < 0){
        break;
    }
}

media = suma/cantnumeros;

console.log("Resultado total de la suma: "+suma);
console.log("Cantidad de numeros ingresados: "+cantnumeros);
console.log("Media de los números: "+media);

// Ejercicio 4

for (var i = 1; i<11; i++){
    console.log("El primer numero ("+numero1+") multiplicado por "+i+" da como resultado: "+numero1*i);
    console.log("El segundo numero ("+numero2+") multiplicado por "+i+" da como resultado: "+numero2*i);
}

// Ejercicio 5

let numero4 = parseInt(prompt("Ej 5. Ingrese un numero"));
let numero5 = parseInt(prompt("Ej 5. Ingrese el otro numero que determinara el rango"));

for (var i = numero4+1; i < numero5; i++){
    console.log(i);
}

/*
Primero crear variable para numero en medio, usar i del for
Crear lista para anotar los numeros
hacer for desde i = numero4 hasta i == 5 EXCLUYENDO
*/

// Ejercicio 6

let numero6 = parseInt(prompt("Ej 6. Ingrese un numero"));
let numero7 = parseInt(prompt("Ej 6. Ingrese el otro numero que determinara el rango"));

for (var i = numero6+1; i < numero7; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}

// Ejercicio 7

let numero8 = parseInt(prompt("Ej 7. Ingrese un numero"));

if (numero8 % 2 == 0){
    console.log("Este numero es par");
} else {
    console.log("Este numero es impar");
}

// Ejercicio 8

let numPorIng = parseInt(prompt("Ej 8. Ingrese la cantidad de numeros que ingresara"));
let listaelementos = [];

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
                console.log(listaelementos);
                var z = pasaje.length // Se consigue la longitud del almacenamiento secundario
                for (var y = 0; y < z; y++){
                    var x = pasaje.shift();
                    listaelementos.push(x);
                    console.log("Ejecucion"); // Carga valor por valor los numeros
                }
                mayor = false;
            }
        } 
    }
}

console.log(listaelementos);

for (var i = 0; i == listaelementos.length; i++){
    console.log(listaelementos[i]);
}

console.log("El menor numero es "+listaelementos.shift());
console.log("El mayor numero es "+listaelementos.pop());

// 1, 3, 5, 6, 7
// 4 >3
// x  4 <5
// Segunda condicional
//

// Ejercicio 9

console.log(listaelementos);
for (var i = 0; i < listaelementos.length; i++){
    console.log(listaelementos[i]);
}

// Ejercicio 10

//Ya hecho en el ejercicio 8 inintencionalmente

// Ejercicio 11

                                                                                    //STAND BY 

// Ejercicio 12

console.log("La lista tiene "+listaelementos.lenght+1 + "elementos");



//console.log(listaelementos);
//let listaelementos = [];
//listapares.push(i)



