let cep = document.getElementById("cep")

cep.addEventListener("blur", () => {
  return  $.ajax({

        url: "https://viacep.com.br/ws/" + cep.value + "/json/",
        method: "get",
        success: function (response) {
            document.getElementById("rua").value=response.logradouro
            document.getElementById("cidade").value=response.localidade
            document.getElementById("uf").value=response.uf
            document.getElementById("bairro").value=response.bairro
            console.log(response)
        }
    });
})

