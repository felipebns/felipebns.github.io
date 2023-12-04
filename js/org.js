document.addEventListener('DOMContentLoaded', function() {
    //Pop up organização
    org = document.querySelector("#org")
    org.addEventListener("touchstart", function(event){
        img = document.createElement('img');
        img.classList.add("excel")
        img.src = "img/imagem_org.jpg";
        org.appendChild(img);
    })

    org.addEventListener("touchend", function(event){
        img = org.querySelector('.excel')
        img.remove()
    })

    //Verificando se a conta foi vinculada
    user = localStorage.getItem('user')
    if (user == null){
        h1 = document.querySelector('h1')
        h1.style.fontSize = '1rem'
        h1.innerHTML = 'Vincule uma conta antes de continuar'
        document.querySelector('#um').href = "Tela_colocarinfo.html"
        document.querySelector('#dois').href = "Tela_colocarinfo.html"
        document.querySelector('#tres').href = "Tela_colocarinfo.html"
        document.querySelector('#quatro').href = "Tela_colocarinfo.html"
        document.querySelector('#cinco').href = "Tela_colocarinfo.html"
    }
})