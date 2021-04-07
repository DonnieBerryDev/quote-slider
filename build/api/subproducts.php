<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

try {
    $handler = new PDO('mysql:host=127.0.0.1;dbname=allproducts', 'root', '');
    $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Sorry, database problem");
}

$response = array();
if($handler){
    $response = $handler->query('SELECT which_id, product, img_url from additionalproducts')->fetchAll(PDO::FETCH_GROUP | PDO::FETCH_ASSOC);
} else {
    echo "Not connected";
}
echo json_encode($response,JSON_PRETTY_PRINT);

?>