//convertidor de kilometros a metros
/*let Kilometros: number = 2
let metros: number = 1000
let totalConversion

console.log(totalConversion = Kilometros * metros)*/


let personas = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Eliseo", sexo: "M" },
    { nombre: "karen", sexo: "F" },
    { nombre: "Darwin", sexo: "M" },
    { nombre: "Jarellys", sexo: "F" },
    { nombre: "edixa", sexo: "F" },
  ];
  let asignacionF = 'Sra'
  let asignacionM = 'Sr'
   
  
  function generarNombreyAsignacion({ nombre, sexo }) {
if (sexo == 'F') {
    return `Nombre ${asignacionF} ${nombre} Sexo ${sexo}`;
    
} else {
    return `Nombre ${asignacionM} ${nombre} Sexo ${sexo}`
    
}
   
  }
  
  const nombres = personas.map(generarNombreyAsignacion);
  
  console.log(nombres);