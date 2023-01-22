function setup() 
{
  createCanvas(400, 400);
}

function draw() {
//na function draw temos apenas a chamada das outras funções para deixar de forma mais clara e organizada o nosso código.
	background(000);
	validaBorda();
	mostraBolinha();
	movimentoBolinha();
	
	//na function draw temos apenas a chamada das outras funções para deixar de forma mais clara e organizada o nosso código.
	//Começamos agora a informar as funçoes da raquete
	
	mostrarRaqt(xRaqt,yRaqt);
	movimentoRaqt();
	//colisaoBallRaqt();
	//bordaRaqt();
	colisaoBiblioteca(xRaqt,yRaqt); 
	
	//raquete oponente
	mostrarRaqt(xRaqtO,yRaqtO);
	movimentoRaqtOp();
	colisaoBiblioteca(xRaqtO,yRaqt);
	
}

//APENAS FUNCOES NA DRAW ou testes :P


