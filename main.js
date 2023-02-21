const form = document.getElementById('form-comparacao');

function numerosInteiros(valorA, valorB) {
    var valorIntA = parseInt(valorA)            // Função para transformar os valores em int,
    var valorIntB = parseInt(valorB)            // fiz essa função porque na hora de comparar ele estava dizendo que o valor de "3" era maior que "12",
    return [valorIntA, valorIntB]               // acho que ele devia estar identificando o valor digitado como uma string, por isso criei a função.
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('valor-a');
    const numeroB = document.getElementById('valor-b');

    const containerMensagemSucesso = document.querySelector('.sucess-message');
    const containerMensagemErro = document.querySelector('.error-message');
    const containerMensagemIgual = document.querySelector('.equal-message');

    const mensagemSucesso = `O valor de B(${numeroB.value}) é <b>MAIOR</b> do que o valor de A(${numeroA.value})` //MensagemSucesso
    const mensagemErro = `O valor de B(${numeroB.value}) é <b>MENOR</b> do que o valor de A(${numeroA.value})`    //MensagemErro
    const mensagemIgual = `O valor de B(${numeroB.value}) é <b>IGUAL</b> do que o valor de A(${numeroA.value})`   //MensagemErro (caso os valores sejam iguais)
    

    formEValido = numerosInteiros(numeroA.value, numeroB.value)

    if (formEValido[0] < formEValido[1]) {
        
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        containerMensagemIgual.style.display = 'none';

    } else if (formEValido[0] === formEValido[1]) {

        containerMensagemIgual.innerHTML = mensagemIgual
        containerMensagemIgual.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        containerMensagemSucesso.style.display = 'none';

    } else {
        
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
        containerMensagemIgual.style.display = 'none';
    }

document.getElementById('valor-a').value = '';
document.getElementById('valor-b').value = '';

})

console.log(form)