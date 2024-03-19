function registrarEntrada() {
    var valor = document.getElementById('valor').value;
    var odd = document.getElementById('odd').value;
    var mercado = document.getElementById('mercado').value;
    var tipo = document.getElementById('tipo').value; // Novo campo para o tipo de aposta
    var hora = new Date().toLocaleTimeString(); // Obtém a hora atual

    var registros = document.getElementById('registros');

    var entrada = document.createElement('div');
    entrada.classList.add('entrada');

    var textoEntrada = document.createElement('p');
    textoEntrada.textContent = `Hora: ${hora}, Valor: ${valor}, Odd: ${odd}, Jogo: ${mercado}, Tipo: ${tipo}`;

    var statusSpan = document.createElement('span');
    statusSpan.textContent = 'Processando'; // Inicializar como Processando
    statusSpan.classList.add('status');

    var editarBtn = document.createElement('button');
    editarBtn.textContent = 'Editar';
    editarBtn.onclick = function() {
        editarStatus(entrada, statusSpan);
    };

    var removerBtn = document.createElement('button');
    removerBtn.textContent = 'Remover';
    removerBtn.onclick = function() {
        removerEntrada(entrada);
    };

    entrada.appendChild(textoEntrada);
    entrada.appendChild(statusSpan);
    entrada.appendChild(editarBtn);
    entrada.appendChild(removerBtn);

    registros.appendChild(entrada);

    // Limpar os campos após o registro
    document.getElementById('valor').value = '';
    document.getElementById('odd').value = '';
    document.getElementById('mercado').value = '';
    document.getElementById('tipo').value = ''; // Limpar o campo do tipo de aposta
}

function editarStatus(entrada, statusSpan) {
    var status = prompt('Digite o novo status (GREEN ou RED):');
    if (status && (status.toLowerCase() === 'green' || status.toLowerCase() === 'red')) {
        statusSpan.textContent = status.toUpperCase();
        calcularLucroPrejuizo(entrada, status);
    } else {
        alert('Por favor, digite um status válido (GREEN ou RED).');
    }
}

function calcularLucroPrejuizo(entrada, status) {
    var odd = parseFloat(entrada.getElementsByTagName('p')[0].textContent.match(/Odd: (\d+(\.\d+)?)/)[1]);
    var valor = parseFloat(entrada.getElementsByTagName('p')[0].textContent.match(/Valor: (\d+(\.\d+)?)/)[1]);
    var lucroPrejuizo;

    if (status.toLowerCase() === 'green') {
        lucroPrejuizo = valor * (odd - 1);
        alert('Lucro: ' + lucroPrejuizo.toFixed(2));
    } else {
        lucroPrejuizo = valor * -1;
        alert('Prejuízo: ' + lucroPrejuizo.toFixed(2));
    }
}

function removerEntrada(entrada) {
    if (confirm('Tem certeza de que deseja remover esta entrada?')) {
        entrada.remove();
    }
}
document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    // Aqui você pode enviar os dados do ticket para o servidor, por exemplo, usando AJAX
    
    // Simulando uma resposta do servidor (você pode remover isso em uma implementação real)
    var responseDiv = document.getElementById("ticket-response");
    responseDiv.innerHTML = "<p>Seu ticket foi enviado com sucesso. Entraremos em contato em breve!</p>";
    responseDiv.style.display = "block";
});

