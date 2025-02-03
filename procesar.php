/**nombre, apellidos, email, telefono, fecha, organizacion */
<?php
    if ($_SERVER['REQUEST_METHOD']==="post") {
           $nombre=htmlspecialchars($_POST["nombre"]);
           $apellidos=htmlspecialchars($_POST["apellidos"]);
           $email=htmlspecialchars($_POST["email"]);
           $telefono=htmlspecialchars($_POST["telefono"]);
           $fecha=htmlspecialchars($_POST["fecha"]);
           $organizacion=htmlspecialchars($_POST["organizacion"]);;
    }

?>