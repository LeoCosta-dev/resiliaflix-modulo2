let cep = 25213320

$.ajax({
    
    url: "https://viacep.com.br/ws/"+ cep +"/json/",
    method: "get",
    success: function (response) {
        console.log(response)
    }
});