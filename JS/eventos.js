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

    const inputEmail = document.getElementById('email')
    if (inputEmail && document.getElementById('recupera')) {
        document.getElementById('recupera').addEventListener('click', botaoEnviar(Event))
    }
    
    if(inputEmail && document.getElementById("cep")){
        inputEmail.addEventListener('keyup', ()=>{
            
            let validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
            switch(inputEmail){
                case (validaEmail.test(inputEmail.value)):
                    inputEmail.style.color = "green"
                case(inputEmail == ''):
                    inputEmail.style.color = "black"
                case(validaEmail.test(inputEmail.value) == false):
                    inputEmail.style.color = "red"
            }
        })
    }
}

if(document.getElementById('botao')){
    document.getElementById('botao').addEventListener('click', (event)=>{
        event.preventDefault
        validaForms()
    })
}