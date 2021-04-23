<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require './mailer/Exception.php';
    require './mailer/PHPMailer.php';
    require './mailer/SMTP.php';

    $mail = new PHPMailer(true);
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $name = $_POST['name'];
    $text = $_POST['body'];

try {
    $mail->isSMTP();                                     
    $mail->CharSet = 'UTF-8';
    $mail->Host       = 'smtp.mail.ru';                  
    $mail->SMTPAuth   = true;                            
    $mail->Username   = 'tarabrin181@mail.ru';             
    $mail->Password   = '1234';                    
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  
    $mail->Port       = 587;                             

    $mail->setFrom('tarabrin181@mail.ru', 'Prizmarine');
    $mail->addAddress('agency.prizm@gmail.com');        

    // Content
    $mail->isHTML(true);           
    $mail->Subject = 'Заявка на обратную связь';
    $mail->Body    = '<h1>'.$name.'</h1><h2>'.$phone.'</h2><h2>'.$email.'</h2>'.$text.'<p></p>';
    $mail->AltBody = $name.'\n'.$phone.'\n'.$email.'\n'.$text;

    $mail->send();
    echo 'Заявка успешно отправлена';
} catch (Exception $e) {
    echo "Заявка не была отправлена, ошибка: {$mail->ErrorInfo}";
}


?>
