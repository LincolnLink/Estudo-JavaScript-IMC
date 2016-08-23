
function cla(){ 
	var pacientes = document.getElementsByClassName("paciente")

	percorreArray(pacientes, function(trPaciente){		

			var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
			var pacienteAtual = pessoa(trPaciente);

			var imc = pacienteAtual.calculaIMC();		
			tdImc.textContent = imc;
		}
	);
};



