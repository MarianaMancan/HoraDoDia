function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minuto = data.getMinutes()

  msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
  console.log(hora, minuto)
  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.innerHTML = '<img src="imagemmanha.png">'
    document.body.style.background = '#dcc49f'
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE
    img.innerHTML = '<img src="imagemtarde.png">'
    document.body.style.background = '#d0782e'
  } else {
    //BOA NOITE
    img.innerHTML = '<img src="imagemnooite.png">'
    document.body.style.background = '#4e484b'
  }
}
