let numeroAleatorio = Math.floor(Math.random() *100) + 1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite= querySelector('.campoPalpite');
let contagemPalpite = 1;
let botaoReiniciar;

function verificarPalpite(){
    const palpiteUsuario = Number(campoPalpite.value);
    if(contagemPalpites === 1) {
        palpiteUsuario.textContent = "Palpites anteriores:"
    }

    palpites.textContent += palpiteUsuario +" ";

    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = "Parabens! Voce Acertou";
        ultimoResultado.style.backgroundColor = "green"
        baixoOuAlto.textContent ="";
        finalizador();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "SE FUDEU!!";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else{
        ultimoResultado.textContent = "Errado";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario <numeroAleatorio) {
            baixoOuAlto.textContent = "O ultimo palpite foi muito baixo";
        }else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "o ultimo palpite foi muito alto+;
            } 
    }
            
contagemPalpite++;
  campoPalpite.value+"";
  campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalizar Jogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.createElement('button')
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.textContent = 'Reiniciar Jogo';
    botaoReiniciar.classList.add('botaoReiniciar');
    botaoReiniciar.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites= 1;
    const paragrafosReinicar = document.querySelectorAll('paragrafosResultados p');
    for (const paragrafoReiniciar of paragrafosReiniciar) {
    paragrafoReiniciar.textcontent ="";
}

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value ="";
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}


