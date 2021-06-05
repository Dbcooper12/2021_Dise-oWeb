 

function guardarDatos(){
    var  nombre =document.getElementById("nombre").value, 
        movil=document.getElementById("movil").value
        ,email=document.getElementById("email").value;
      var datos ={
          'movil': movil,
         'email' : email
      }

localStorage.setItem(nombre,JSON.stringify(datos));
 
}

function recuperarDatos(){
   
   actualizarDatos();    
}
function EliminarDatos(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();    
}
function EliminarTodosDatos(){
    localStorage.clear();
    actualizarDatos();
    
}
function actualizarDatos(){
    var registro = "";
    if(localStorage.length===0){
        registro += '<li>Vacio</li>';

    }else{
        for(var i=0; i<= localStorage.length -1; i++){
            var key = localStorage.key(i);
            registro +='<li>'+ '<span class="nom">'+ key + '</span></li>'
            +'<span class= "nom">'+ localStorage.getItem(key)+ '</span>' + ' <br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;

}