<?php

$conn = mysqli_connect("localhost","root","");
$dbconn = mysqli_select_db($conn, "growise");

$EncodedData = file_get_contents("php://input");
$DecodedData = json_decode($EncodedData, true);

$Name = $DecodedData["Name"];
$Phone_num = $DecodedData["Phone_num"];
$Password = $DecodedData["Password"];
$State = $DecodedData["State"];
$City = $DecodedData["City"];
$Pin_code = $DecodedData["Pin_code"];

$insert = "insert into users(Name, Phone_num, Password, State, City, Pin_code) values('$Name', $Phone_num, '$Password', '$State', '$City', $Pin_code)";
echo($Name)
$R = mysqli_query($conn, $insert);

if ($R){
    $message = "User has been registered successsfully";
}
else{
    $message = "Server Error...Please try later";
}

$Response[] = array("Message" => $message);
echo json_encode($Response);



?>