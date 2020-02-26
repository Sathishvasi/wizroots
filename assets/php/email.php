<?PHP
	require 'phpmailer/PHPMailerAutoload.php';
	
    header('Content-type: application/json');

	$postdata = file_get_contents("php://input");

	$request = json_decode($postdata);

	$mobile = $request->mobile;

	$message = $request->message;

	$from_email = $request->email;
	
	$posting = $request->posting;

	$from_name = $request->name;
	
	$fileName = $request->fileName;
	$fileType = $request->fileType;
	$filePath = $request->filePath;

	$contact = "<p><strong>Name:</strong> $from_name</p><p><strong>Email:</strong> $from_email</p>";
	$content = "<p><strong>Message:</strong>$message</p>";

	$website = 'Wizroots';
	$email_subject = "$website: New message from $from_name recieved";

	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= "<p><strong>Contact no:</strong> $mobile </p>";
	$email_body .= "<p><strong>Posting:</strong> $posting </p>";
	$email_body .= '</body></html>';

    $mail = new PHPmailer();
    
    $mail->IsHTML(true);

    $mail->Host = "smtp.gmail.com";
    
    $mail->SMTPAuth = true;
    $mail->Username = "wizmailtest@gmail.com";
	$mail->Password = "wizmailtestpwd";
	
	$mail->AddAttachment($_SERVER['DOCUMENT_ROOT'].'/', $name = 'test',  $encoding = 'base64', $type = 'application/pdf');
	
	$mail->SMTPSecure = "ssl";

    $mail->Port = "25";

    $mail->Subject = $email_subject;
    $mail->Body = $email_body;
    $mail->SetFrom($from_email ,$from_name);

    $mail->addAddress("wizmailtest@gmail.com");
    if($mail->send())
	echo $postdata;
    else
        echo "Not Sent";
?>