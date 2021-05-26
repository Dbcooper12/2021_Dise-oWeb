function guardarDatos(){
    const nombre =document.getElementById("nombre").value;
    const movil=document.getElementById("movil").value;
    const email=document.getElementById("email").value;
   
   const datos ={
    '.':  movil,
        '':  email,
    }
    
    localStorage.setItem(nombre,JSON.stringify(datos));

  document.getElementById("nombre").value ="";
  document.getElementById("movil").value ="";
  document.getElementById("email").value ="";
    
}
function recuperarDatos(){
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    var movil = document.getElementById("movil").value;
    localStorage.getItem(movil);
    var email = document.getElementById("email").value;
    localStorage.getItem(email);
    //document.getElementById("movil").value = localStorage.getItem(nombre);  
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
            registro +='<li>'+ '<span class="nom">'+ key + '</span>'
            +'<span class= "nom">'+ localStorage.getItem(key)+ '</span></li>' + ' <br><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;

}