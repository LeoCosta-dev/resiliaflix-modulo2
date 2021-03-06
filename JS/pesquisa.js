// capturando as tags da imagem do botao e da entrada de texto 
let imagem = document.querySelector('#imagem')
let botao = document.querySelector('#buton')
let texto = document.querySelector('#input')
// dom dos elementos do post
let gender = document.querySelector('#gender')
let year = document.querySelector('#year')
let runtime = document.querySelector('#runtime')
let director = document.querySelector('#director')
let plot = document.querySelector('#plot')
let title = document.querySelector('#title')
let imgpost = document.querySelector('#imgpost')
let close = document.querySelector('#close-model')
let closei = document.querySelector('#close-model-i')
let staticmodal = document.querySelector('#modal')


//ao pesquisar um título apenas ele centraliza o titulo e quebra a linha, nao busqui alguma forma de resolver ainda, acho que é coisa do bootstrap que coloquei

// ao clicar no botao é feita a requisição com o parâmetro s da Api, assim é retornado vários resultados correspondentes ao nome que é q passado, em seguida é feito um for para executar a função mostrar em todos os filmes do array retornado pela api
if (imagem) {

  imagem.style.display = 'none'
  texto.addEventListener('keyup', function () {

    $.ajax({

      url: `https://www.omdbapi.com/?s=${texto.value}&apikey=82aa4d9d`,
      method: "post",

      success: (response) => {

        // console.log(response)

        imagem.innerHTML = ''
        if (texto.value == '') {
          imagem.style.display = 'none'
          document.getElementById("tapaburaco").style.display = "flex"
        }
        else if (response['Response'] == 'False') {
          imagem.style.display = 'flex'
          document.getElementById("tapaburaco").style.display = "none"
          imagem.innerHTML = '<h2>Filme não encontrado</h2>'
        }
        else {
          imagem.style.display = 'flex'
          document.getElementById("tapaburaco").style.display = "none"
          for (let i = 0; i < response['Search'].length; i++)

            mostrar(response['Search'][i])

        }


      }

    })

  })

  function mostrar(objeto) {

    if (objeto.Type != 'game') {
      if (objeto.Poster == 'N/A') {
        imagem.innerHTML += `
                  <div class="col-md-3">
                  <div class='well text-center'>
                  <div id="erro" >Imagem não encontrada</div>
                  <h5>${objeto.Title}</h5> 
                  <p><button
        onclick="add_modal('${objeto.imdbID}')"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Detalhes
        </button></p>
                  </div>
                  </div>`
        // botao.addEventListener('click',addmodal2(objeto.imdbID))
      }


      else {
        console.log(objeto.imdbID)


        imagem.innerHTML += `
                  <div class="col-md-3">
                  <div class='well text-center'>
                  <img src="${objeto.Poster}" alt="${objeto.Title}" height='300'>
                  <h5>${objeto.Title}</h5>                                    
                  <p><button
        onclick="add_modal('${objeto.imdbID}')"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Detalhes
        </button></p>
                  </div>`
      }
    }


  }

  //  função q que vai requisitar um novo parametro da api e vai colocar um modal em todos os filmes


  function add_modal(param) {

    $.ajax({

      url: `https://www.omdbapi.com/?i=${param}&apikey=82aa4d9d`,
      method: "post",
      success: (response) => {
        console.log(response)
        title.innerHTML = response.Title
        year.innerHTML = `Ano: ${response.Year}`
        gender.innerHTML = `Gênero: ${response.Genre}`
        plot.innerHTML = `Sinopse: ${response.Plot}`
        imgpost.setAttribute('src', `${response.Poster}`)
      }

    })
    staticmodal.style.display = 'block'

  }

  function closemodel() {
    staticmodal.style.display = 'none'
  }
}