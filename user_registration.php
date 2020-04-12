<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 if (mysqli_connect_error()){
		echo "Error de connexió"; //error code #1 = connection failed
		exit();
	}
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate User name from JSON $obj array and store into $name.
$name = $obj['name'];
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "El format de l'email introduït no és correcte.";
  echo $emailErr;
}
else{
//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM UserRegistrationTable WHERE email='$email'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));


if(isset($check)){

 $EmailExistMSG = 'L\' email ja existeix, siusplau torna-ho a intentar';
 
 // Converting the message into JSON format.
$EmailExistJson = json_encode($EmailExistMSG);
 
// Echo the message.
 echo $EmailExistJson ; 

 }
 else{
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "INSERT INTO  UserRegistrationTable (name,email,password) VALUES ('$name','$email','$password')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'User Registered Successfully' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 }
}
 mysqli_close($con);
?>