Catalogo=["O Auto da Compadecida","Batman Dark Knight","The Godfather","The Pianist","Trainspotting","Hannibal","Invictus","2 Coelhos",""]
$.ajax({
    
    url: "http://www.omdbapi.com/?i=tt0271383&apikey=e1026f57",
    method: "get",
    success: function (response) {
        console.log(response)
    }
});