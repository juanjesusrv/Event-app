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

    <section class="left">
        <h2>Prueba</h2>
    </section>
    <section class="right">
        <div class="banner">
            <img src="assets/starbucks_banner.webp" alt="Baner de cafe pistacho">
        </div>

        <div class="form-wrapper">
            <form action="">
                <div class="col">
                    <label for="name">Nombre</label>
                    <p class="sub">Nombre del representante</p>
                    <input type="text" name="name" id="name">
                </div>

                <div class="col">
                    <label for="lname">Apellidos</label>
                    <p class="sub">Apellidos del representante</p>
                    <input type="text" name="lname" id="lname">
                </div>

                <div class="col">
                    <label for="job">Puesto</label>
                    <p class="sub">Cargo que ocupa</p>
                    <input type="text" name="job" id="job">
                </div>

                <div class="col">
                    <label for="company">Compañia</label>
                    <div class="sub">Nombre de la empresa</div>
                    <input type="text" name="company" id="company">
                </div>

                <div class="col">
                    <label for="email">Correo electronico</label>
                    <input type="email" name="email" id="email">
                </div>

                <div class="col">
                    <label for="date">Fecha</label>
                    <input type="date" name="date" id="date">
                </div>

                <div class="col">
                    <label for="doc">Documento</label>
                    <input type="file" name="doc" id="doc">
                </div>

                <div class="row">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>

        <div class="cards-wrapper"></div>

            <?php require_once "footer.php" ?>
    </section>


    </main>

    <script src="scripts.js"></script>
</body>
</html>