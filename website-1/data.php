<?php
if (isset($_post('button')))
$name=$_post['Name'];
$email=$_post['Email'];
$subject=$_post['Subject'];
$Message=$_post['Message'];
$adminwebsite="apoorvgusain123@gmail.com"
//echo $name.' '.$email. ' '.$subject.' '$message;
$header="Reply to :$email";
mail($adminwebsite,$subject,$message,$header);
?>
