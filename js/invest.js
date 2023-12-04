document.addEventListener('DOMContentLoaded', function() {
    //Pop up cielo 
    cielo_img = document.querySelector("#cielo_img")
    cielo_img.addEventListener("touchstart", function(event){
        img = document.createElement('img');
        img.classList.add("pop_cielo")
        img.src = "img/check_popup.jpg";
        cielo_img.appendChild(img);
        img2 = document.createElement('img');
        img2.classList.add("pop_cielo2")
        img2.src = "img/check_popup.jpg";
        cielo_img.appendChild(img2);
    })

    cielo_img.addEventListener("touchend", function(event){
        img = cielo_img.querySelector('.pop_cielo')
        img2 = cielo_img.querySelector('.pop_cielo2')
        img.remove()
        img2.remove()
    })
    
    //Lembrando qual ação foi clicada
    cielo_img.addEventListener("click", function(event){
        acao = 'cielo'
        localStorage.setItem('ação', acao)
    })

    //Pop up itaú
    itau_img = document.querySelector("#itau_img")
    itau_img.addEventListener("touchstart", function(event){
        img = document.createElement('img');
        img.classList.add("pop_itau")
        img.src = "img/check_popup.jpg";
        itau_img.appendChild(img);
    })

    itau_img.addEventListener("touchend", function(event){
        img = itau_img.querySelector('.pop_itau')
        img.remove()
    })

    //Lembrando qual ação foi clicada
    itau_img.addEventListener("click", function(event){
        acao = 'itau'
        localStorage.setItem('ação', acao)
    })

    //Pop petrobras
    petrobras_img = document.querySelector("#petrobras_img")
    petrobras_img.addEventListener("touchstart", function(event){
        img = document.createElement('img');
        img.classList.add("pop_pt")
        img.src = "img/dec_popup.png";
        petrobras_img.appendChild(img);
    })

    petrobras_img.addEventListener("touchend", function(event){
        img = petrobras_img.querySelector('.pop_pt')
        img.remove()
    })

    //Lembrando qual ação foi clicada
    petrobras_img.addEventListener("click", function(event){
        acao = 'petrobras'
        localStorage.setItem('ação', acao)
    })

    //Pop vale
    vale_img = document.querySelector("#vale_img")
    vale_img.addEventListener("touchstart", function(event){
        img = document.createElement('img');
        img.classList.add("pop_vale")
        img.src = "img/neutro_pop.png";
        vale_img.appendChild(img);
    })

    vale_img.addEventListener("touchend", function(event){
        img = vale_img.querySelector('.pop_vale')
        img.remove()
    })

    //Lembrando qual ação foi clicada
    vale_img.addEventListener("click", function(event){
        acao = 'vale'
        localStorage.setItem('ação', acao)
    })

    //Filtro de ações
    cresc = document.querySelector('#Crescente')

    cresc.addEventListener('click', function(event) {
        petrobras_img.style.display = 'none'
        vale_img.style.display = 'none'
    })

    decresc = document.querySelector('#Decrescente')

    decresc.addEventListener('click', function(event) {
        cielo_img.style.display = 'none'
        vale_img.style.display = 'none'
        itau_img.style.display = 'none'
    })

    neutro = document.querySelector('#Neutro')

    Neutro.addEventListener('click', function(event) {
        cielo_img.style.display = 'none'
        petrobras_img.style.display = 'none'
        itau_img.style.display = 'none'
    })

    reset = document.querySelector('#Reset')

    reset.addEventListener('click', function(event){
        cielo_img.style.display = ''
        petrobras_img.style.display = ''
        itau_img.style.display = ''
        vale_img.style.display = ''
    })

    //Verificando se a conta foi vinculada
    user = localStorage.getItem('user')
    if (user != null){
        h1 = document.querySelector('h1')
        h1.innerHTML = 'Saldo: R$999.850,56'
    }
})