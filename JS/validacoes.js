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
        }
    }

   
}



