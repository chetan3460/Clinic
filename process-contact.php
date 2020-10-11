<?php

	$to = "chetan.dmc@gmail.com";  // Your email here
	$from = $_REQUEST['email'];
	$name = $_REQUEST['name'];
	$msg_subject = $_REQUEST['msg_subject'];
	$phone_number = $_REQUEST['phone_number'];
	$message = $_REQUEST['message'];
	$headers = "From: $from";
	$subject = "Contact Form from Clinic Website";

	$fields = array();
	$fields{"name"} = "First name";
	$fields{"email"} = "Email";
	$fields{"phone_number"} = "Phone";
	$fields{"msg_subject"} = "Subject";
	$fields{"message"} = "Message";

	$body = "Here is what was sent:\n\n";
	foreach($fields as $a => $b){
		$body .= sprintf("%20s:%s\r\n",$b,$_REQUEST[$a]);
	}
	$send = mail($to, $subject, $body, $headers);

?>
