<!DOCTYPE html>
<html>
<body>

<?php
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $email = $_POST['email'];
  $number = $_POST['phoneNumber'];
  $subject = $_POST['subjectText'];

  $email_from = '$email.\n';

  $email_subject = 'New Eyeglass Galleria User Message';

  $email_body = "Name: $firstName $lastName.n\".
                  "Email: $email.\n".
                    "Number: $number.\n".
                      "Message: $subject.\n";


  $to = "rosscutsforth@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: main.html");
?>

</body>
</html>
