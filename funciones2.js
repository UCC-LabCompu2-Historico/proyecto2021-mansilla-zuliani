x=0;
dx=30;
function dibujarX() {
    var canvas = document.getElementById("MyCanvas");
    var cxt = canvas.getContext("2d");

    canvas.width =canvas.width;

    var img = new Image();
    img.src = "Imágenes/corazon.vidas-removebg.png";

    img.onload = function (){
        cxt.drawImage(img,x,0);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}