//musicas
const catalogoMusica = [
    {name: "Eyes Blue Like The Atlantic", artist:"Sista Prod", img:"imagens/eyes-blue.jpg", background:"imagens/eyes-blue.jpg",musica:"music/Eyes_Blue_Like_The_Atlantic.mp3",},
    {name: "ILY(I Love You Baby)", artist:"Surf Mesa", img:"imagens/ily.jpg", background:"imagens/ily-background.jpg", musica:"music/Surf_Mesa_-_ily(i love you baby).mp3", },
    {name: "Lose You To Love Me", artist:"Selena Gomez", img:"imagens/lose-you-to-love-me.jpg", background:"imagens/lose-you-to-love-me-background.jpg", musica:"music/Selena_Gomez_-_Lose_You_To_Love_Me.mp3", },
    {name: "Tove Lo", artist:"Habits", img:"imagens/love-lo-habits.jpg", background:"imagens/love-lo-habits-background.png", musica:"music/Tove_Lo_-_Habits.mp3", },
    {name: "Last Light", artist:"TABAL", img:"imagens/TABAL-last_light.jpg", background:"imagens/TABAL-last_light-background.jpg", musica:"music/Finally_Home.mp3", },
    {name: "Falling", artist:"Trevor Daniel", img:"imagens/Trevor_Daniel-Falling.jpg", background:"imagens/Trevor_Daniel-Falling-background.jpg", musica:"music/Trevor_Daniel_-_Falling.mp3", },
    {name: "Riptide", artist:"Vance Joy", img:"imagens/Vance_Joy-Riptide.jpg", background:"imagens/Vance_Joy-Riptide-background.jpg", musica:"music/Vance_Joy_- _Riptide.mp3", },
    ]
    
//colocando imagens e musica
let index = 0
let tocar = false
let indexMusicAnterior = catalogoMusica.length -1


const inicio = document.getElementById("inicio")
const fim = document.getElementById("fim")
const barra = document.getElementById("barraProgreso")
const body = document.getElementById("body")
const audio = document.getElementById("music")
const imagem = document.getElementById("imagem")
const nomeMSC = document.getElementById("nomeMSC")
const artistMSC = document.getElementById("artistMSC")

valMusic() 

function valMusic() {
    audio.src = catalogoMusica[index].musica;
    body.style.backgroundImage = `url(${catalogoMusica[index].background})`;
    imagem.style.backgroundImage = `url(${catalogoMusica[index].img})`;
    nomeMSC.innerHTML = catalogoMusica[index].name;
    artistMSC.innerText = catalogoMusica[index].artist,
    audio.addEventListener('loadeddata', () => {
    fim.textContent = segundosParaMinutos(Math.floor(audio.duration))} ) }


//controles
function retroceder() {
    tocar = false;
    index--;
    if (index < 0){
        index = indexMusicAnterior
    }
    valMusic(index);
    audio.pause()
    play1()
};

function avancar(){
    tocar = false;
    index++;
    if (index > 6) {
        index = 0;
    }
    valMusic(index);
    audio.pause()
    play1()
};

barra.value = audio.currentTime

const Vplay = document.getElementById("play")


function menos10() {
    audio.currentTime -= 10
}

function play1() {
    if (tocar == false) {
        audio.play()
        Vplay.src = "botoes/pause_black_24dp.svg"
        tocar = true
    } else if(tocar == true){
        audio.pause()
        Vplay.src ="botoes/play_arrow_black_24dp.svg"
        tocar = false
    }

}
function mais10() {
    audio.currentTime += 10
}
//barra de rolagem
function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = "0" + campoSegundos;
    }

    return campoMinutos + ":" + campoSegundos;
}
audio.addEventListener('timeupdate', atualizarBarra);

function atualizarBarra() {
    barra.max  = audio.duration
    barra.value = 0 
    inicio.textContent = segundosParaMinutos(Math.floor(audio.currentTime))
    if(inicio.innerHTML === fim.innerHTML){
        avancar()
    }}


barra.onchange = ()=>{audio.currentTime = barra.value}
audio.ontimeupdate = ()=>{barra.value = audio.currentTime}


console.log(barra.max);







