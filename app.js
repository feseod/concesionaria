let autos = require ('./autos')

let personas = require ('./personas')

let concesionaria = {

   autos: autos,

   personas: personas,

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
     },

     totalDeVentas: function(){
      let suma =this.listaDeVentas().reduce(function(acum,num){
            return acum + num;
         }, 0)
         return suma
      },

      puedeComprar: function(autos,personas){
         if (autos.precio < personas.capacidadDePagoTotal && autos.precio/autos.cuotas < personas.capacidadDePagoEnCuotas){
             return true;
          } else { return false }
       } 
 
   }

console.log(concesionaria.puedeComprar('Toyota', 'Juan'))