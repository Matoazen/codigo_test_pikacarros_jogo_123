class Game {
  constructor() {}

  start() {
    player = new Player();
    player.verificarJogadores();

    form = new Form();
    form.display();

    car1 = createSprite(width/2 - 50, height - 100);
    car2 = createSprite(width/2 + 50, height + 100);
    car1.addImage(car1Img);
    car1.scale = 0.07;
    car2.addImage(car2Img);
    car2.scale = 0.07;
    carmatrix = [car1, car2];
  }
  verificarJogo(){
    database.ref("gameState").on("value", (dados)=>{
        EstadopikaCarrosJogo = dados.val()
    })
  }
  atualizarJogo(estado){
    database.ref("/").update({
      gameState:estado
    })
  }
  playing(){
    Player.obterInformacaoDosJogadores();
    this.lidarComElementos();
    var indiceJogo = 0;
    if(jogadoresInfo != undefined){
      image(pistaImg, 0, -height * 5, width, height * 6)
        for(var indiceDeCadaJogador in jogadoresInfo){
          indiceJogo += 1;
          var x = jogadoresInfo[indiceDeCadaJogador].posicaoX
          var y = jogadoresInfo[indiceDeCadaJogador].posicaoY
          carmatrix[indiceJogo - 1].position.x = x
          carmatrix[indiceJogo - 1].position.y = y
        }
       drawSprites();
    }

  }
  lidarComElementos(){
    form.esconderElementos()
    form.titleImg.hide()
  }
  movimento(){
    if(keyIsDown(UP_ARROW) || keyIsDown("w")){
      player.posY += 10;
      player.atualizarInfoJogador()
    }
    if(keyIsDown(DOWN_ARROW) || keyIsDown("s")){
      player.posY -= 10;
      player.atualizarInfoJogador()
    }
    if(keyIsDown(RIGHT_ARROW) || keyIsDown("d")){
      player.posX += 10;
      player.atualizarInfoJogador()
    }
    if(keyIsDown(LEFT_ARROW) || keyIsDown("a")){
      player.posX -= 10;
      player.atualizarInfoJogador()
    }
  }
}
  