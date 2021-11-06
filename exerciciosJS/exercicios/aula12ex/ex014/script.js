function carregar() {

    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')

    var data = new Date ()
    // var hora = data.getHours ()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) // se a hora estiver entre meia noite e meio dia//
  {
    //BOM DIA
    document.body.style.background = "#fafad2"
     img.src = 'fotomanha.jpg'
    } else if ( hora >= 12 <=18) {
       //BOA tarde//
       document.body.style.background = "#8eb1e0"
       img.src = 'fototarde.jpg'
    } else  {
        //Boa noite//
        img.src = 'fotonoite.jpg'
        document.body.style.background = "#778899"
    }

}