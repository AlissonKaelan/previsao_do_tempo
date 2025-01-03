

var key = "5aa6c12cc52ebda3ff056e48d9b91f9c"



async function Clickbutton(){
    var city = document.querySelector(".input-cidade").value
    buscarcity(city)
}

async function buscarcity(city){
    var dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    InfTel(dados)
        

}

function InfTel(dados){
    document.querySelector(".informacao").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = dados.main.temp + "°C"
    document.querySelector(".txttempo").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    console.log(dados)
}

