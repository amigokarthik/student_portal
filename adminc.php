<?php
 $con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");
 
if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}




$reg = $HTTP_RAW_POST_DATA;


$jagan = (array) json_decode($reg);
$cn = $jagan["cn"];
$cd = $jagan["cd"];

	$u_check=mysqli_query($con,"SELECT cname FROM courses WHERE cname = '$cn'");
	$check = mysqli_num_rows($u_check);
	if($check == 0)
	$query = mysqli_query($con,"INSERT INTO courses VALUES (' ','$cn','$cd')"); 
	

mysqli_close($con);


?>