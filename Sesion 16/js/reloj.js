function mostrarHora(){
    var miHora = new Date();
    var hora=miHora.getHours().toString();
    var min=miHora.getMinutes().toString();
    if(min.length==1)
    min="0"+min;
    var seg=miHora.getSeconds().toString();
    if(seg.length==1)
    seg="0"+seg;
   eval (document.forms[0].mireloj.value=hora+" : "+min
    +" : "+ seg);
    //La propiedad forms del objeto document devuelve una colección de objetos tipo array conteniendo todos los formularios 
    //que existan en el documento HTML
    //0 porque es el primer frm
}