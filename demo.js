//convertidor de kilometros a metros
/*let Kilometros: number = 2
let metros: number = 1000
let totalConversion

console.log(totalConversion = Kilometros * metros)*/
/*let personas = [{nombre:'ana', sexo:'f'},
                {nombre:'karen', sexo:'f'},
                {nombre:'pablo', sexo:'m'},
                {nombre:'eliseo', sexo:'m'}];
            
let asignacion = function ( if (personas && 'f') {
    
}



let asignarprefijos = personas.map(asignacion);
console.log(asignarprefijos)*/
/*let orders = [
    {
        customer: {
            name: "Oscar Blancarte"
        },
        products: [
            {
                id: 1,
                name: "Banana"
            },{
                id: 2,
                name: "strawberry"
            }
        ]
    },{
        customer: {
            name: "Carlos Raygoza"
        },
        products: [
            {
                id: 3,
                name: "apple"
            },{
                id: 2,
                name: "strawberry"
            }
        ]
    },{
        customer: {
            name: "Andres Bedoya"
        },
        products: [
            {
                id: 4,
                name: "Watermelon"
            },{
                id: 2,
                name: "apple"
            },{
                id: 1,
                name: "Banana"
            }
        ]
    }
]

let simpleOrders = orders.map(order => {
    return order.products.map(product => {return {customer: order.customer.name, product: product.name}})
})

console.log("simpleOrders => ", simpleOrders)*/
// simpleOrders =>  [ [ { customer: 'Oscar Blancarte', product: 'Banana' },
//     { customer: 'Oscar Blancarte', product: 'strawberry' } ],
//   [ { customer: 'Carlos Raygoza', product: 'apple' },
//     { customer: 'Carlos Raygoza', product: 'strawberry' } ],
//   [ { customer: 'Andres Bedoya', product: 'Watermelon' },
//     { customer: 'Andres Bedoya', product: 'apple' },
//     { customer: 'Andres Bedoya', product: 'Banana' } ] ]
/*const listaOriginal = [1, 2, 3, 4, 5];

const nuevaLista = listaOriginal.map(function sumaUno(elementoActual) {
  return elementoActual + 8;
});

console.log(nuevaLista); // [ 2, 3, 4, 5, 6 ]*/
var personas = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Eliseo", sexo: "M" },
    { nombre: "karen", sexo: "F" },
    { nombre: "Darwin", sexo: "M" },
    { nombre: "Jarellys", sexo: "F" },
    { nombre: "edixa", sexo: "F" },
];
var asignacionF = 'Sra';
var asignacionM = 'Sr';
function generarNombreyAsignacion(_a) {
    var nombre = _a.nombre, sexo = _a.sexo;
    if (sexo == 'F') {
        return "Nombre " + asignacionF + " " + nombre + " Sexo " + sexo;
    }
    else {
        return "Nombre " + asignacionM + " " + nombre + " Sexo " + sexo;
    }
}
var nombres = personas.map(generarNombreyAsignacion);
console.log(nombres);
