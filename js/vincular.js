document.addEventListener('DOMContentLoaded', function() {
    //limpando armazenamento
    localStorage.clear();
    //Armazenando usuário
    div = document.querySelector('#usuario')

    user = div.querySelector('input[type="text"]')

    submit = div.querySelector('input[type="submit"]')

    submit.addEventListener('click', function(event) {
        value = user.value
        localStorage.setItem('user', value)
    })
})