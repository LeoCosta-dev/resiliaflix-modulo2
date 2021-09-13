let cep = document.getElementById("cep")
let reset

cep.addEventListener("blur", () => {
    if (cep.value == "") {
        document.getElementById("rua").value = ""
        document.getElementById("cidade").value = ""
        document.getElementById("uf").value = ""
        document.getElementById("bairro").value = ""
    }
    else {
        return $.ajax({

            url: "https://viacep.com.br/ws/" + cep.value + "/json/",
            method: "get",
            success: function (response) {
                document.getElementById("rua").value = response.logradouro
                document.getElementById("cidade").value = response.localidade
                document.getElementById("uf").value = response.uf
                document.getElementById("bairro").value = response.bairro
                console.log(response)
            }
        }
        )
    }
})

reset = document.createElement("script")
reset.textContent = `cep.value=""
         document.getElementById("rua").value = ""
         document.getElementById("cidade").value = ""
         document.getElementById("uf").value = ""
         document.getElementById("bairro").value =""`
document.querySelector("html").appendChild(reset)