var nombre = document.querySelector("#nombre");
var email = document.querySelector("#email");
var asunto = document.querySelector("#asunto");
var mensaje = document.querySelector("#mensaje")
var form = document.querySelector("#formulario");
var botonEnviar = document.querySelector("#enviar");

botonEnviar.addEventListener("click", function() {
    nombreFormulario = nombre.value;
    correoFormulario = email.value;
    asuntoFormulario = asunto.value;
    mensajeFormulario = mensaje.value;

    console.log(nombreFormulario);
    console.log(correoFormulario);
    console.log(asuntoFormulario);
    console.log(mensajeFormulario);
    
    alert("Formulario enviado: " +
          "\nSu nombre es: " + nombreFormulario +
          "\nSu correo es: " + correoFormulario +
          "\nEl asunto es: " + asuntoFormulario +
          "\nEl mensaje es: " + mensajeFormulario);

    form.reset();
    
});