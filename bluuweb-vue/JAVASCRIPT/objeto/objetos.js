var objeto ={
    nombre:'html',
    duracion: 15,
    estado: true,
    capitulos:{
        nombre: 'intro',
        duracion: 20
    }
}

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.capitulos.nombre);


var arrayObjetos =[
    {nombre:'css',estado:true},
    {nombre:'js',estado:true},
    {nombre:'php',estado:false}
]

console.log(arrayObjetos);
console.log(arrayObjetos[0]);
console.log('-------------------------------');
for (let index of arrayObjetos) {
    console.log(index);
}

