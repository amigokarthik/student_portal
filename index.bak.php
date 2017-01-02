<?php
 
 $con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}




$reg = $HTTP_RAW_POST_DATA;


$jagan = (array) json_decode($reg);
$un = $jagan["un"];
$pw = $jagan["pw"];
$cn = $jagan["cn"];
$em = $jagan["em"];

	$u_check=mysqli_query($con,"SELECT username FROM preg WHERE username = '$un'");
	$check = mysqli_num_rows($u_check);
	$e_check=mysqli_query($con,"SELECT email FROM preg WHERE email = '$em'");
	$email_check = mysqli_num_rows($e_check);
	if($check==0) {
			if($email_check==0) {
	$query = mysqli_query($con,"INSERT INTO preg VALUES (' ','$un','$pw','$cn','$em')"); 
	echo " ";
	}}
	if($check!=0)
	{
	print json_encode("username already exists", 128);
	}

	if($email_check!=0)
	{
	print json_encode("email already exists", 128);
	}


mysqli_close($con);


?>