<?php
 $con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");
 
if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}

$un = $_GET['un'];

$result = mysqli_query($con,"SELECT course FROM scourse where username='$un' && cFlag=0");
	$res="";
	while($row = mysqli_fetch_assoc($result))
	{
		 $res = $row[course];
	}



$result = mysqli_query($con,"SELECT * FROM courses where cname='$res'");
	$response = array();
	
	while($row = mysqli_fetch_assoc($result))
	{
		 $response[] = $row;
	}
print json_encode($response, 128);
mysqli_close($con);
?>