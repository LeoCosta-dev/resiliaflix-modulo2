// capturando as tags da imagem do botao e da entrada de texto 
let imagem=document.querySelector('#imagem')
// let botao=document.querySelector('#btn')
let texto=document.querySelector('#input')




    


//ao pesquisar um título apenas ele centraliza o titulo e quebra a linha, nao busqui alguma forma de resolver ainda, acho que é coisa do bootstrap que coloquei

// ao clicar no botao é feita a requisição com o parâmetro s da Api, assim é retornado vários resultados correspondentes ao nome que é q passado, em seguida é feito um for para executar a função mostrar em todos os filmes do array retornado pela api

texto.addEventListener('keyup',function(){

             $.ajax({
                
                url: `http://www.omdbapi.com/?s=${texto.value}&apikey=e1026f57`,
                method: "get",
                error:( exception)=>{if (exception=='Uncaught TypeError')
                    imagem.innerHTML='<h2>Filme não encontrado</h2>'

                },
                success: (response)=>{
                    
                    console.log(response['Search'])

                imagem.innerHTML=''
                   for(let i=0;i<response['Search'].length;i++)
                   
                    mostrar(response['Search'][i])

                }
               
                        })

})

function mostrar(objeto){
        
            
            if(objeto.Type!='game'){
                if(objeto.Poster=='N/A'){
                    imagem.innerHTML+=`
                <div class="col-md-3">
                <div class='well text-center'>
                <div>Imagem não encontrada</div>
                <h5>${objeto.Title}</h5> 
                <p><button type="button" class="btn btn-primary">Detalhes</button></p>
                </div>
                </div>`}
                    
               
                else{
                
                imagem.innerHTML+=`
                <div class="col-md-3">
                <div class='well text-center'>
                <img src="${objeto.Poster}" alt="${objeto.Title}" height='300'>
                <h5>${objeto.Title}</h5>                                    
                <p><button type="button" class="btn btn-primary">Detalhes</button></p>
                </div>
                </div>`
                }
            }
            
            
        }
        
            // console.log('errou')
            // imagem.innerHTML='<h2>Filme não encontrado</h2>'
            
        // }
    
        // }

    
 
