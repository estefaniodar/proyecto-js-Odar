let cadena1 = "Bienvenidos";
let cadena2 = " a stefi-nails-studio";
var resultadoCadenas = cadena1 + cadena2;
console.log(resultadoCadenas);
alert(resultadoCadenas);

let usuarioreg= "Ana";
let passreg= 123;

let botonForm =document.getElementById("botonForm");

botonForm.addEventListener ("click", function(){
   
    let usuario = document.getElementById("nombreUsuario");
    let pass = document.getElementById("passUsuario");

    if(usuario.value == usuarioreg && pass.value == passreg){
        console.log("Bienvenido al sistema");
    }
    else{
        console.log("No se encuentra registrado");
    }
    console.log(usuario.value);
    console.log(pass.value);
})

/*
function interes(productos , precio){

    if(productos == "esmaltes"){
    
        let interesPrecio= precio * 0.15;
         precio= precio + interesPrecio
         return precio;
    
    }
    else if( productos == "pinceles"){
        let interesPrecio= precio * 0.25;
         precio= precio + interesPrecio
         return precio;
     }
    else if( productos == "cabinas Led"){
        let interesPrecio= precio * 0.30;
        precio= precio + interesPrecio
        return precio;
     }
     else{

        return precio;         
    
        }
 }

 function Iva(precio){

    let iva= precio * 0.21;
    precio= precio + iva;

}

let productos= prompt("ingrese el producto que desee: esmaltes, pinceles, cabina Led");
alert( "Usted eligio "+ productos);
let precio = parseInt(prompt("ingrese monto: 1) esmaltes:1000, 2) pinceles: 500, 3) cabina Led:7000 "));

let resultado= interes(productos, precio);

console.log("Su precio final con interes es de " + resultado);
alert("Su precio final con interes es de " + resultado);
alert("Gracias por su compra");

class Producto {
    constructor ( nombre, precio , stock ){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

}

precioFinal (){
    let iva = this.precio * 0.21;
    return this.precio + iva;
} 
updateStock(){
    this.stock = this.stock -1;
    
}
getStock(){
    return this.stock();

}
}

let limas = new Producto ( "limas", 400, 20);

console.log("El precio final es " + limas.precioFinal());
console.log("Stock antes de la venta es : "+ limas.stock);


if(limas.stock !=0){
    console.log("Gracias por su compra");
    limas.updateStock();
}*/

//no pude arreglar esta parte me tira error en la consola 

class Producto {
    constructor ( nombre, precio , stock ){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    }
}   

let productosEnTienda=[
    {
        nombre: "esmaltes",
        precio: 1000,
        stock : 20,
    },
    {
        nombre: "pinceles",
        precio : 500,
        stock: 50,

    },
    {
        nombre: "cabinasLed",
        precio: 7000,
        stock :10,

    }
];

let productosEnTiendaJson= JSON.stringify(productosEnTienda);
localStorage.setItem("productosEnTiendaJson", productosEnTiendaJson);

let productosJson = localStorage.getItem("productosEnTiendaJson");
let resultadoParse = JSON.parse(productosJson);
console.log(resultadoParse);

    let nuevoProducto = ("lima", 300, 15);
    productosEnTienda.push (new Producto (nuevoProducto));
    
    console.log(productosEnTienda);


    for(let Producto of productosEnTienda){
        console.log(Producto.nombre);
        console.log(Producto.precio);
        console.log(Producto.stock);
    }

    productosEnTienda.sort(function(a, b){
        if (a.nombre > b.nombre) {
            return 1;
          }
        if(a.nombre<b.nombre){
              return -1;

        }
        else{
            return 0;
        }


    });

/*
localStorage.setItem("producto 1", "esmaltes");
localStorage.setItem("producto 2", "pinceles");
localStorage.setItem("producto 3", "cabinas led");

for (let i = 0; i< localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log("clave: "+ clave);
    console.log("valor: " + localStorage.getItem(clave)); 
};*/


let botonesCompra = document.querySelectorAll('.botonCompra');

for(let boton of botonesCompra){

    boton.addEventListener("click", agregarAlCarritoDinamico);

}

console.log(botonesCompra);

let productos = [];

let total = 0;

function agregarAlCarritoDinamico(e){

    console.log(e.target.parentNode.id)

    productos.push("article-"+ e.target.parentNode.id ); 

    var htmlArticleCompleto = e.target.parentNode.innerHTML

    var precio = htmlArticleCompleto.substring(

        htmlArticleCompleto.indexOf("$") + 1, 

        htmlArticleCompleto.lastIndexOf("</h3>")

    );

    total = total + parseInt(precio); 

    document.getElementById("checkout").innerHTML = `pagar $${total}`

    console.log(total);
}



//funcion para probar como mostrar y sacar los numeros importantes del article

function mostrarParent(e){

    console.log(e.target)

    console.log(e.target.parentNode.id)

    var htmlArticleCompleto = e.target.parentNode.innerHTML

    var precio = htmlArticleCompleto.substring(

        htmlArticleCompleto.indexOf("$") + 1, 

        htmlArticleCompleto.lastIndexOf("</h3>")

    );

    console.log(precio)

}
let botonPagar = document.querySelectorAll(".pay");

for(let boton of botonPagar){
    boton.addEventListener("click", pay);
}
console.log(botonPagar);
function pay(e){
    console.log(e.target);
window.alert(productos.join(".\n"));
}





