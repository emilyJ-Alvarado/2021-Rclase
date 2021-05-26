$(document).ready(function()
{
  
    // Al redimensionar la ventana
     $(window).resize(function(){
        $("#log").text("se ha redimensionado la ventana");
    });
    // Al hacer scroll en el documento
     $(window).scroll(function(){
        $("#log").text("se ha hecho scroll en la página");
    });
    // Al hacer scroll en 'div2'
     $("#div2").scroll(function(){
        $("#log").text("se ha hecho scroll en 'div2'");
    });
});