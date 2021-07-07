function dibujarX() {
    var canvas = document.getElementById("MyCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "Imágenes/corazon_vidas.png";
    img.onload = function (){
        ctx.drawImage(img,0,0);
    }
}