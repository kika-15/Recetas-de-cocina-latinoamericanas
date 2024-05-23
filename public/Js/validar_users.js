document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('form_login').addEventListener('submit', 
  validar)
  });
  function validar(e) {
    e.preventDefault();
    var msg_email = document.getElementById('msg_email');
    var msg_password = document.getElementById('msg_password');
    var password = document.getElementById('password').value;

    msg_email.innerText = '';
    msg_password.innerText = '';

    if(! validateEmail(this.querySelector('[name=email]').value)){
        msg_email.style.visibility = "visible"
        msg_email.innerText = 'Debes ingresar un email válido';
        // return;
    }

    if(this.querySelector('[name=password]').value == '' || password.length < 8) {
        msg_password.style.visibility = "visible"
        msg_password.innerText = 'Debes ingresar una contraseña de al menos 8 caracteres';
        return;
    }

    this.submit();
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }