
// ********** 8. Funciones **********

/*
Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. 
Opcionalmente, una función puede aceptar parámetros y devolver un valor.

Las funciones en JavaScript son objetos, un tipo especial de objetos:

Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
*/

let nombre = 20;
console.log(nombre);

{
  let nombre = "Lizeth";
  console.log(nombre);
}

// Funciones que devuelven un valor
function personas() {
  let nombre = "Sergio";
  return nombre;
}

function empleado() {
  let nombre = "Johan";
  return nombre;
}

let empleados = empleado() // 'Lizeth', 30, true/false
console.log(empleados);

console.log(nombre);
console.log(personas());

// ******************** función Que retorna un valor ********************
// * Funciones que devuelven un valor
function personas() {
  let nombre = "Sergio";
  return nombre;
}

function empleado() {
  let nombre = "Johan";
  return nombre;
}

let empleados = empleado(); // 'Lizeth', 30, true/false
console.log(empleados);

console.log(nombre);
console.log(personas());

// * Funciones declaradas VS funciones expresadas:

function empleado_01() {
  let nombre = "Sebastian";
  console.log(Mi nombre es: ${nombre});
}

empleado_01();

// * funciones expresadas / anonimas
// ^ funcionExpresada(); // Si la ejecutamos antes de crearla nos sale el error: ReferenceError: Cannot access 'funcionExpresada' before initialization

// funcionExpresada();

const funcionExpresada = function (){
  let nombre = "Arturo";
  console.log(Mi nombre es: ${nombre});
}

funcionExpresada();
