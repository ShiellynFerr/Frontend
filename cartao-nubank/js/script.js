const card = document.querySelector('.container-cartao');

//adicionando evento mouse move responsavel por localizar as cornadas do mouse
//O evento será disparado quando o mouse for passado em cima do cartão
card.addEventListener("mousemove", cardEffect);

//quando o mouse for retirado do cartão ele voltará para a posição inicial
card.addEventListener("mouseleave", mouseBack);

card.addEventListener("mouseenter", cardEnter );

function cardEffect(event) {
 const cardLargura = card.offsetWidth; //pega a largura
 const cardAltura = card.offsetHeight; // pega a altura
 const  eixoX = card.offsetLeft + cardLargura/2 //localiza o centro do cartao no eixo X
 const  eixoY = card.offsetTop + cardAltura/2 //localiza a cordenada central no eixo Y
 const positionX = event.clientX - eixoX; //localiza a cordernada do mouse no eixo X
 const positionY = event.clientY - eixoY; //localiza a cordernada do mouse no eixo Y

 const rotateX = (+1)*25*positionX/(cardAltura/2)
 const rotateY = (-1)*25*positionY/(cardAltura/2)

 card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `
}

function mouseBack(event){
  card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg) `
  cardTransition();
}

function cardTransition(){
  clearInterval(card.transitionId);
  card.style.transition = `transform 180ms`
  card.transitionId = setTimeout(() => {
    card.style.transition = '';
  }, 400)
}

function cardEnter(event){
  cardTransition()
}
//card.offsetTop = pega a distancia entre o container do cartaon e a borda da parte de cima
//da pagina