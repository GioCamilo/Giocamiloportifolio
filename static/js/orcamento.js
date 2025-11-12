/* global emailjs */

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o EmailJS com sua public key
  if (typeof emailjs !== "undefined") {
    emailjs.init("yNkZwh8swnikQxpXD"); // sua public key
    console.log("EmailJS inicializado com sucesso!");
  } else {
    console.error("❌ Erro: a biblioteca EmailJS não foi carregada.");
  }

  // Função de envio
  window.enviarEmail = function (event) {
    event.preventDefault();
    const msg = document.getElementById("statusMsg");

    emailjs
      .sendForm("service_z3prova", "template_4a13sob", event.target)
      .then(() => {
        msg.textContent =
          "✅ Mensagem enviada com sucesso! Em breve entraremos em contato.";
        msg.style.color = "green";
        event.target.reset();
      })
      .catch((error) => {
        msg.textContent = "❌ Erro ao enviar: " + error.text;
        msg.style.color = "red";
      });
  };
});
