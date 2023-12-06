document.addEventListener('DOMContentLoaded', function() {
    botao = document.querySelector('#fechar')
    botao.addEventListener('click', function(event){
        let fechou = true
        localStorage.setItem('fim', fechou)
    })
})