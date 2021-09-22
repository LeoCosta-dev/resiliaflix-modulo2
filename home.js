// capturando as tags da imagem do botao e da entrada de texto 
let carrossel = document.querySelector('#carrossel')
// let botao=document.querySelector('#btn')

var Catalogo = ['tt0271383', 'tt0180093', 'tt0212985', 'tt1753722', 'tt1057500', 'tt0068646', 'tt0117951', 'tt1039960', 'tt0034583', 'tt0133093', 'tt0469494', 'tt0246578']

for (let i = 0; i < Catalogo.length; i++) {
  $.ajax({

    url: `http://www.omdbapi.com/?i=${Catalogo[i]}&apikey=e1026f57`,
    method: "post",
    success: (response) => {
      console.log(response)
      carrossel.innerHTML +=
        `<div class="carousel-item active">
            <img src="${response.Poster}" class="d-block w-100" alt="Filme 1">
          </div>`
    }

  })

}




//ao pesquisar um título apenas ele centraliza o titulo e quebra a linha, nao busqui alguma forma de resolver ainda, acho que é coisa do bootstrap que coloquei

// ao clicar no botao é feita a requisição com o parâmetro s da Api, assim é retornado vários resultados correspondentes ao nome que é q passado, em seguida é feito um for para executar a função mostrar em todos os filmes do array retornado pela api


// function mostrar(objeto){


//             if(objeto.Type!='game'){
//                 if(objeto.Poster=='N/A'){
//                     imagem.innerHTML+=`
//                 <div class="col-md-3">
//                 <div class='well text-center'>
//                 <div>Imagem não encontrada</div>
//                 <h5>${objeto.Title}</h5> 
//                 <p><button type="button" class="btn btn-primary">Detalhes</button></p>
//                 </div>
//                 </div>`}


//                 else{

//                 imagem.innerHTML+=`
//                 <div class="col-md-3">
//                 <div class='well text-center'>
//                 <img src="${objeto.Poster}" alt="${objeto.Title}" height='300'>
//                 <h5>${objeto.Title}</h5>                                    
//                 <p><button type="button" class="btn btn-primary">Detalhes</button></p>
//                 </div>
//                 </div>`
//                 }
//             }


//         }

            // console.log('errou')
            // imagem.innerHTML='<h2>Filme não encontrado</h2>'

        // }

        // }



