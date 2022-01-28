/*AJAX clima*/

let urlClima= "http://api.openweathermap.org/data/2.5/weather?lat=-34.4424448&lon=-59.441152&appid=1f8bdc1bf5d1607ec460efaae06fa5ab";

$("#botonClima").click(function(){

    $.get(urlClima , function(respuesta){

        console.log(respuesta);
        let contenido= `<div>
                            <h2>${respuesta.name}</h2>
                            <p> Pronostico: ${respuesta.weather[0].description}</p>
                            <p> temperatura: ${respuesta.main.temp}</p>
                            <p> Temp max: ${respuesta.main.temp_max}</p>
                            <p> Temp min: ${respuesta.main.temp_min}</p>
                        </div>
                        `;


      $("#contenedor2").append(contenido);
      console.log(contenido);
      
    })
   

})
