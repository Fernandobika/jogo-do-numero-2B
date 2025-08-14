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
        ultimoResultado.textcontent = "SE FUDEU!!";
        baixoOuAlto.textcontent = "";
        finalizarJogo();
    } else{
        ultimoResultado.textContent = "Errado";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario <numeroAleatorio) {
            baixoOuAlto.textContent = "O ultimo palpite foi muito baixo";
        }else if (palpiteUsuario > numeroAleatorio) 
            } 
    }
            
}
