function mostrarRaqt(x,y){
	//Cria raquete com as variaveis de posiçãox,y do centro,largura e altura.
	rect(x,y,widthRaqt,heightRaqt); 
}

function movimentoRaqt()
{
	//Faz se mover pra cima
	if (keyIsDown(UP_ARROW)) {
    yRaqt -= 5;
  }
	//Faz se mover pra baixo
  if (keyIsDown(DOWN_ARROW)) {
    yRaqt += 5;
  }
	
}

function colisaoBiblioteca(x,y){
	colidiu = 
	collideRectCircle(x, y,widthRaqt, heightRaqt, xBall, yBall, raio)
	if(colidiu){
		velocidadeBallX *= -1;
	}
}

function movimentoRaqtOp(){
	 yVeloOponente = yBall - yRaqtO - widthRaqtO /2 - 30
	 yRaqtO+=yVeloOponente
}

/*function bordaRaqt(){
	if (yRaqt < 0){
		yRaqt = 0;
	
	}
	if(yRaqt > height){
		yRaqt = heigth
	}
}
*/

/*function colisaoBallRaqt(){
	
	if (xBall - raio < xRaqt+widthRaqt && yBall - raio > yRaqt-heightRaqt && yBall + raio > yRaqt){
		velocidadeBallX *= -1;
	}
	// por algum motivo essa porra não valida pra baixo
	
}

*/


