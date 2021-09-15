function validaCep(teste){
    let validaCep = /^[0-9]{8}$/;
    if(validaCep.test(teste.value)){
        return (teste.value).replace(/\D/g, '')
    }else{
        return cepInvalido(teste)
    }
}

function cepInvalido(erro){
    erro.style.borderColor = "red"
    erro.style.color = "red"
    document.getElementById("rua").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("uf").value = ""
    document.getElementById("bairro").value = ""
    return 'inválido'
}

