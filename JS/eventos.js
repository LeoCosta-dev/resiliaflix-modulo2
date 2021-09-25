let inputEmail = document.getElementById('email')

if(document.querySelector('#redirecionar')){

    document.querySelector('#redirecionar').addEventListener('click', ()=>{
        location.replace('../HTML/pesquisa.html')
    })
}

if(document.getElementById('password2')){
    document.getElementById('password2').addEventListener('keyup', ()=>{
        senha()
    })
}

if(document.getElementById('email')){

    if (inputEmail && document.getElementById('recupera')) {
        document.getElementById('recupera').addEventListener('click', (event)=>{
            event.preventDefault()
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
            }})
    }
    
    if(document.getElementById("cep")){
        inputEmail.addEventListener('blur', ()=>{
            
            let validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
            
                if(validaEmail.test(inputEmail.value)){
                    console.log('paçoca');

                    inputEmail.style.border = 'green 2px solid'
                }
                else if(inputEmail.value == ''){

                    inputEmail.style.border = 'none'
                }
                else{

                    inputEmail.style.border = 'red 2px solid'
                }
                
                
        })
    }
}

