function verificar(){
    var data = new Date()
    var atual = data.getFullYear() //vai pegar ano atual
    var site = document.getElementById('txtano') //vai pegar o ano de nascimento
    var res = document.getElementById('res') // vai pegar a resposta
    if (site.value.length == 0 || site.value > atual){
        window.alert('Por favor digite seus dados corretamente para conseguir fazer a verificação...')
    }else{
        var idade = atual - Number(site.value) //Importante lembrar que temos que transformar em Number() o ano do site por estar em string() utilizando o site.value + a fun Number()
        var sexchecked = document.getElementsByName('radsex')
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sexchecked[0].checked){
            res.innerHTML = `Detectamos uma pessoa de ${idade} anos do sexo masculino`
            var gênero = 'Masculino'
            if (idade >= 0 && idade < 10){
                img.setAttribute()
            }
        }else
        {
            res.innerHTML = `Detectamos uma pessoa de ${idade} anos do sexo feminino`
            var gênero = 'Feminino'
        }
}}