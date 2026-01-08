
window.addEventListener('load', function() { 
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preloader-hidden');


 // Function to decrypt the email address
    function decryptEmail(encryptedEmail) {
      let decryptedEmail = atob(encryptedEmail);
      return decryptedEmail;
    }

    // Encrypted email address (replace with your actual encrypted email)
    const encryptedEmail = "Z2lvY2FtaWxvZGV2QGdtYWlsLmNvbQ=="; 

    // Get the element where the email will be displayed
    const emailElement = document.getElementById('encrypted-email');

    // Decrypt and set the email address, and make it a clickable link
    if (emailElement) {
      const decryptedEmailAddress = decryptEmail(encryptedEmail);
      emailElement.innerHTML = `<a href="mailto:${decryptedEmailAddress}" style="color:white;">${decryptedEmailAddress}</a>`;
    }
    });
  