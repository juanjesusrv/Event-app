<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/logo_starbucks.png" type="image/x-icon">
    <link rel="stylesheet" href="styles.css">
    
    <title>Reserva Evento</title>
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