var contar = 0;
if(localStorage.clickcount == undefined){
    localStorage.clickcount=1;
}

function EventoClicImagen(p_imagen)
{
    var NumSeleccionado = p_imagen.id;
    var NumBuscado=p_imagen.attributes.custom.value;


    if (NumSeleccionado != NumBuscado)
    {
        const music = new Audio('audio/respuestaincorrecta.mp3');
        music.load();
        music.play();
    }
    else
    {
     
       

        location.href = "file:///G:/proyecto%20integrador/img.html"; 
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    }

}