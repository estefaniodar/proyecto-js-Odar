let cadena1 = "Bienvenidos";
let cadena2 = " a stefi-nails-studio";
var resultadoCadenas = cadena1 + cadena2;
console.log(resultadoCadenas);
alert(resultadoCadenas);

let usuarioreg= "Ana";

let passwordreg= 123;

for(let i=0; i<4; i++){



    let usuario = prompt("ingrese su usuario");

    let password = prompt( "ingrese contraseña");



    if(usuario == usuarioreg && passwordreg == password){

        console.log("bienvenido podes comprar en la web");

		break;    // aca si estaria bien el break porque si al primer o segundo intento ya acierta los codigos no tendria porque pasar por el resto del loop

    }

    else if (i == 3){

        console.log("Excedio la cantidad de intentos permitidos");

        //break;    ---> este break ya lo podrias borrar porque al ser la ultima vuelta del loop (porque mas arriba le asignaste que cuando i sea menor a 4 termine) no haria falta el break porque ya sale solo

    } else{

    alert("Intentos restantes" + (3 - i));     //con este else podrias ver como va ejecutandose el loop por cada vuelta

  }

}

