let automoviles = [];

function Carros(marca, modelo, color, anio, titular){
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.anio = anio
    this.titular = titular
}

Carros.prototype.venderAutomovil = function(){
    Carros.prototype.titular = "";
}

Carros.prototype.verAuto = function () {
    return `${this.marca} ${this.modelo} ${this.color} ${this.anio} ${this.titular}`
}

Carros.prototype.encer = function () {
    alert("El auto esta en marcha");
}

let chevrolet = new Carros("chevrolet", "chevy", "rojo", 2000, "Hector");
let ford = new chevrolet.constructor("ford", "ikon", "verda", 2005, "Jaque");
let nissan = new ford.constructor("nissan", "march", "azul", 2010, "Axel");

automoviles.push(chevrolet, ford, nissan);

const verCarros = document.querySelector("#listCarros");


function mostarVehiculos(){
    
    for(let mostrarCarro of automoviles){
        const listaCarros = document.createElement("li");
        listaCarros.className = "carrosVenta";
        listaCarros.innerText = mostrarCarro.verAuto();
        verCarros.appendChild(listaCarros);
        
        console.log(mostrarCarro.verAuto());
    }
}


