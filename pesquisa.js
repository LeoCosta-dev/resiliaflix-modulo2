Catalogo={'O Auto da Compadecida':'tt0271383'
,"Batman O cavaleiro das trevas":'tt2098632'
,"O Poderoso Chefão":'tt0068646'
,"O Pianista":'tt0253474'
,"Trainspotting":'tt0117951'
,"Hannibal":'tt0212985'
,"Invictus":'tt1057500'
,"2 Coelhos":'tt1753722'}

filme=Object.keys(Catalogo)

let imagem=document.querySelector('#imagem')
let botao=document.querySelector('#btn')
let texto=document.querySelector('#input')
let api=''

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
