n=0;
var res=G_IMAGEN;
var r=0;

do
{
 prc=Math.floor(Math.random() * 3.75);
}while(prc==0);

// alert (prc);
function VecImagenes(){
    n = 0;
    this[n++] = "img/n01.png";
    this[n++] = "img/n02.png";
    this[n++] = "img/n03.png";
    this[n++] = "img/n04.png";
    this[n++] = "img/n05.png";
    this[n++] = "img/n06.png";
    this[n++] = "img/n07.png";
    this[n++] = "img/n08.png";
    this[n++] = "img/n09.png";
    this[n++] = "img/n10.png";
    this[n++] = "img/n11.png";
    this[n++] = "img/n12.png";
    this[n++] = "img/n13.png";
    this[n++] = "img/n14.png";
    this[n++] = "img/n15.png";
    this[n++] = "img/n16.png";
    this[n++] = "img/n17.png";
    this[n++] = "img/n18.png";
    this[n++] = "img/n19.png";
    this[n++] = "img/n20.png";
    this.N=n;

}

   var Imagenes=new VecImagenes();

   var respuestaAleatoria2= 0;
 
    for (var i=0; i < 3; i++) {
       if(i+1 == prc)
      {
         src = Imagenes[res - 1];
         r=src;
         }
          else
         {

           do
           {
               var respuestaAleatoria = Math.floor(Math.random() * Imagenes.N);  


           }while((respuestaAleatoria==res)||(respuestaAleatoria==respuestaAleatoria2)); 
           src = Imagenes[respuestaAleatoria-1]; 
           respuestaAleatoria2 = respuestaAleatoria; 
        }


        document.write("<IMG SRC=" + src + " custom=" + NUM_IMAGENES + " id=" + src.substr(src.length - 6, 2) + " onclick=EventoClicImagen(this)>"); 

}