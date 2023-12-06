document.addEventListener('DOMContentLoaded', function() {
    let fechou = false
    botao = document.querySelector('#fechar')
    botao.addEventListener('touchstart', function(event){
        fechou = true
        localStorage.setItem('fim', fechou)
    })
})