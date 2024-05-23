document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('form_receta').addEventListener('submit', 
validar)
});
function validar(e) {
  e.preventDefault();
  var msg_nombre = document.getElementById('msg_nombre');
  var msg_email = document.getElementById('msg_email');
  var msg_pais = document.getElementById('msg_pais');
  var msg_imagen = document.getElementById('msg_imagen')
  var msg_tipo = document.getElementById('msg_tipo')
  var msg_alimentacion = document.getElementById('msg_alimentacion')
  var msg_tiempo = document.getElementById('msg_tiempo')
  var msg_ingredientes = document.getElementById('msg_ingredientes')
  var msg_preparacion = document.getElementById('msg_preparacion')

  msg_nombre.innerText = '';
  msg_email.innerText = '';
  msg_pais.innerText = '';
  msg_imagen.innerText = '';
  msg_tipo.innerText = '';
  msg_alimentacion.innerText = '';
  msg_tiempo.innerText = '';
  msg_ingredientes.innerText = '';
  msg_preparacion.innerText = '';

  if(this.querySelector('[name=nombre]').value == '') {
      msg_nombre.style.visibility = "visible"
      msg_nombre.innerText = 'Debes ingresar tu nombre y apellido';
      // return;
  }

  if(! validateEmail(this.querySelector('[name=email]').value)){
      msg_email.style.visibility = "visible"
      msg_email.innerText = 'Debes ingresar un email válido';
      // return;
  }

  if(this.querySelector('[name=pais]').value == '') {
      msg_pais.style.visibility = "visible"
      msg_pais.innerText = 'Debes ingresar el país de origen';
      // return;
  }

  if(this.querySelector('[name=imagen]').value == '') {
    msg_imagen.style.visibility = "visible"
    msg_imagen.innerText = 'Debes seleccionar una imagen para la receta';
    // return;
  }

  if(! this.querySelector('input[name="tipo"]:checked')) {
    msg_tipo.style.visibility = "visible"
    msg_tipo.innerText = 'Debes indicar el tipo de comida';
    // return;
  }

  if(! this.querySelector('input[name="alimentacion"]:checked')) {
    msg_alimentacion.style.visibility = "visible"
    msg_alimentacion.innerText = 'Debes indicar el tipo de alimentación';
    // return;
  }

  if(this.querySelector('[name=tiempo]').value == '') {
    msg_tiempo.style.visibility = "visible"
    msg_tiempo.innerText = 'Debes ingresar el tiempo de cocción';
    // return;
  }

  if(this.querySelector('[name=ingredientes]').value == '') {
    msg_ingredientes.style.visibility = "visible"
    msg_ingredientes.innerText = 'Debes ingresar los ingredientes';
    // return;
  }

  if(this.querySelector('[name=preparacion]').value == '') {
    msg_preparacion.style.visibility = "visible"
    msg_preparacion.innerText = 'Debes ingresar la preparación de la receta';
    return;
  }

  this.submit();
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
 }