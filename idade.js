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
            var gênero = 'Masculino'
            if (idade > 0 && idade <= 10){
                img.setAttribute('src','foto-bebe-m.png')
            }else if(idade <= 21){
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade <= 60){
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src','foto-idoso-m.png')
            }
        } else{
            var gênero = 'Feminino'
            if (idade > 0 && idade <= 10){
                img.setAttribute('src','foto-bebe-f.png')
            } else if(idade <= 20){
                img.setAttribute('src','foto-jovem-f.png')
            }else if (idade <= 60){
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos uma pessoa do sexo ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}    