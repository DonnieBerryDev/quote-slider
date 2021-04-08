<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

try {
    $handler = new PDO('mysql:host=mysql.stackcp.com:56282;dbname=allproducts-31363980e9', 'allproducts-31363980e9', '');
    $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Sorry, database problem");
}

$response = array();
if($handler){
    $response = $handler->query('SELECT id, colour, hex from colours')->fetchAll(PDO::FETCH_ASSOC);
} else {
    echo "Not connected";
}
echo json_encode($response,JSON_PRETTY_PRINT);

?>