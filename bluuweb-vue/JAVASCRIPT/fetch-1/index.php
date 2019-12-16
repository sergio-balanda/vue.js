<?php
$usuario = $_POST ['name'];
$pass = $_POST ['pass'];

if ($usuario === '' ||$pass === '' ){
    echo json_encode (' error ') ; 
  }
else{
    echo json_encode ('success');  
}