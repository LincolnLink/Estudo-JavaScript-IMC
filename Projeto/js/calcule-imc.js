var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var paciente = {	
	"peso" : tdPeso.textContent,
	"altura" : tdAltura.textContent
};

if(paciente.altura != 0){
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	
	var tdIMC = document.getElementById("imc-2");
	tdIMC.textContent = imc;
} else {
	console.log("Não executei porque altura e igual a zero!!");
}


/*Antigo*/
/*
var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;


var paciente = {	
	"peso" : peso,
	"altura" : altura
};

if(altura != )
	var imc = peso / (altura * altura);
	
	var tdIMC = document.getElementById("imc-1");
	tdIMC.textContent(imc);

	console.log("imc");*/

