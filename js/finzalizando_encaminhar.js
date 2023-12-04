document.addEventListener('DOMContentLoaded', function() {
    //Verificando se a conta foi vinculada
    user = localStorage.getItem('user')
    if (user == null){
        h1 = document.querySelector('h1')
        h1.style.fontSize = '1rem'
        h1.innerHTML = 'Vincule uma conta antes de continuar'
        document.querySelector('#um').href = "Tela_colocarinfo.html"
        document.querySelector('#dois').href = "Tela_colocarinfo.html"
        document.querySelector('#tres').href = "Tela_colocarinfo.html"
    }
})