<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $to = 'jakub.palka97@gmail.com'; 
    $subject = 'Wiadomość z formularza kontaktowego';
    $body = "Otrzymałeś wiadomość od: $name\n";
    $body .= "E-mail: $email\n\n";
    $body .= "Wiadomość:\n$message\n";
    $headers = "Od: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Wiadomość została wysłana!'); window.location.href='/';</script>";
    } else {
        echo "<script>alert('Błąd wysyłania wiadomości.'); window.location.href='/';</script>";
    }
}
?>