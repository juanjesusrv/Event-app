/* Desarrollador 2 - Validaciones con JavaScript y jQuery

    Crear una nueva rama llamada validaciones-formulario. Implementar validaciones en
    tiempo real en script.js para:

        ● Validar que los campos obligatorios estén completos antes de enviar el
        formulario. USANDO AJAX

        */

            let form = document.getElementById('form');
            let username = document.getElementById('name');
            let mensajeError = document.getElementById('mensaje-name');

            username.addEventListener('input', function() {
                if(username.value.length < 3) { 
                    mensajeError.innerHTML = 'El campo nombre debe tener al menos 3 caracteres';
                    mensajeError.classList.remove('hidden');
                    username.classList.add('ipt-rojo');

                } else {
                    mensajeError.classList.add('hidden');
                    username.classList.remove('ipt-rojo');
                }
            });

            username.addEventListener('focusout', function() {
                if(username.value === '') {
                    mensajeError.innerHTML = 'El campo nombre es obligatorio';
                    mensajeError.classList.remove('hidden');
                    username.classList.add('ipt-rojo');
                } else {
                    mensajeError.classList.add('hidden');
                    username.classList.remove('ipt-rojo');
                }
            });


            let lastName = document.getElementById('lname');
            let mensajeApe = document.getElementById('mensaje-lname');

            lastName.addEventListener('input', function() {
                if(lastName.value.length < 3) {
                    mensajeApe.innerHTML = 'El campo apellido debe tener al menos 3 caracteres';
                    mensajeApe.classList.remove('hidden');
                    lastName.classList.add('ipt-rojo');
                } else {
                    mensajeApe.classList.add('hidden');
                    lastName.classList.remove('ipt-rojo');
                }
            });

            lastName.addEventListener('focusout', function() {
                if(lastName.value === '') {
                    mensajeApe.innerHTML = 'El campo apellido es obligatorio';
                    mensajeApe.classList.remove('hidden');
                    lastName.classList.add('ipt-rojo');
                } else {
                    mensajeApe.classList.add('hidden');
                    lastName.classList.remove('ipt-rojo');
                }
            });

            let job = document.getElementById('job');
            let mensajeJob = document.getElementById('mensaje-job');

            job.addEventListener('input', function() {
                if(job.value.length < 3) {
                    mensajeJob.innerHTML = 'El campo puesto debe tener al menos 3 caracteres';
                    mensajeJob.classList.remove('hidden');
                    job.classList.add('ipt-rojo');
                } else {
                    mensajeJob.classList.add('hidden');
                    job.classList.remove('ipt-rojo');
                }
            });

            job.addEventListener('focusout', function() {
                if(job.value === '') {
                    mensajeJob.innerHTML = 'El campo puesto es obligatorio';
                    mensajeJob.classList.remove('hidden');
                    job.classList.add('ipt-rojo');
                } else {
                    mensajeJob.classList.add('hidden');
                    job.classList.remove('ipt-rojo');
                }
            });


            let company = document.getElementById('company');
            
            let description = document.getElementById('descripText');
            let mensajeDescription = document.getElementById('mensaje-des');

            description.addEventListener('input', function() {
                if(description.value.length < 50 || description.value.length > 300) {
                    mensajeDescription.innerHTML = 'La descripción debe tener entre 50 y 300 caracteres';
                    mensajeDescription.classList.remove('hidden');
                    description.classList.add('ipt-rojo');
                } else {
                    mensajeDescription.classList.add('hidden');
                    description.classList.remove('ipt-rojo');
                }
            });

            description.addEventListener('focusout', function() {
                if(description.value === '') {
                    mensajeDescription.innerHTML = 'El campo descripción es obligatorio';
                    mensajeDescription.classList.remove('hidden');
                    description.classList.add('ipt-rojo');
                } else {
                    mensajeDescription.classList.add('hidden');
                    description.classList.remove('ipt-rojo');
                }
            });


            let descHidden = document.getElementById('des');
            let date = document.getElementById('date');


            let file = document.getElementById('doc');
            let mensajeDoc = document.getElementById('mensaje-doc');

            file.addEventListener('input', function() {
                if(file.files.length > 0) {
                    let fileExtension = file.files[0].name.split('.').pop();
                    let fileSize = file.files[0].size / 1024 / 1024;

                    if(fileExtension !== 'pdf' && fileExtension !== 'jpg') {
                        mensajeDoc.innerHTML = 'El archivo debe ser de tipo PDF o JPG';
                        mensajeDoc.classList.remove('hidden');
                    } else if(fileSize > 2) {
                        mensajeDoc.innerHTML = 'El archivo debe pesar menos de 2MB';
                        mensajeDoc.classList.remove('hidden');
                    } else {
                        mensajeDoc.classList.add('hidden');
                    }
                } else {
                    mensajeDoc.innerHTML = 'Debe adjuntar un archivo';
                    mensajeDoc.classList.remove('hidden');
                }
            });


            let email = document.getElementById('email');
            let mensajeEmail = document.getElementById('menasje-email');

            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            email.addEventListener('input', function() {
                if(!regex.test(email.value)) {
                    mensajeEmail.innerHTML = 'El email no es válido';
                    mensajeEmail.classList.remove('hidden');
                    mensajeEmail.classList.add('ipt-rojo');
                } else {
                    mensajeEmail.classList.add('hidden');
                    mensajeEmail.classList.remove('ipt-rojo');
                }
            });

            email.addEventListener('focusout', function() {
                if(email.value === '') {
                    mensajeEmail.innerHTML = 'El campo email es obligatorio';
                    mensajeEmail.classList.remove('hidden');
                    mensajeEmail.classList.add('ipt-rojo');
                } else {
                    mensajeEmail.classList.add('hidden');
                    mensajeEmail.classList.remove('ipt-rojo');
                }
            });


        form.addEventListener('submit', function(event) { // Añadimos un evento al formulario para capturar el envío
            event.preventDefault(); // Evitamos que el formulario se envíe de forma convencional

            let formData = new FormData(this); // Creamos un objeto FormData con los datos del formulario 

            $.ajax({ // Enviamos el formulario a través de AJAX
                url: 'procesar.php', // Ruta del archivo que procesará el formulario
                type: 'POST', // Método de envío
                data: formData, // Datos a enviar
                success: function(response) { // Función que se ejecuta si la petición es exitosa
                    form.classList.add('hidden'); // Ocultamos el formulario

                },
                cache: false, // No almacenar caché
                contentType: false, // No establecer tipo de contenido
                processData: false // No procesar datos
            });
        });