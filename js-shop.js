const pagina1 = document.querySelector('.pagina-1');
const pagina2 =document.querySelector('.pagina-2');
const pagina3 =document.querySelector('.pagina-3');

pagina2.style.display ='none';
pagina3.style.display ='none';

function mostrarOcultar(pagina) {
    if (pagina == "pagina-1") {
    pagina1.style.display ='flex';
    pagina2.style.display ='none';
    pagina3.style.display ='none';
    }
    
    else if (pagina == "pagina-2") {
    pagina1.style.display ='none';
    pagina2.style.display ='flex';
    pagina3.style.display ='none';    
    }

    else if (pagina == "pagina-3") {
    pagina1.style.display ='none';
    pagina2.style.display ='none';
    pagina3.style.display ='flex';
       }

    }