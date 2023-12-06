document.addEventListener('DOMContentLoaded', function() {
    //Pop up INVESTIR
    invest_img = document.querySelector("#invest_img")
    invest_img.addEventListener("touchstart", function(event){
        img = document.createElement('img');
        img.classList.add("pop_invs")
        img.src = "img/investir_popup.jpg";
        invest_img.appendChild(img);
    })

    invest_img.addEventListener("touchend", function(event){
        img = invest_img.querySelector('.pop_invs')
        img.remove()
    })

    //Pop up Vídeos/Org. Fin
    orgfin_img = document.querySelector("#orgfin_img")
    orgfin_img.addEventListener("touchstart", function(event){
        img = document.createElement('img');
        img2 = document.createElement('img');
        img.classList.add("pop_org")
        img2.classList.add("pop_yt")
        img.src = "img/imagem_org.jpg";
        img2.src = "img/yt_popup.png";
        orgfin_img.appendChild(img);
        orgfin_img.appendChild(img2);
    })

    orgfin_img.addEventListener("touchend", function(event){
        img = orgfin_img.querySelector('.pop_org')
        img2 = orgfin_img.querySelector('.pop_yt')
        img.remove()
        img2.remove()
    })

    // Pop up Vincular conta
    vinc_img = document.querySelector("#vinc_img")
    vinc_img.addEventListener("touchstart", function(event){
        img = document.createElement('img');
        img.classList.add("pop_vinc")
        img.src = "img/vincular_popup.png";
        vinc_img.appendChild(img);
    })

    vinc_img.addEventListener("touchend", function(event){
        img = vinc_img.querySelector('.pop_vinc')
        img.remove()
    })

    //Verificando se usuário fez login
    user = localStorage.getItem('user')
    if (user != null){
        nome = document.querySelector('#nome')
        nome.innerHTML = 'Olá, '+user+'!'

        investimentos = document.querySelector('.acao')
        investimentos.style.display = 'block'
    }

    //Verificando se foi completo uma ação
    fechou = localStorage.getItem('fim')
    console.log(fechou)
    acao = localStorage.getItem('ação')
    if (fechou = true && acao != null){
        fechou = false
        ac = document.querySelector('#add_acao')
        img = document.createElement('img')
        img.classList.add('novo')
        img.src = "img/invest/"+acao+'.png'
        ac.appendChild(img)
    }
})