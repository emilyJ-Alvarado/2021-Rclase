function compara(){
    var a=2;
    var b=4;
    if(a==b)
    alert ('a y b son iguales');
    else
    alert('a y b son diferentes');
}
function resta(x,y){
    var res=x-y;
    document.write("<h2>La resta es" +res+ "</h2>")
}
function suma(x,y){
    var sum=x+y;
    document.getElementById("sumar").innerHTML="la suma es " +sum;
}
function escribir(){
    valor=document.getElementById('entrada').value;
    document.getElementById('contenido').innerHTML=' '+valor;
   
}