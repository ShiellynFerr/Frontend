function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERRO!] Verifique os dados e tente novamente.')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade} anos`
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id' , 'foto')
        img.style.width = '150px'
        img.style.height ='150px'
        img.style.border = '50%'
        img.style.alignItems ='center'
        

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src' , 'fotomenino.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src' , 'fotojovemm.jpg')
            } else if (idade >= 22 && idade <= 39) {
               // adulto
                img.setAttribute('src', 'fotojovemh.jpg')
            } else if (idade >= 40 && idade <60) {
                //meia idade
                img.setAttribute('src', 'homemmeiaidade.jpg')
            } else if (idade >= 60 && idade < 150){
                // idoso
                img.setAttribute('src', 'fotoidoso.jpg')
            } else {
                //dead
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //Criança
            } else if (idade < 21) {
                //Jovem
            } else if (idade <39) {
                adulto
            } else if (idade >= 40 && idade <60) {
                //meia idade
            } else if (idade >= 60 && idade < 150){
                // idoso
            } else {
                //dead
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `${genero} com ${idade} anos de idade`
        res.appendChild(img)

    }
}