let autos = require ('./autos')

let concesionaria = {

   autos: autos,

   buscarAuto: function (patente) {
    let listaAutos = this.autos;
    let listaFiltrada = listaAutos.filter(function(autos){
        return autos.patente == patente;
    });
    if (listaFiltrada.length == 1){
        return listaFiltrada[0]} else {
            return null
        };
    },

    venderAuto: function (patente) {
        let auto = this.buscarAuto (patente)
    return auto.vendido = true;
    },

    autosParaLaVenta: function (){
        let autos = this.autos;
        let autosVenta = autos.filter(function (autos) {
           return autos.vendido == false;
        })
  
        return autosVenta;   
     },

     autosNuevos: function (){
        let autos = this.autosParaLaVenta ()
        let autos0KM = autos.filter (function(autos){
           return autos.km < 100;
        })
        return autos0KM;
     },

     listaDeVentas: function (){
        let listaVentas = this.autos.filter (function(auto){
            return auto.vendido == true
        });
        let listaPrecio = []
        for (let i=0; i<listaVentas.length;i++){
           listaPrecio.push(listaVentas[i].precio);
        }
        return listaPrecio
     }
 
}

console.log(concesionaria.listaDeVentas())