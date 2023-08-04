function comentarios(idSolicitud){

}

function test(){
    var msg= document.getElementById("mensajeUsuario").value;
    var mensajes=document.getElementById('listaMensajes');
    var listado=mensajes.innerHTML;
    console.log(listado);

    var usuario='Daniel Bruno';
    var fecha='05/08/2023';
    var hora='01:27 am.';

    var a=""+
    "<li>"+
    "<div class='window-frame' class='ui-widget-content'>"+
    "    <div class='top-bar'>"+
    "    <div class='title'>"+usuario+"~ "+fecha+" ~ "+hora+" </div>"+
    "    </div>"+
    "    <div class='inner-content'>"+
    "    <div class='content'>"+
    "        <p>"+msg+"</p>"+
    "    </div>"+
    "    </div>"+
    "</div>"+
    "</li>";
    
    mensajes.innerHTML=listado+a;
    // var li = document.createElement("li");
    // li.appendChild(document.createTextNode(a));
    // mensajes.appendChild(li);

}