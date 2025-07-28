document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio automático do formulário

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const idadeInput = document.getElementById("idade").value;
  const botao = document.getElementById("botao").value;

  const mensagem = document.getElementById("mensagem");

  // Habilita ou desabilita o botão com base na idade
idadeInput.addEventListener("input", function () {
  const idade = parseInt(idadeInput.value);

  if (idade>= 18) {
    botao.disabled = false;
    mensagem.textContent = "vc é maior de idade";
  } else {
    botao.disabled = true;
    mensagem.style.color = "red";
    mensagem.textContent = "Você precisa ter 18 anos ou mais.";
    return;
  }
  });

  if (nome === "" || email === "" || senha === "") {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  if (senha.length < 6) {
    mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

    // Se tudo estiver ok
  mensagem.style.color = "green";
  mensagem.textContent = "Formulário enviado com sucesso!";