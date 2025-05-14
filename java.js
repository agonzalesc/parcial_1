document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const boton = document.getElementById('Enviar');
    const edadInput = document.getElementById('Edad');
    const nombreInput = document.getElementById('Nombre');
    const apellidoInput = document.getElementById('Apellido');
    const correoInput = document.getElementById('Correo');
    const contenedorTarjetas = document.getElementById('contenedorTarjetas');
  
    // Función para verificar la validez del formulario
    function verificarFormulario() {
        // Verifica que todos los campos sean válidos antes de habilitar el botón
        boton.disabled = !formulario.checkValidity();
    }
  
    // Función para validar la edad
    function validarEdad() {
        const edad = parseInt(edadInput.value); // Convierte la edad a un número
        if (edadInput.value !== '' && edad < 0) {
            alert('La edad no puede ser negativa.');
            edadInput.value = '';  // Limpia el campo de edad
            edadInput.focus();     // Enfoca el campo de edad
        }
    }
  
    // Función para crear la tarjeta con los datos ingresados
    function crearTarjeta(nombre,apellido, correo, edad) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card mb-3';
        tarjeta.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${nombre}${ apellido}</h5>
                <p class="card-text">Correo: ${correo}</p>
                <p class="card-text">Edad: ${edad}</p>
            </div>
        `;
        contenedorTarjetas.appendChild(tarjeta); // Añade la tarjeta al contenedor
    }
  
    // Evento que se activa cada vez que el usuario modifica un campo del formulario
    formulario.addEventListener('input', () => {
        validarEdad();
        verificarFormulario(); // Verifica la validez del formulario
    });
  
    // Evento que se activa cuando se envía el formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
  
        const nombre = nombreInput.value;
        const correo = correoInput.value;
        const apellido = apellidoInput.value;
        const edad = edadInput.value;
  
        if (nombre && apellido && correo && edad) {  // Verifica que los campos no estén vacíos
            crearTarjeta(nombre, apellido, correo, edad);  // Crea la tarjeta con los datos
            formulario.reset(); // Limpia el formulario
            boton.disabled = true; // Desactiva el botón nuevamente
        } 
    });
  
    // Asegura que el botón esté deshabilitado al principio
    boton.disabled = true;
});
