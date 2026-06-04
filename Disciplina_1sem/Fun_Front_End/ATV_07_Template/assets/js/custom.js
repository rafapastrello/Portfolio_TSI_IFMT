document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validarFormulario()) return;

    // espelha o e-mail do remetente para reply-to
    document.getElementById("replyto-hidden").value =
      document.getElementById("floatingemail").value.trim();

    var btn = document.getElementById("btn-enviar");
    btn.disabled = true;
    btn.textContent = "Enviando...";

    document.getElementById("form-success").classList.add("d-none");
    document.getElementById("form-error").classList.add("d-none");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          document.getElementById("form-success").classList.remove("d-none");
          form.reset();
        } else {
          document.getElementById("form-error").classList.remove("d-none");
        }
      })
      .catch(function () {
        document.getElementById("form-error").classList.remove("d-none");
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = "Enviar mensagem";
      });
  });
});

function validarFormulario() {
  var nome = document.getElementById("floatingname").value.trim();
  var email = document.getElementById("floatingemail").value.trim();
  var telefone = document.getElementById("floatingphone").value.trim();
  var assunto = document.getElementById("floatingsubject").value;
  var mensagem = document.getElementById("floatingtextarea").value.trim();

  if (nome.length < 3) {
    alert("Por favor, insira um nome válido.");
    document.getElementById("floatingname").focus();
    return false;
  }

  if (email.indexOf("@") === -1 || email.length < 10) {
    alert("Informe um e-mail válido.");
    document.getElementById("floatingemail").focus();
    return false;
  }

  if (telefone.length < 8) {
    alert("Informe um telefone ou WhatsApp válido.");
    document.getElementById("floatingphone").focus();
    return false;
  }

  if (assunto === "") {
    alert("Selecione um assunto.");
    document.getElementById("floatingsubject").focus();
    return false;
  }

  if (mensagem.length < 10) {
    alert("Digite uma mensagem mais detalhada (mínimo 10 caracteres).");
    document.getElementById("floatingtextarea").focus();
    return false;
  }

  return true;
}
