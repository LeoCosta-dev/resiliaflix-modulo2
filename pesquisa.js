let imagem=document.querySelector('#imagem')
let botao=document.querySelector('#btn')
let texto=document.querySelector('#input')


botao.addEventListener('click',function(){
    console.log("cliquei")

             $.ajax({
                
                url: `http://www.omdbapi.com/?s=${texto.value}&apikey=e1026f57`,
                method: "get",
                success: (response)=>{
                    
                    console.log(response['Search'])

                   
                   for(let i=0;i<response['Search'].length;i++)
                    mostrar(response['Search'][i])

                }
               
                        })

})




function mostrar(objeto){
    
        
        imagem.innerHTML+=`
        <div class="col-md-3">
        <div class='well text-center'>
        <img src="${objeto.Poster}" alt="${objeto.Title}">
        <h5>${objeto.Title}</h5> 
        <p><button type="button" class="btn btn-primary">Detalhes</button></p>
        </div>
        </div>`

        //  console.log('eita!')
    }

    
 
