function percorreArray(matriz, acao){

	for(var i = 0; i<=matriz.length; i++){
		vetorAtual = matriz[i];
		acao(vetorAtual);
	}
}