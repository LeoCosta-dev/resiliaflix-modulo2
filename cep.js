let cep = document.getElementById("cep")

cep.addEventListener("blur", () => {
  return  $.ajax({

        url: "https://viacep.com.br/ws/" + cep.value + "/json/",
        method: "get",
        success: function (response) {
            console.log(response)
        }
    });
})