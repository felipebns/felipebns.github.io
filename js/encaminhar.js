document.addEventListener('DOMContentLoaded', function() {
    click = localStorage.getItem('ação')

    // Caso itau tenha sido clicado antes
    if (click == 'itau'){
        graf = document.querySelector('.graf')
        graf.src = "img/grafico_subindo.png"
        h2 = document.querySelector('h2')
        h2.innerHTML = 'Ações do Itaú sobem 50%'
        h3 = document.querySelector('h3')
        h3.innerHTML = 'Funcionários do Itaú recebem aumento'
        h4 = document.querySelector('h4')
        h4.innerHTML = 'Itaú está bem como nunca!'
    }

    // Caso cielo tenha sido clicado antes
    if (click == 'cielo'){
        graf = document.querySelector('.graf')
        graf.src = "img/graf_exp.jpg"
        h2 = document.querySelector('h2')
        h2.innerHTML = 'Ações da Cielo crescem 300%'
        h3 = document.querySelector('h3')
        h3.innerHTML = 'MAIOR CRESCIMENTO DE UMA AÇÃO NA HISTÓRIA DA HUMANIDADE'
        h4 = document.querySelector('h4')
        h4.innerHTML = 'Incrível!!'
    }

    // Caso petrobras tenha sido clicado antes
    if (click == 'petrobras'){
        graf = document.querySelector('.graf')
        graf.src = "img/dec_graf.jpg"
        h2 = document.querySelector('h2')
        h2.innerHTML = 'Ações da Petrobras caem 100%'
        h3 = document.querySelector('h3')
        h3.innerHTML = 'Alta volatilidade'
        h4 = document.querySelector('h4')
        h4.innerHTML = 'Ta horroroso!!'
    }

    // Caso vale tenha sido clicado antes
    if (click == 'vale'){
        graf = document.querySelector('.graf')
        graf.src = "img/neutro_graf.jpg"
        h2 = document.querySelector('h2')
        h2.innerHTML = 'Crescimento bem baixo'
        h3 = document.querySelector('h3')
        h3.innerHTML = 'Majoritariamente neutro'
        h4 = document.querySelector('h4')
        h4.innerHTML = 'Estável!'
    }

    //Pop up corretora
    corret_img = document.querySelector("#corret_img")
    corret_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("pop_corret")
        img.src = "img/fechar_img.png";
        corret_img.append(img);
    })

    corret_img.addEventListener("mouseout", function(event){
        img = corret_img.querySelector('.pop_corret')
        img.remove()
    })

    //Verificando se a conta foi vinculada
    user = localStorage.getItem('user')
    console.log(user)
    if (user != null){
        h1 = document.querySelector('h1')
        h1.innerHTML = 'Saldo: R$999.850,56'
    }
})