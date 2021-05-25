if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['token'])) {
 
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6LddrnEaAAAAAE9FO9bRqRnjPnnaEGWeOtcXVIY9';
    $recaptcha_response = $_POST['token'];
 а
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);
    if ($recaptcha->score >= 0.5) {
        return true;
    } else {
        return false;
    }
 
}
 
