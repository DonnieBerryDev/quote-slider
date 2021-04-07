<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

try {
    $handler = new PDO('mysql:host=185.151.30.166;dbname=allproducts-31363980e9', 'root', '');
    $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Sorry, database problem");
}

$response = array();
if($handler){
    $response = $handler->query('SELECT ID, style, img_url from window_styles')->fetchAll(PDO::FETCH_ASSOC);
} else {
    echo "Not connected";
}
echo json_encode($response,JSON_PRETTY_PRINT);

?>