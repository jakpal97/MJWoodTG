<?php
if(isset($_POST['email'])) {
 
   
    $to = "kontakt@mjwoodtg.pl";
    $subject = "Formularz kontaktowy";

    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    
    $message = "
    Imię i nazwisko: $name\n
    Adres email: $email\n
    Wiadomość:\n$message";

    
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    
    mail($to, $subject, $message, $headers);
}
?>