
var pacientes = document.getElementsByClassName("paciente")


for(var i = 0; i<=pacientes.length; i++){

	var trPaciente = pacientes[i];

	var tdNome = trPaciente.getElementsByClassName("info-nome")[0];
	var tdPeso = trPaciente.getElementsByClassName("info-peso")[0];
	var tdAltura = trPaciente.getElementsByClassName("info-altura")[0];


	var paciente = {
		nome : tdNome.textContent,	
		peso : tdPeso.textContent,
		altura : tdAltura.textContent
	};


	if(paciente.altura != 0){
		var imc = paciente.peso / (paciente.altura * paciente.altura);
		
		var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;
	} else {
		console.log("Não executei porque altura e igual a zero!!");
	}

}