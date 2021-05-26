$(Document).ready(function(){
    $("a").click(function(evento){
alert("Ha pulsado el enlace. Ahora seras enviado a la pagina de la USAT");
    });
});

$("#c1b").click(function(){
    $("#cont1").toggle(1500);
},function(){
    $("#cont1").toggle(1500);
}
);
