document.addEventListener('DOMContentLoaded', function() {
    let fechou = false
    botao = document.querySelector('#fechar')
    botao.addEventListener('click', function(event){
        fechou = true
        localStorage.setItem('fim', fechou)
    })
})