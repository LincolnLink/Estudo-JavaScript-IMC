var pacientes = document.getElementsByClassName("paciente")

percorreArray(pacientes, function(trPaciente){

	var pacienteAtual = pessoa(trPaciente);
	console.log(pacienteAtual.nome);

});