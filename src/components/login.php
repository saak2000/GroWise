<?php

$conn = mysqli_connect("localhost","root","");
$dbconn = mysqli_select_db($conn, "growise");

$json = file_get_contents('php://input');
 
$obj = json_decode($json,true);

$Phone_num = $obj['Phone_num'];
	
$Password = $obj['Password'];
	
if($obj['Phone_num']!=""){	
	
$check = "SELECT * FROM users where Phone_num='$Phone_num' and Password='$Password'";
$result = mysqli_query($conn, $check);
	
	if($result->num_rows==0){
		echo json_encode('Wrong Details');				
	}
	else{		
	echo json_encode('ok');				
	}
}	
else{
  echo json_encode('try again');
}
?>