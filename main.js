function ncomentario(){
    let li =document.createElement("li");
    let valoringresado = document.getElementById("Nuevocomentario").value;
    let text = document.createTextNode(valoringresado);
    li.appendChild(text);
     
    if(valoringresado === ''){
        alert("ingrese un comentario pls")
    } else{
        document.getElementById("comentarios").appendChild(li);


    }
document.getElementById("N uevocomentario").value = "";
li.className = "comentario";

let borrar = document.createElement("p");
borrar.innerHTML = ("borrar");
borrar.className = "close";
li.appendChild(borrar);

let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++){
    close[i].onclic = function(){
    let div = this.parentElement;
    div.style.display = "none";    
    }
}


}
