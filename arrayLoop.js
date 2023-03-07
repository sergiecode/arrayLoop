// Sergie Code - Formas de hacer un ciclo en un arreglo //

// 1 for // 
let arreglo = ['Angular', 'React', 'Javascript', 'CSS', 'HTML']
for (let x = 0; x < arreglo.length; x++) {
    console.log(arreglo[x]) // imprime uno por uno
}

// 2 map //
const tecnologias = ['Angular', 'React', 'JS', 'CSS', 'HTML']
let nuevoArreglo = tecnologias.map((index)=> console.log(index))
//devuelve un array llamado nuevoArreglo

// 3 do & while
let x = 0
do{
    console.log (x);
    x++;
}while(x<3) // se espera 0,1,2

// 4 for of
let databases = ['MySQL', 'PostgreSQL', 'MongoDb', 'MariaDb']
for (let x of databases){
    console.log(x) // imprime uno por uno
}
// 5 for ir
let backend = ['C', 'Java', 'Python']
backend.salary = '$10000'
for (let x in backend){
    console.log(x) // recorre todas las propiedades y las imprime
    // salida esperada => "0", "1", "2", "salary"
}
// 6 while
let mascotas = ['perro', 'gato', 'hurón']
let i = 0
while(i < mascotas.length){
    console.log(mascotas[i]);
    i++; 
}
//7 forEach
let familiares = ['madre', 'padre', 'hermana']
familiares.forEach((index) => console.log(index));
// a diferencia de map no devuelve un array