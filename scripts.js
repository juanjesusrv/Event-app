/* Desarrollador 2 - Validaciones con JavaScript y jQuery

    Crear una nueva rama llamada validaciones-formulario. Implementar validaciones en
    tiempo real en script.js para:

        ● Validar que los campos obligatorios estén completos antes de enviar el
        formulario.

        */

            let form = document.getElementById('form');
            let username = document.getElementById('username');
            let email = document.getElementById('email');
            let description = document.getElementById('description');
            let file = document.getElementById('file');

            form.addEventListener('submit', function(event) {
                if(username.value === '' || email.value === '' || description.value === '' || file.value === '') {
                    event.preventDefault();
                    alert('Por favor, complete todos los campos');
                }
            });
        

        /*

        ● Verificar que el correo electrónico tenga un formato válido.

        */
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            email.addEventListener('input', function() {
                if(!regex.test(email.value)) {
                    email.setCustomValidity('Email inválido');
                } else {
                    email.setCustomValidity('');
                }
            });
            

        /*

        ● Controlar la cantidad de caracteres en el campo de "descripción de empresa"
        (mínimo 50, máximo 300 caracteres).

        */
       
        description.addEventListener('input', function() {
            if(description.value.length < 50 || description.value.length > 300) {
                description.setCustomValidity('La descripción debe tener entre 50 y 300 caracteres');
            } else {
                description.setCustomValidity('');
            }
        });

        /*

        ● Validar que se adjunte un archivo de tipo .pdf o .jpg con un peso máximo de
        2MB.

        */
       
        file.addEventListener('input', function() {
            if(file.files.length > 0) {
                let fileExtension = file.files[0].name.split('.').pop();
                let fileSize = file.files[0].size / 1024 / 1024;

                if(fileExtension !== 'pdf' && fileExtension !== 'jpg') {
                    file.setCustomValidity('El archivo debe ser de tipo .pdf o .jpg');
                } else if(fileSize > 2) {
                    file.setCustomValidity('El archivo debe pesar menos de 2MB');
                } else {
                    file.setCustomValidity('');
                }

            } else {
                file.setCustomValidity('Debe adjuntar un archivo');
            }
        });

        /*

        ● Mostrar mensajes de error dinámicos en caso de que falte información o se
        ingrese un dato incorrecto.

        */
       
        window.onload = function() {
            
        }

        /*

        ● Como extra, intentad el envío de este formulario a través de AJAX y así evitar
        tener que recargar la página una vez enviado el formulario.

        */
       /* 
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();

            let formData = new FormData(this);

            fetch('procesar.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById('respuesta').innerText = data;
            })
            .catch(error => console.error('Error:', error));
        });
        
        */

        //Opción usando jQuery 

        /*

    Hacer commit y push de los cambios*/