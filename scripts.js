/* Desarrollador 2 - Validaciones con JavaScript y jQuery

    Crear una nueva rama llamada validaciones-formulario. Implementar validaciones en
    tiempo real en script.js para:

        ● Validar que los campos obligatorios estén completos antes de enviar el
        formulario. USANDO AJAX

        */

            let form = document.getElementById('form');
            let username = document.getElementById('name');
            let lastName = document.getElementById('lname');
            let job = document.getElementById('job');
            let company = document.getElementById('company');
            let description = document.getElementById('descripText');
            let descHidden = document.getElementById('des');
            let date = document.getElementById('date');
            let file = document.getElementById('doc');
            let email = document.getElementById('email');
            

            form.addEventListener('submit', function(event) {
                if(username.value === '' || email.value === '' || description.value === '' || file.files.length === 0) {
                    $.ajax({
                        url: 'procesar.php',
                        type: 'POST',
                        data: {username: username.value, email: email.value, description: description.value, file: file.files.length},
                        success: function(response) {
                            if(response === 'empty') {
                                if(username.value === '') {
                                    username.setCustomValidity('El campo nombre es obligatorio');
                                } else {
                                    username.setCustomValidity('');
                                }

                                if(lastName.value === '') {
                                    lastName.setCustomValidity('El campo apellido es obligatorio');
                                } else {
                                    lastName.setCustomValidity('');
                                }

                                if(job.value === '') {
                                    job.setCustomValidity('El campo puesto es obligatorio');
                                } else {
                                    job.setCustomValidity('');
                                }

                                if(company.value === '') {
                                    company.setCustomValidity('El campo empresa es obligatorio');
                                } else {
                                    company.setCustomValidity('');
                                }

                                if(description.value === '') {
                                    description.setCustomValidity('El campo descripción es obligatorio');
                                } else {
                                    description.setCustomValidity('');
                                }   
                                if(date.value === '') {
                                    date.setCustomValidity('El campo fecha es obligatorio');
                                } else {
                                    date.setCustomValidity('');
                                }

                                if(doc.value === '') {
                                    doc.setCustomValidity('El campo documento es obligatorio');
                                } else {
                                    doc.setCustomValidity('');
                                }

                                if(email.value === '') {
                                    email.setCustomValidity('El campo correo electrónico es obligatorio');
                                } else {
                                    email.setCustomValidity('');
                                }
                        }
                    }
                    });
                    event.preventDefault();
                } 
            });

        

        /*

        ● Verificar que el correo electrónico tenga un formato válido.

        */ 
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            email.addEventListener('input', function() {
                if(!regex.test(email.value)) {
                    $.ajax({
                        url: 'procesar.php',
                        type: 'POST',
                        data: {email: email.value},
                        success: function(response) {
                            if(response === 'invalid') {
                                email.setCustomValidity('El correo electrónico no es válido');
                            } 
                        }
                    });
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
                $.ajax({
                    url: 'procesar.php',
                    type: 'POST',
                    data: {description: description.value},
                    success: function(response) {
                        if(response === 'invalid') {
                            description.setCustomValidity('La descripción debe tener entre 50 y 300 caracteres');
                        }
                    }
                }); 
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
                    $.ajax({
                        url: 'procesar.php',
                        type: 'POST',
                        data: {fileExtension: fileExtension},
                        success: function(response) {
                            if(response === 'invalid') {
                                file.setCustomValidity('El archivo debe ser de tipo PDF o JPG');
                            }
                        }
                    });
                } else if(fileSize > 2) {
                    $.ajax({
                        url: 'procesar.php',
                        type: 'POST',
                        data: {fileSize: fileSize},
                        success: function(response) {
                            if(response === 'invalid') {
                                file.setCustomValidity('El archivo debe pesar menos de 2MB');
                            }
                        }
                    });
                } else {
                    file.setCustomValidity('');
                }

            } else {
                file.setCustomValidity('Debe adjuntar un archivo');
            }
        });
                
                
        /* 

        ● Como extra, intentad el envío de este formulario a través de AJAX y así evitar
        tener que recargar la página una vez enviado el formulario.

        */

        $('#form').submit(function(event) { 
            event.preventDefault(); // Evitamos que el formulario se envíe de forma convencional

            let formData = new FormData(this); // Creamos un objeto FormData con los datos del formulario 

            $.ajax({ // Enviamos el formulario a través de AJAX
                url: 'procesar.php', // Ruta del archivo que procesará el formulario
                type: 'POST', // Método de envío
                data: formData, // Datos a enviar
                success: function(response) { // Función que se ejecuta si la petición es exitosa
                    alert('Formulario enviado correctamente');
                },
                cache: false, // No almacenar caché
                contentType: false, // No establecer tipo de contenido
                processData: false // No procesar datos
            });
        });

        /*

    Hacer commit y push de los cambios*/