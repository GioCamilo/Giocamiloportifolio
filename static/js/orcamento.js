(function(){
    emailjs.init("yNkZwh8swnikQxpXD"); // substitua pela sua public key do EmailJS
  })();

  function enviarEmail(event) {
    event.preventDefault();

    const msg = document.getElementById("statusMsg");

    emailjs.sendForm("service_z3prova", "template_4a13sob", event.target)
    .then(() => {
        msg.textContent = "✅ Mensagem enviada com sucesso! Em breve entraremos em contato.";
        msg.style.color = "green";
        event.target.reset();
    })
    .catch((error) => {
        msg.textContent = "❌ Erro ao enviar: " + error.text;
        msg.style.color = "red";
    });

  }