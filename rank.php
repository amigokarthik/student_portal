<?php
 $con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}




$reg = $HTTP_RAW_POST_DATA;


$jagan = (array) json_decode($reg);
$un = $jagan["un"];
$cn = $jagan["cn"];
$rn = $jagan["rn"];



	$query = mysqli_query($con,"UPDATE scourse set rank=$rn where username='$un' && course='$cn'"); 
	

mysqli_close($con);


?>