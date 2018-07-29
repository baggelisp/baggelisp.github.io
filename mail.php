<?php

$name=$_POST['Name'];
$subject="New mail from contact form - Personal Portfolio";
$mailFrom=$_POST['Email'];
$message=$_POST['Message'];


$mailTo="baggelisp.keph@gmail.com";
$headers="Form: ".$mailFrom;
$txt="You have received an e-mail from ".$name;

mail($mailTo,$subject,$txt,$headers);
header("Location: index.php?mailsend") or die("Error!");
echo "Thank You!";

?>
