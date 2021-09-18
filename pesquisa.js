// capturando as tags da imagem do botao e da entrada de texto 
let imagem=document.querySelector('#imagem')
let botao=document.querySelector('#btn')
let texto=document.querySelector('#input')

var Catalogo=['tt0271383','tt0180093','tt0212985','tt1753722','tt1057500','tt0068646','tt0117951','tt1039960','tt0034583','tt0133093','tt0469494','tt0246578']

    for(let i=0;i<Catalogo.length;i++){
        $.ajax({
                
            url: `http://www.omdbapi.com/?i=${Catalogo[i]}&apikey=e1026f57`,
            method: "post",
            success: (response)=>{
                

            imagem.innerHTML+=
            `<div class="col-md-3">
            <div class='well text-center'>
            <img src="${response.Poster}" alt="${response.Title}">
            <h5>${response.Title}</h5> 
            <p><button type="button" class="btn btn-primary">Detalhes</button></p>
            </div>
            </div>`
              

            }
           
                    })

}

    




// ao clicar no botao é feita a requisição com o parâmetro s da Api, assim é retornado vários resultados correspondentes ao nome que é q passado, em seguida é feito um for para executar a função mostrar em todos os filmes do array retornado pela api

botao.addEventListener('click',function(){

             $.ajax({
                
                url: `http://www.omdbapi.com/?s=${texto.value}&apikey=e1026f57`,
                method: "post",
                success: (response)=>{
                    
                    console.log(response['Search'])

                imagem.innerHTML=''
                   for(let i=0;i<response['Search'].length;i++)
                   
                    mostrar(response['Search'][i])

                }
               
                        })

})

function mostrar(objeto){
        try{
            
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
                <img src="${objeto.Poster}" alt="${objeto.Title}">
                <h5>${objeto.Title}</h5> 
                <p><button type="button" class="btn btn-primary">Detalhes</button></p>
                </div>
                </div>`
                }
            }
            // throw "Uncaught TypeError"
        }
        catch(error){
            console.log('errei')
            imagem.innerHTML='<h2>Filme não encontrado</h2>'
            
        }
    
        }

    
 
