    console.log("JS funcionando")
    document.getElementById("formAgendamento").addEventListener("submit", function(event) {
    
        // Impede o recarregamento da página
        event.preventDefault();
    
        // Captura os dados do formulário
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const servico = document.getElementById("servico").value;
        const data = document.getElementById("data").value;
        const horario = document.getElementById("horario").value;
        const observacoes = document.getElementById("observacoes").value;
    
        // Formata a data para o padrão brasileiro
        const dataFormatada = data.split("-").reverse().join("/");
    
        // Monta a mensagem
        const mensagem =
            "Olá! Gostaria de solicitar um agendamento no Beauty Studio Kátia Souza.\n\n" +
            "*Nome:* " + nome + "\n" +
            "*Telefone:* " + telefone + "\n" +
            "*Serviço:* " + servico + "\n" +
            "*Data desejada:* " + dataFormatada + "\n" +
            "*Horário desejado:* " + horario + "\n" +
            "*Observações:* " + (observacoes || "Nenhuma") + "\n\n" +
            "Aguardo a confirmação. Obrigada!";
    
        // Número do WhatsApp do Studio
        const numeroWhatsApp = "5561992681126";
    
        // Codifica a mensagem
        const mensagemCodificada = encodeURIComponent(mensagem);
    
        // Monta o link do WhatsApp
        const linkWhatsApp =
            "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemCodificada;
    
        // Abre o WhatsApp com a mensagem preenchida
        window.open(linkWhatsApp, "_blank");

        console.log(linkWhatsApp)
    
    });

    const campoTelefone = document.getElementById("telefone");

    campoTelefone.addEventListener("input", function () {

    // Remove tudo que não for número
    let numeros = this.value.replace(/\D/g, "");

    // Limita a 11 dígitos
    numeros = numeros.slice(0, 11);

    // Aplica a formatação
    let telefoneFormatado = numeros;

    if (numeros.length > 2) {
        telefoneFormatado =
            "(" + numeros.slice(0, 2) + ") " +
            numeros.slice(2, 3);
    }

    if (numeros.length > 3) {
        telefoneFormatado +=
            " " + numeros.slice(3, 7);
    }

    if (numeros.length > 7) {
        telefoneFormatado +=
            "-" + numeros.slice(7, 11);
    }

    // Atualiza o campo
    this.value = telefoneFormatado;

});

// Validação: exige exatamente 11 dígitos
campoTelefone.addEventListener("blur", function () {

    const numeros = this.value.replace(/\D/g, "");

    if (numeros.length < 11) {
        this.setCustomValidity("Informe um telefone com 11 dígitos.");
    } else {
        this.setCustomValidity("");
    }

});
