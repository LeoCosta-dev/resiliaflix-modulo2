// let Catalogo={'O Auto da Compadecida':'tt0271383'
// ,"Batman O cavaleiro das trevas":'tt2098632'
// ,"O Poderoso Chefão":'tt0068646'
// ,"O Pianista":'tt0253474'
// ,"Trainspotting":'tt0117951'
// ,"Hannibal":'tt0212985'
// ,"Invictus":'tt1057500'
// ,"2 Coelhos":'tt1753722'}

// let filme=Object.keys(Catalogo)

let imagem=document.querySelector('#imagem')
let botao=document.querySelector('#btn')
let texto=document.querySelector('#input')
git
if(document.querySelector('#btn')){
    botao.addEventListener('click',function(){
        if(texto.value==filme){}
    
    
    })
    api =$.ajax({
        
        url: `http://www.omdbapi.com/?i=${Catalogo[filme]}&apikey=e1026f57`,
        method: "get",
        success: mostrar(api)
        }
    );
    
    
    
    function mostrar(objeto){
    
        imagem.innerHTML=`<h1>${objeto.title}</h1><p>${objeto.explanation}</p>
        <img src="${objeto.url}" alt="${objeto.title}">`
    
        
    }

}

botao.addEventListener('click',function(){
    console.log("cliquei")

             $.ajax({
                
                url: `http://www.omdbapi.com/?s=${texto.value}&apikey=e1026f57`,
                method: "get",
                success: (response)=>{
                    console.log(response['Search'])

                    // for(let i=0;i<response.Array.length;i++)
                    //     for(let j=0;j<Array.Search.length;j++)
                            
                    // mostrar(Array.Search[i][j])
                   for(let i=0;i<response['Search'].length;i++)
                    mostrar(response['Search'][i])

                }
               
                        })

})




function mostrar(objeto){
    
        
        imagem.innerHTML+=`<h1>${objeto.Title}</h1><p>${objeto.Year}</p>
        <img src="${objeto.Poster}" alt="${objeto.Title}">`
    console.log('eita!')
    }

    
 
