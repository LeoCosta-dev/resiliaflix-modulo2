if (document.getElementById("cep")) {
    let cep = document.getElementById("cep")
    let reset

    cep.addEventListener("blur", () => {
        if (cep.value == "") {
            document.getElementById("rua").value = ""
            document.getElementById("cidade").value = ""
            document.getElementById("uf").value = ""
            document.getElementById("bairro").value = ""
        }
        else if (validaCep(cep) == "inválido") {
            return cepInvalido(cep)
        }
        else {
            return $.ajax({

                url: "https://viacep.com.br/ws/" + validaCep(cep) + "/json/",
                method: "get",
                success: function (resposta) {
                    autoComplete(resposta)
                }


            }
            )
        }
    })

    function autoComplete(response) {
        if (response.logradouro) {
            document.getElementById("rua").value = response.logradouro
            document.getElementById("cidade").value = response.localidade
            document.getElementById("uf").value = response.uf
            document.getElementById("bairro").value = response.bairro
            cep.style.borderColor = "blue"
            console.log(response)
        } else {
            document.getElementById("rua").value = ""
            document.getElementById("cidade").value = ""
            document.getElementById("uf").value = ""
            document.getElementById("bairro").value = ""
            cep.style.borderColor = "red"
            alert('Cep não encontrado.')
        }
    }

    reset = document.createElement("script")
    reset.textContent = `cep.value=""
         document.getElementById("rua").value = ""
         document.getElementById("cidade").value = ""
         document.getElementById("uf").value = ""
         document.getElementById("bairro").value =""`
    document.querySelector("html").appendChild(reset)
}