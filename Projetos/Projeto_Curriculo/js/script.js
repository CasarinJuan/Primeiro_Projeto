function nome(){
    alert("Está empregado!");
}
function fotoEscurecida(){
    const foto = document.getElementById('foto')
    console.log(foto.src)
    if(foto.name === "escura"){
        foto.src = "/imagens/foto.jpg"
        foto.name = "clara"
    }
    else{
        foto.src = "/imagens/fotoEscurecida.jpg"
        foto.name = "escura"
    }
}

function VoltaPagina(){
    window.history.back();
}

function FotoDiploma(){
    let el = document.getElementById('diploma');
    el.style.cssText = 
        'display: block';  
}

function proxima(current,next){
    let currentVacancyElement = document.getElementById(current);
    currentVacancyElement.style.display ="none"
    let nextVacancyElement = document.getElementById(next);
    nextVacancyElement.style.display ="block"
}

function anterior(current,previous){
    let currentVacancyElement = document.getElementById(current);
    currentVacancyElement.style.display ="none"
    let previousVacancyElement = document.getElementById(previous);
    previousVacancyElement.style.display ="block"
}

async function verVideo(){
    console.log();
    const video = document.querySelector('#video');
    await video.requestPictureInPicture();
}
