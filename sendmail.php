<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->isHTML(true);

//Set who the message is to be sent from
$mail->setFrom('elenafreim@gmail.com', 'Olena Olena');
//Set who the message is to be sent to
$mail->addAddress('elenafreim@gmail.com', 'John Doe');
//Set the subject line
$mail->Subject = 'Hello, this is test';
$body = '<h2>You have a new email</h2>';

if(trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Name:</strong>' . htmlspecialchars($_POST['name']) . '</p>';
}
if(trim(!empty($_POST['email']))) {
    $body .= '<p><strong>Email:</strong>' . htmlspecialchars($_POST['email']) . '</p>';
}
if(trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Message:</strong>' . htmlspecialchars($_POST['message']) . '</p>';
}
$mail->Body = $body;

if(!$mail->send()) {
    $message = 'Error!';
} else {
    $message = 'Your message has been sent!';
}
$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);

?>