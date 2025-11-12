(function(){
    emailjs.init("yNkZwh8swnikQxpXD"); // substitua pela sua public key do EmailJS
  })();

  function enviarEmail(event) {
    event.preventDefault();

    emailjs.sendForm("service_z3prova", "template_4a13sob", event.target)
      .then(function() {
        alert("✅ Mensagem enviada com sucesso! Em breve entraremos em contato.");
        event.target.reset();
      }, function(error) {
        alert("❌ Erro ao enviar mensagem: " + JSON.stringify(error));
      });
  }