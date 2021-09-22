if (document.getElementById("cep")) {
    function validaCep(teste) {
        let validaCep = /^[0-9]{8}$/;
        if (validaCep.test(teste.value)) {
            return (teste.value).replace(/\D/g, '')
        } else {
            return cepInvalido(teste)
        }
    }

    function cepInvalido(erro) {
        erro.style.borderColor = "red"
        erro.style.color = "red"
        document.getElementById("rua").value = ""
        document.getElementById("cidade").value = ""
        document.getElementById("uf").value = ""
        document.getElementById("bairro").value = ""
        return 'inválido'
    }
}

const inputEmail = document.getElementById('email')
if (inputEmail && document.getElementById('recupera')) {
    document.getElementById('recupera').addEventListener('clicks', (event) => {
        event.preventDefault()
        let validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (validaEmail.test(inputEmail.value)) {
            let mensagem = document.createElement('p')
            mensagem.textContent = 'Link de recuperação enviado para e-mail cadastrado'
            mensagem.setAttribute('id', 'confirma')
            if (!document.getElementById('confirma')) {
                document.getElementById('box').appendChild(mensagem)
                setTimeout(() => {
                    mensagem.remove()
                }, 3000)
            }
            inputEmail.value = ''
        } else {
            let mensagem = document.createElement('p')
            mensagem.textContent = 'E-mail inválido'
            mensagem.setAttribute('id', 'naoconfirma')
            mensagem.style.color = 'red'
            mensagem.style.borderColor = 'red'
            if (!document.getElementById('naoconfirma')) {
                document.getElementById('box').appendChild(mensagem)
                setTimeout(() => {
                    mensagem.remove()
                }, 3000)
            }
            inputEmail.value = ''
        }
    })
}

if(inputEmail && cep){
    inputEmail.addEventListener('blur', ()=>{
        console.log("paçoca");
        let validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if(validaEmail.test(inputEmail.value)){
            inputEmail.style.color = "green"
        }else{
            inputEmail.style.color = "red"
        }
    })
}