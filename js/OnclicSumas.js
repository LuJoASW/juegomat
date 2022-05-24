var contar = 0;

if (localStorage.clickcount  == undefined) {
   localStorage.clickcount =1;
} 

function EventoClicImagen(p_imagen)
{
    var NumSeleccionado = p_imagen.id;
    var NumBuscado=G_IMAGEN;

    if (NumSeleccionado != NumBuscado)
    {
        /*alert("Diferente: " + NumSeleccionado + ", " + NumBuscado);*/
        const music = new Audio('audio/mal.mp3');
        music.load();
        music.play();
    }
    else
    {
        /*alert("Iguales: " + NumSeleccionado + ", " + NumBuscado);*/
    /*    const music = new Audio('audio/bien.mp3');
    /*    music.load();
    /*    music.play();        
    /*    bandera='true';*/
    /*    alert(" a ver que se ve : " + localStorage.clickcount);        
    */
      /*  location.href = "file:///D:/Proyecto%20integrador/proyecto%20integrador/img.html"; */
        location.href = "file:///G:/proyecto%20integrador/sumas.html"; 
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    }
}