<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/logo_starbucks.png" type="image/x-icon">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
    <link rel="stylesheet" href="styles.css">
    
    <title>Starbucks | Event</title>
</head>
<body>
    
    <?php require_once "header.php" ?>
    <main>

    <div class="title">
        <h2>Evento Starbucks</h2>
        <h3>Entradas</h3>
    </div>
    <div class="form-wrapper">
        <form action="">
            <!-- nombre, apellidos, email, telefono, fecha, organizacion -->
             <div class="personal-data">
                <label for="">Datos Personales</label>
                <div class="int-data-row">
                    <input type="text" name="nombre" id="nombre" placeholder="">
                    <input type="text" name="" id="">
                </div>
             </div>
        </form>
    </div>
    </main>
    <?php require_once "footer.php" ?>
    <script src="scripts.js"></script>
</body>
</html>