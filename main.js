const form = document.getElementById('form-comparativo');
const campoA = document.getElementById('campo-a')
const campoB = document.getElementById('campo-b')
let formEValido = false;


function validaNumero(valor) {
    return valor >= 0 ? true : false
}

function validaForm(a, b) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemErro = document.querySelector('.error-message-form');

    if (a < b) {
        const mensagemSucesso = `Tudo certo! O campo B: <b>${b}</b> é maior que o campo A: <b>${a}</b>!`
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
    } else {
        const mensagemErro = 'O número do <b>campo A</b> não pode ser maior que o número do <b>campo B</b>'
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
}

campoA.addEventListener('keyup', function(e){
    console.log(e.target.value);
    numeroEvalido = validaNumero(campoA.value)

    if (!numeroEvalido) {
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        document.getElementById('botao-submit').disabled = true
    } else {
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
        document.getElementById('botao-submit').disabled = false
    }
})

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    numeroEValido = validaNumero(campoB.value)
    campoAvalido = validaNumero(campoA.value)

    if (!numeroEValido) {
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        document.getElementById('botao-submit').disabled = true
    } else if (numeroEValido && !campoAvalido) {
        document.getElementById('botao-submit').disabled = true
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
        document.getElementById('botao-submit').disabled = false
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    formEValido = validaForm(parseInt(campoA.value), parseInt(campoB.value))
    })