// ********** Curso JavaScript: 10. Objetos {} **********
let aa = new Number(3)
console.log(aa)

let a = new String("Hola");
console.log(a)

const b = {};
console.log(b);

const c = new Object();
console.log(c);

// ^Dentro de un objeto a las variables se le van a llamar atributos/propiedades
// ^y a las funciones se les llama métodos */



const empleado = {
  nombre: "JonY",
  apellido: "GATOS",
  edad: 35,
  pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
  soltero: false,
  contacto: {
    email: "sergio@gmail.com",
    twitter: "@sergio",
    movil: "5215512345678",
  },
  saludar: function () {
    console.log(Hola :));
  },
  decirMiNombre: function () {
    console.log(
      Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter.
    );
  },
};

// console.log(empleado);
// console.log(empleado["nombre"]);
// console.log(empleado["apellido"]);
console.log(empleado.nombre);
console.log(empleado.apellido);
console.log(empleado.edad);
console.log(empleado.soltero);
console.log(empleado.pasatiempos);
console.log(empleado.pasatiempos[1]);
console.log(empleado.contacto);
console.log(empleado.contacto.twitter);
empleado.saludar();
empleado.decirMiNombre();

// console.log(Object.keys(empleado));
// console.log(Object.values(empleado));
// console.log(empleado.hasOwnProperty("nombre"));
// console.log(empleado.hasOwnProperty("nacimiento"));

// ********** Curso JavaScript: 11. Tipos de Operadores - **********

// Operadores Aritmeticos : + - * /

let nombre1 = "Lizeth";
let nombre2 = "Sergio";
let resultado = nombre1 + " " + nombre2;
// console.log(resultado);

let number2 = 3;
let number1 = 7;
let resultado2 = number1 + number2;
// console.log(resultado2);

// ! No es lo mismo =, ==, ===
// ! = 1 igual es asignación de variable let nombre1 = 'lizeth'
// ! == 2 iguales es comparacion de valores (7 == 7) ("7" == 7)
// ! === 3 iguales es comparación de tipo de dato y de valor

// console.log(7 == 7);
// console.log("7" == 7); // Comparando valores
// console.log(0 == false);

// console.log(7 === 7);
// console.log("7" === 7); // Tido de dato y valor
// console.log(0 === false);
// console.log(Boolean(0) === false);

// * ==============================================================

// ^^ Aritméticos: + - * / % () */
let number01 = 3;
let number02 = 7;
// console.log(number01 + number02);
// console.log(number01 - number02);
// console.log(number01 / number02);
// console.log(number01 * number02);

let resul = number01 % number02;
// console.log(resul);

// ^^ Relacionales
/* Relacionales: 
        >, **** Mayor que
        <, **** Menor que
        >=, **** Mayor o igual que 
        <=, **** Menor o igual que 
        ==, **** compara el valor
        ===, **** compara tipo y valor 
        !=, **** Diferente al valor
        !== **** Diferente al valor y tipo
*/

// console.log(8 > 9);
// console.log(9 > 8);
// console.log(8 >= 9);
// console.log(9 >= 8);
// console.log(7 < 7);
// console.log(7 <= 7);

// ^^ Incremento Decremento
let i = 5;

console.log(i++); // pos-incremento
console.log(i)

console.log(++i); // pre-incremento
console.log(i)

console.log(i--); // post-decremento
console.log(i)

console.log(--i); // pre-decremento
console.log(i)

// ^^ Lógicos
// ! - Not : Niega, es decir lo que es verdadero lo vuelve falso y viceversa
// * - Or: Cuando tengo 2 o más condiciones, con que una se cumpla, es decir sea verdadera, el OR será verdadero.
// && - And: Cuando tengo 2 o más condiciones, todas tienen que cumplirse, es decir ser verdaderas, para que AND se valide 

console.log(!true);
console.log(!false);
console.log((9 === 9) ("9" === 9));
console.log((9 === 9) && ("9" === 9));
console.log((9 === 9) && ("9" === "9"));
