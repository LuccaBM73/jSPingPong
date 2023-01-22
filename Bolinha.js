// Funcoes da bolinha

function mostraBolinha(){
	// cria o objeto bolinha
	circle(xBall,yBall,diametro); 
}


function movimentoBolinha(){
//movimento da bolinha
// incremento de valor de posição + Velocidade gerando movimento
 xBall+=velocidadeBallX; 
 yBall+=velocidadeBallY; 
}

function validaBorda()
{
 // Blocos de If para tratar a borda da area, sendo width o tamanho maximo alem do 0 para o eixo X e height o tamanho maximo alem do 0 para o eixo Y.
 //No JS não se usa OR para definir condição dentro do parenteses do IF, se usa duplo pipe "||"
 
if (xBall+raio>width || xBall-raio < 0){
		velocidadeBallX *= -1;
	}
  //Para fazer a bolinha bater na borda e voltar é somado e subtraido o valor do raio, pois o ponto central do circulo é o valor que o objeto valida, dessa forma ele não entra metade na parede.
  //Lembrando de Somar para os valores positivos e subtrair para os negativos, se não o ponto de validação vai se tornar o outro extremo da direção do objeto
if (yBall+raio > height || yBall-raio < 0){
		velocidadeBallY*= -1;
	}
}
