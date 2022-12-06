console.log('h')

async function climaUsulutan(){
    let response = await axios('https://api.openweathermap.org/data/2.5/weather?lat=13.35&lon=-88.45&appid=d596455e943e42aa0788164ccc1a6afa');
    console.log(response.data)
    // let response = axios('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=875e1b0d16dfcb8522e4c03a965542ed')

    mostrarClimaUsulutan(response.data)
}

async function climaSanMIguel(){
    let response = await axios('https://api.openweathermap.org/data/2.5/weather?lat=13.48333&lon=-88.18333&appid=d596455e943e42aa0788164ccc1a6afa');
    console.log(response.data)
    mostrarClimaSanMiguel(response.data)
}

climaUsulutan()
climaSanMIguel()



function mostrarClimaUsulutan(res){
    var info = ''
    if(res.weather[0].main == "Clear"){
        info +=
        '<img src="imagenes/soleado.png" alt="">'+
        ' <p><b>Departamento:</b> '+res.name+'</p>'+
        ' <p><b>Estado cimatico:</b> Soleado</p>'+
        ' <p><b>Descripcion:</b> Cielos despejados</p>'

    }
    else if(res.weather[0].main == "Rain"){
        info =
        '<img src="imagenes/lluvioso.jog" alt="">'+
        ' <p><b>Departamento:</b> '+res.name+'</p>'+
        ' <p><b>Estado cimatico:</b> lluvioso</p>'+
        ' <p><b>Descripcion:</b> Lluvia</p>'

      

    }
    else if(res.weather[0].main == "Cloudy"){
        info =
        '<img src="imagenes/nublado.jpg" alt="">'+
        ' <p><b>Departamento:</b> '+res.name+'</p>'+
        ' <p><b>Estado cimatico:</b> Nublado</p>'+
        ' <p><b>Descripcion:</b> Cielos nublados</p>'

        
    }

    info +=   ' <p><b>Humedad:</b> '+res.main.humidity+'</p>'
    info +=   ' <p><b>Presion:</b> '+res.main.pressure+'</p>'
    info +=   ' <p><b>Temperatura:</b> '+res.main.temp+'</p>'
    
    document.getElementById('contenedor').innerHTML = info
}
function mostrarClimaSanMiguel(res){
    var info = ''
    info +=   ' <p><b>Departamento:</b> '+res.name+'</p>'
    if(res.weather[0].main == "Clear"){
        info +=
        '<img src="imagenes/soleado.png" alt="">'+
        ' <p><b>Departamento:</b> '+res.name+'</p>'+
        ' <p><b>Estado cimatico:</b> Soleado</p>'+
        ' <p><b>Descripcion:</b> Cielos despejados</p>'
        
    }
    else if(res.weather[0].main == "Rain"){
        info =
        '<img src="imagenes/lluvioso.jpg" alt="">'+
        ' <p><b>Departamento:</b> '+res.name+'</p>'+
        ' <p><b>Estado cimatico:</b> LLuvioso</p>'+
        ' <p><b>Descripcion:</b> Lluvia</p>'
        
    }
    else if(res.weather[0].main == "Cloudy"){
        info =
        '<img src="imagenes/nublado.jpg" alt="">'+
        ' <p><b>Departamento:</b> '+res.name+'</p>'+
        ' <p><b>Estado cimatico:</b> Nublado</p>'+
        ' <p><b>Descripcion:</b> Cielos nublados</p>'

        
    }
    info +=   ' <p><b>Humedad:</b> '+res.main.humidity+'</p>'
    info +=   ' <p><b>Presion:</b> '+res.main.pressure+'</p>'
    info +=   ' <p><b>Temperatura:</b> '+res.main.temp+'</p>'

    document.getElementById('contenedor1').innerHTML = info
}



async function clima(){
    let response = await axios('https://api.openweathermap.org/data/2.5/weather?lat=-37.46973&lon=-72.35366&appid=d596455e943e42aa0788164ccc1a6afa');
    console.log(response.data)
}

clima()