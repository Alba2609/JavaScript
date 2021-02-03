'use strict'

var hoy= new Date();// variable para extraer la que dia es 
var fecha= hoy.getDate()+'-'+(hoy.getMonth()+1)+'-'+hoy.getFullYear();// Variable para extarer la fecha en dia,mes y año completo.
var hora= hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
var fechaYHora='<h3>Hoy es:</h3>'+ fecha +'<br/>'+'<h3>Entraste en esta pagina a esta hora:</h3>'+ hora;

document.write(fechaYHora);//Muestra por pantalla
console.log(fechaYHora);//Muestra por consola