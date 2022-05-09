class Player {
  constructor() {
    this.indice = 0
    this.posX = 0.0
    this.posY = 0.111
    this.nome = null
  }
  verificarJogadores() {
    database.ref("playerCount").on("value", (dados)=>{
      EstadoPikachuJogador = dados.val();
  })
  }
  atualizarContagemDeJogadores(quantidade){
    database.ref("/").update({
      playerCount:quantidade
    })
  }
  adicionarJogadores(){
    var indiceDeJogador = "players/player"+ this.indice
    if(this.indice === 1){
      this.posX = width/2 - 100
    } else {
      this.posX = width/2 + 100
    }
      database.ref(indiceDeJogador).set({
       nome:this.nome,
       posicaoX:this.posX,
       posicaoY:this.posY
      })
    }
  static obterInformacaoDosJogadores(){
    database.ref("players").on("value", (dados)=>{
      jogadoresInfo = dados.val();
    })
  }
  atualizarInfoJogador(){
    database.ref("players/player"+ this.indice).update({
      posicaoX:this.posX,
      posicaoY:this.posY
    })
  }
} 
