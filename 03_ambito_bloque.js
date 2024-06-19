//ambito de bloque
//la variable funcion, metodo etd son llamados o son usados

//ambito global
let mascota_gato = 'vigotes';
console.log(mascota_gato);

mascota_gato=100;
console.log(mascota_gato);

//ambito local
{
    let mascota_gato ='garfield'
    console.log(mascota_gato);
}

console.log(mascota_gato);