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

	$result = mysqli_query($con,"SELECT course FROM scourse WHERE course = '$cn' && username='$un'");
	$res="";
	while($row = mysqli_fetch_assoc($result))
	{
		 $res = $row[course];
	}

	if($res == "")
	$query = mysqli_query($con,"INSERT INTO scourse VALUES (' ','$un','$cn',0,0)"); 
	else
	{
			$query = mysqli_query($con,"UPDATE scourse set cFlag=0,rank=0 WHERE course='$cn' && username='$un'"); 
	}

mysqli_close($con);


?>