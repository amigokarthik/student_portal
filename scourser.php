<?php
 $con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}




$result = mysqli_query($con,"SELECT * FROM scourse where cFlag=1 && rank=0");
	$response = array();
	
	while($row = mysqli_fetch_assoc($result))
	{
		 $response[] = $row;
	}
print json_encode($response, 128);
mysqli_close($con);
?>