var contar = 0;

function EventoClicImagen(p_imagen)
{
    var NumSeleccionado = p_imagen.id;
    var NumBuscado=p_imagen.attributes.custom.value;

    if (NumSeleccionado != NumBuscado)
    {
        /*alert("Diferente: " + NumSeleccionado + ", " + NumBuscado);*/
        const music = new Audio('audio/sonido.mp3');
        music.load();
        music.play();
    }
    else
    {
        /*alert("Iguales: " + NumSeleccionado + ", " + NumBuscado);*/
    /*  const music = new Audio('audio/burbuja.mp3');
    /*  music.load();
    /*  music.play();       
    /*  bandera='true';*/
       /* alert(" a ver que se ve : " + localStorage.clickcount);  */   
 
        location.href = "file:///C:/Users/LENOVO/Desktop/Proyecto integrador 1/img.html"; 
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    }

 

// If ((contar=5))
//{
//Nivel==2
//}
//if ((contar=10))
//{
//Nivel==3
//}
//if ((contar=15))
//{
//Nivel==1
//}

 


}