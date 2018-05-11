<?php
	if ($_POST) {
		$name = $_POST['name'];
		if(empty($name)) {
			echo "<p class=\"login-tip\" style=\"color: white\">Please enter your name.</p>";
			exit();
		}

		$email = $_POST['email'];
		$checkmail = "/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/";
		if(!preg_match($checkmail,$email)){
			echo "<p class=\"login-tip\" style=\"color: white\">Please enter a valid email address.</p>";
			exit();
        }

		$phone = $_POST['phone'];
		if(empty($phone)) {
			echo "<p class=\"login-tip\" style=\"color: white\">Please enter your phone number.</p>";
			exit();
		}

		$message = $_POST['message'];
		// if(empty($message)) {
		// 	echo "<p class=\"login-tip\" style=\"color: white\">Please enter your message.</p>";
		// 	exit();
		// }

		$to = "prem@clickclickmedia.com.au";
		$subject = "Fantastic Plumbing contact form";
		$message = "
		<html>
		<head>
		<title>Contact form</title>
		</head>
		<body>
		<p>
			<strong>Name: </strong>$name
		</p>
		<p>
			<strong>Email: </strong>$email
		</p>
		<p>
			<strong>Phone: </strong>$phone
		</p>
		<p>
			<strong>Message: </strong>$message
		</p>
		</body>
		</html>
		";

		$headers[] = 'MIME-Version: 1.0';
		$headers[] = 'Content-type: text/html; charset=iso-8859-1';
		// $headers[] = 'To: Mary <example@example.com>, Kelly <example@example.com>';
		// $headers[] = 'From: Birthday Reminder <example@example.com>';
		// $headers[] = 'Cc: birthdayarchive@example.com';
		// $headers[] = 'Bcc: birthdaycheck@example.com';
		$send = mail($to,$subject,$message,implode("\r\n", $headers));
		// echo "<p class=\"login-tip\" style=\"color: white\">Thank you for your letter, Your email been sent.</p>";
		if ($send) {
			echo '<script>location.href="thanks.html";</script>';
		}
	}

?>