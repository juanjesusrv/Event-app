/**nombre, apellidos, email, telefono, fecha, organizacion */
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// comprobar que no esten vacios y renviar con el location de header y ?mensaje=$mensaje 
if ($_SERVER['REQUEST_METHOD'] === "post") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    if (!$nombre) {
        $mesaje = "Error: comprobar campo nombre del formulario ";
        header("Location: index.php?mensaje=$mensaje");
        exit();
    }

    
    $apellidos = htmlspecialchars($_POST["apellidos"]);
    if (!$apellidos) {
        $mesaje = "Error: comprobar campo apellido del formulario";
        header("Location: index.php?mensaje=$mensaje");
        exit();
    }


    $email = htmlspecialchars($_POST["email"]);
    if (!$email) {
        $mesaje = "Error: comprobar campo email del formulario";
        header("Location: index.php?mensaje=$mensaje");
        exit();
    }


    $telefono = htmlspecialchars($_POST["telefono"]);
    if (!$telefono) {
        $mesaje = "Error: comprobar campo telefono del formulario";
        header("Location: index.php?mensaje=$mensaje");
        exit();
    }


    $fecha = htmlspecialchars($_POST["fecha"]);
    if (!$fecha) {
        $mesaje = "Error: comprobar campo fecha del formulario";
        header("Location: index.php?mensaje=$mensaje");
        exit();
    }


    $organizacion = htmlspecialchars($_POST["organizacion"]);;
    if (!$organizacion) {
        $mesaje = "Error: comprobar campo organizacion del formulario";
        header("Location: index.php?mensaje=$mensaje");
        exit();
    }



    //ruta del archivo recibo por formulario
    $ruta="Event-app\subidas";

    //comprobando los datos del archivo

    $nombre_Fichero=$_FILES["fichero"]["name"];
    $tmpName_Fichero=$_FILES["fichero"]["tmp_name"];
    $size_Fichero=$_FILES["fichero"]["size"];
    $tipo_Fichero=$_FILES["fichero"]["type"];


    if ($tipo_Fichero != "application/pdf") {
        $mesaje = "Error: comprobar fichero del formulario";
        header("Location: index.php?mensaje=$mensaje");
        exit();
    }

    $maxSize=2000*2000;

    if ($size_Fichero>$maxSize) {
        $mesaje = "Error: comprobar tamaño del fichero del formulario";
        header("Location: index.php?mensaje=$mensaje");
        exit();
    }

    $rutaDestino=$ruta.basename($nombre_Fichero);
        if (move_uploaded_file($tmpName_Fichero,$rutaDestino)) {
            echo "Archivo subido con exito: ".$nombre_Fichero;
            "<br><br>";
            echo "<p> <embed src='$rutaDestino' type = 'application/pdf' width='600' height='500'</p>";
        }else{
            $mesaje = "Error: no se puedo subir el fichero del formulario";
            header("Location: index.php?mensaje=$mensaje");
            exit();
        }



    //validacion de email php usando filver_var
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

    require 'vendor/autoload.php';
    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = $_ENV["SMTP_HOST"];                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = $_ENV["SMTP_USER"];                      //SMTP username
        $mail->Password   = $_ENV["SMTP_PASS"];                                //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = $_ENV["SMTP_PORT"]; ;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('from@example.com', 'Mailer');
        $mail->addAddress('joe@example.net', 'Joe User');     

        //Attachments

        //Content
        $mail->isHTML(true);                                  
        $mail->Subject = 'Invitacion al evento empresarial ';
        $mail->Body    = 'Hola bunas, hemos recibido sú formulario, muchas gracias por contar con nosotros, <b>TE ESPERAMOS PRONTO</b>';

        $mail->send();
        echo 'Mensaje enviado de forma correcta al destinatario';
    } catch (Exception $e) {
        echo "No se puedo enviar el mensaje de forma correcta. Mailer Error: {$mail->ErrorInfo}";
    }
}

?>