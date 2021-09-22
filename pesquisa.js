// capturando as tags da imagem do botao e da entrada de texto 
let imagem=document.querySelector('#imagem')
let botao=document.querySelector('#buton')
let texto=document.querySelector('#input')

//ao pesquisar um título apenas ele centraliza o titulo e quebra a linha, nao busqui alguma forma de resolver ainda, acho que é coisa do bootstrap que coloquei

// ao clicar no botao é feita a requisição com o parâmetro s da Api, assim é retornado vários resultados correspondentes ao nome que é q passado, em seguida é feito um for para executar a função mostrar em todos os filmes do array retornado pela api

imagem.style.display = 'none'
texto.addEventListener('keyup',function(){

             $.ajax({
                
                url: `https://www.omdbapi.com/?s=${texto.value}&apikey=82aa4d9d`,
                method: "get",
               
                success: (response)=>{
                    
                    console.log(response)

                    imagem.innerHTML=''
                    if(texto.value == ''){
                        imagem.style.display = 'none'
                    }
                    else if(response['Response']=='False'){
                      imagem.style.display = 'flex'
                     imagem.innerHTML='<h2>Filme não encontrado</h2>'
                    }
                    else{
                    imagem.style.display = 'flex'
                   for(let i=0;i<response['Search'].length;i++)
                   
                    mostrar(response['Search'][i])

                   }
                    

                }
               
                        })
                                                
})

function mostrar(objeto){
                   
            if(objeto.Type!='game'){
                if(objeto.Poster=='N/A'){
                    imagem.innerHTML+=`
                <div class="col-md-3">
                <div class='well text-center'>
                <div id="erro" >Imagem não encontrada</div>
                <h5>${objeto.Title}</h5> 
                <p><button type="button" class="btn btn-primary" id='buton'>Detalhes</button></p>
                </div>
                </div>`
                // botao.addEventListener('click',modal(objeto.imdbID))
                }
                    
               
                else{                
                  console.log(objeto.imdbID)
                
                                 
                // imagem.innerHTML+=`
                // <div class="col-md-3">
                // <div class='well text-center'>
                // <img src="${objeto.Poster}" alt="${objeto.Title}" height='300'>
                // <h5>${objeto.Title}</h5>                                    
                // <p><button type="button" class="btn btn-primary" id='buton' onclick()>Detalhes</button></p>
                // </div>
                // `
                modal(objeto.imdbID)
                  // botao.addEventListener('click',modal(objeto.imdbID))
                }
            }
            
            
        }

//  função q que vai requisitar um novo parametro da api e vai colocar um modal em todos os filmes

function modal(param){
  console.log('aaa')
  $.ajax({
          
      url: `https://www.omdbapi.com/?i=${param}&apikey=82aa4d9d`,
      method: "post",
      success: (response)=>{
      
      
      
                imagem.innerHTML+=
            `<div class="col-md-3">
            <div class='well text-center'>
            <img src="${response.Poster}" alt="${response.Title}" height='300'>
            <h5>${response.Title}</h5> 
            <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
            Detalhes
            </button></p>
            
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">${response.Title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src="${response.Poster}" alt="${response.Title}" height='200'>
      <p>Ano: ${response.Year}</p>
      <p>Duração: ${response.Runtime}</p>
      <p>Gênero: ${response.Genre}</p>
      <p>Diretor: ${response.Director}</p>
      <p>Sinopse: ${response.Plot}</p>
      
      </div>
      <div class="modal-footer">
    <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
        
      </div>
    </div>
  </div>
</div>
            </div>
            </div>`         }
           
    })

}