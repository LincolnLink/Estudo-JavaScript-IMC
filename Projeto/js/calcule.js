var botao = document.getElementById("calcula-imcs");
/*botao.onclick = calculaTodosIMC;*/

botao.addEventListener("click", function(){
		var pacientes = document.getElementsByClassName("paciente")

		percorreArray(pacientes, function(trPaciente){		

				var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
				var pacienteAtual = pessoa(trPaciente);

				var imc = pacienteAtual.calculaIMC();		
				tdImc.textContent = imc;
			}
		);
	}

);
