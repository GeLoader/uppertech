<?php
ob_start();
?>


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Contact-5-Name-2'];
    $email = $_POST['Contact-5-Email-2'];
    $message = $_POST['Contact-5-Message-2'];

    // Validate and sanitize the data if needed.

    $to = 'info@uppertech.net';
    $subject = 'Contact Form Submission';
    $headers = 'From: ' . $email;

    $messageBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Use the mail() function to send the email
    $success = mail($to, $subject, $messageBody, $headers);

    if ($success) {
        header('Location: index.htm');
        ob_end_flush();
    } else {
        echo "Oops! Something went wrong while submitting the form.";
    }
} else {
    // Handle non-POST requests here.
}
?> 



