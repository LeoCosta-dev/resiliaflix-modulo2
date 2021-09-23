
document.querySelector('#redirecionar').addEventListener('click', ()=>{
    location.replace('../HTML/pesquisa.html')
})

document.querySelector('.slide').addEventListener('click', ()=>{
    if(document.querySelector('.poster').style.display = 'none'){
        document.querySelector('.poster').style.display = 'flex'
    }
    else if(document.querySelector('.poster').style.display = 'flex'){
        document.querySelector('.poster').style.display = 'none'
    }
})
