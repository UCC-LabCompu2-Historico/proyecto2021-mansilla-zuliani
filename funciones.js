/**
 * Descripción
 * @ nombre: función para saber si se ingresan letras o números.
 */
addEventListener('load',f);

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length); }

function nombre(id,valor)
{
        if (!isNaN(valor))
        {
            alert("Por favor ingrese solo letras");
            document.nombrejug.jugadorn1.value = "";
        }
}
const palabras=['exterior', 'lamentar', 'sombra', 'germen', 'adrenalina', 'almendra', 'rescate', 'principales',
    'encontramos', 'azul', 'amarillo', 'importantes', 'habitaciones', 'laboratorios', 'nacionalidad', 'laberintos',
    'calculadora', 'enchufe', 'celular', 'estufa', 'sol', 'sal', 'heladera','tostador','computadora','leche','agua',
    'teclado','estudiar', 'tarea','electrodomestico', 'azulejos', 'mermelada', 'helado', 'hamaca', 'almohadon',
    'exhibir', 'cuchillo', 'bostezar', 'tramite', 'dormir'];
const palabra= palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");

document.querySelector('#output').innerHTML = palabraConGuiones;
function f() {
    let contadorfallo=0;
    document.querySelector('#output').innerHTML=palabraConGuiones;
    document.querySelector('#completra').addEventListener('mousedown',a=>
    {
        let fallo=true;
        const letra = document.querySelector('#ingletra').value;
        if (!isNaN(letra))
        {
            alert("Por favor ingrese solo letras");
            document.querySelector('#ingletra').value="";
        }

        for(const i in palabra){
            if(letra==palabra[i]){
                palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
                fallo=false;
            }
        }
        if(fallo){
            contadorfallo++;
            cc();
            document.querySelector('#avocados').style.backgroundPosition=-(130*contadorfallo)+'px 0';
            if (contadorfallo==7){
                alert("Perdiste el juego :( ")
            }
        }else{
            if(palabraConGuiones.indexOf('_')<0){
                alert("Ganaste el juego :)")
            }
        }
        document.querySelector('#output').innerHTML=palabraConGuiones;
        document.querySelector('#ingletra').value="";
    });

}

function cc () {
    var canvas = document.getElementById("puntaje");
    var contex=canvas.getContext("2d");
    var ii = new Image();
    ii.scr = "Imágenes/delete-156119_960_720.png";
    ii.onload= function ()
    {
        contex.drawImage(ii, 0, 0);
    }
}

