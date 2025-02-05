<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/logo_starbucks.png" type="image/x-icon">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css"   />
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

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
                        <div id="mensaje-name" class="hidden"></div>
                    </div>

                    <div class="col">
                        <label for="lname">Apellidos</label>
                        <p class="sub">Apellidos del representante</p>
                        <input type="text" name="lname" id="lname">
                        <div id="mensaje-lname" class="hidden"></div>
                    </div>

                    <div class="col">
                        <label for="job">Puesto</label>
                        <p class="sub">Cargo que ocupa</p>
                        <input type="text" name="job" id="job">
                        <div id="mensaje-job" class="hidden"></div>
                    </div>

                    <div class="col">
                        <label for="company">Compañia</label>
                        <div class="sub">Nombre de la empresa</div>
                        <input type="text" name="company" id="company">
                        <div class="sub">Descripción de la empresa</div>
                        <div class="descripText" id="descripText" contenteditable="true">

                        </div>
                        <input type="hidden" name="des" id="des">
                        <div id="mensaje-des" class="hidden"></div>
                    </div>

                    <div class="col">
                        <label for="email">Correo electronico</label>
                        <input type="email" name="email" id="email">
                        <div id="menasje-email" class="hidden"></div>
                    </div>

                    <div class="col">
                        <label for="date">Fecha</label>
                        <input type="date" name="date" id="date">
                    </div>

                    <div class="col">
                        <label for="doc">Documento</label>
                        <div class="carga-doc" id="carga-doc">
                            <i class="material-symbols-outlined">
                                upload_file
                            </i>
                        </div>
                        <input type="file" name="doc" id="doc" hidden="true">
                        <div id="mensaje-doc" class="hidden">
                        </div>
                    </div>

                    <div class="row">
                        <button type="submit">Enviar</button>
                    </div>
                </form>

                <div class="sucess"></div>


                <div class="cards-wrapper">
                    <div class="card-container">
                        <div class="card-row">
                            <img src="assets/starbucks_deliver.webp" alt="Reparto de Starbucks">
                            <div class="card-content">
                                <h3>¡Te lo llevamos!</h3>
                                <h4>Disfruta tu experiencia Starbucks donde quieras</h4>
                                <span class="lesser">¿Eres más de café, de smoothie, de latte o de Frappuccino? No esperes más y pide Starbucks a domicilion o para llevar</span>
                                <button type="button" class="myButton1">Más información</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-container-row">
                        <div class="card-col">
                            <img src="assets/starbucks_carta.webp" alt="Cafe de starbucks">

                            <div class="card-content">
                                <h4>Carta</h4>
                                <span class="lesser">Bebidas deliciosas y alimentos de gran sabor elaborados con ingredientes sencillos pero de gran calidad</span>
                                <button type="button" class="myButton1">Más información</button>
                            </div>
                        </div>
                        <div class="card-col">
                            <img src="assets/starbuckc_tienda.webp" alt="Starbucks tienda">
                            <div class="card-content">
                                <h4>Tiendas Starbucks</h4>
                                <span class="lesser">Encuentra tu tienda Starbucks más cercana, ¡te esperamos!</span>
                                <button type="button" class="myButton1">Más información</button>
                            </div>
                        </div>
                        <div class="card-col">
                            <img src="assets/starbucks_cafe.webp" alt="Starbucks cafe">
                            <div class="card-content">
                                <h4>Cómo preparar café Starbucks</h4>
                                <span class="lesser">Descubre los distintos métodos de eleboración para preparar tu café Starbucks perfecto en casa</span>
                                <button type="button" class="myButton1">Más información</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <?php require_once "footer.php" ?>
        </section>


    </main>

    <script src="scripts.js"></script>
</body>

</html>