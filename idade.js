function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anosite = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (anosite.value.length == 0 || anosite.value > ano ){
        window.alert('ERRO - Verifique os dados preenchidos -')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anosite.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            var gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança masculina
                img.setAttribute('src','foto-bebe-m.png')
            }else if (idade <= 21){
                //Jovem masculino
                img.setAttribute('src','foto-jovem-m.png')
            }else if (idade <= 60){
                //Adulto masculino
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //Idoso masculino
                img.setAttribute('src','foto-idoso-m.png')
            }
        }else{
            var gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança feminina
                img.setAttribute('src','foto-bebe-f.png')
            }else if(idade <= 21){
                //jovem feminina
                img.setAttribute('src','foto-jovem-f.png')
            }else if (idade <=60){
                //adulta feminina
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                //idosa feminina
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}