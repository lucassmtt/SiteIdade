function verificar(){
    var data = new Date()
    var atual = data.getFullYear() //vai pegar ano atual
    var site = document.getElementById('txtano') //vai pegar o ano de nascimento
    var res = document.getElementById('res') // vai pegar a resposta
    if (site.value.length == 0 || site.value > atual){
        window.alert('Por favor digite seus dados corretamente para conseguir fazer a verificação...')
    }else{
        var idade = atual - Number(site.value) //Importante lembrar que 
        var sexchecked = document.getElementsByName('radsex')
        var gênero = ''
        if (sexchecked[0].checked){
            res.innerHTML = `Detectamos uma pessoa de ${idade} anos do sexo masculino`
            var gênero = 'Masculino'
        }
    }
}