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



function senha(){
    if(document.getElementById('password2').value !== '' && document.getElementById('password').value !== ''){
            document.getElementById('password2').style.borderColor = 'black'
            document.getElementById('password2').style.color = 'black'
            document.getElementById('password').style.borderColor = 'black'
            document.getElementById('password').style.color = 'black'
        if(document.getElementById('password2').value === '' || document.getElementById('password').value === ''){
            semConfirmar()
        }else if(document.getElementById('password2').value === document.getElementById('password').value){
            document.getElementById('password2').style.borderColor = 'green'
            document.getElementById('password2').style.color = 'green'
            document.getElementById('password').style.borderColor = 'green'
            document.getElementById('password').style.color = 'green'
        }else if(document.getElementById('password2').value !== document.getElementById('password').value){
            console.log("paçoca");
            document.getElementById('password2').style.borderColor = 'red'
            document.getElementById('password2').style.color = 'red' 
        }else if(document.getElementById('password2').value === '' || document.getElementById('password').value === ''){
            console.log("paçoca");
            semConfirmar()
        }
    }

   
}
function semConfirmar(){
    if(document.getElementById('password2').value === '' ){
        document.getElementById('password').style.borderColor = 'black'
        document.getElementById('password').style.color = 'black'
        document.getElementById('password2').style.borderColor = 'red'
        document.getElementById('password2').style.color = 'red'   
    }else if(document.getElementById('password').value === '' ){
        document.getElementById('password2').style.borderColor = 'black'
        document.getElementById('password2').style.color = 'black'
        document.getElementById('password').style.borderColor = 'red'
        document.getElementById('password').style.color = 'red'   
    }
}
function botaoEnviar(parametro){
    parametro.preventDefault()
    let validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if (validaEmail.test(inputEmail.value)) {
        let mensagem = document.createElement('p')
        mensagem.textContent = 'Link de recuperação enviado para e-mail cadastrado'
        mensagem.style.color = 'green'
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
}

function validaForms(){
    let campos = [document.querySelector('#nome').value, 
    document.querySelector('#cep').value, 
    document.querySelector('#numero').value, 
    document.querySelector('#rg').value, 
    document.querySelector('#email').value, 
   document.querySelector('#password').value, 
   document.querySelector('#password2').value]

    for(let i = 0; i > campos.length; i++){
        if(campos[i] == ''){
            if(!document.getElementById('formula')){
                document.getElementById('form-inline').innerHTML= `
                <a id = "formula" href = "pesquisa.html"><p> Cadastro realizado com sucesso! Clique aqui para esccolher seu filme! </p></a>
                `
                document.getElementById('formula').style.color = 'green'
                if(document.getElementById('formula2')){
                    document.getElementById('formula2').remove
                }
            }
        }else{
            if(!document.getElementById('formula2')){
                document.getElementById('form-inline').innerHTML= `
                <a id = "formula2" href = "pesquisa.html"><p> Cadastro incompleto! Reveja o formulário! </p></a>
                `
                document.getElementById('formula2').style.color = 'red'
                if(document.getElementById('formula')){
                    document.getElementById('formula').remove
                }
            }
        }
    }
    
}