<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: GET, OPTIONS");
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');


try {
    $handler = new PDO('mysql:host=mysql.stackcp.com:56282;dbname=allproducts-31363980e9', 'allproducts-31363980e9', '<_~]qf:6cuVz');
    $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Sorry, database problem");
}

$response = array();
if($handler){
    $response = $handler->query('SELECT product, id, subproduct, img_url, styles from pl_windows')->fetchAll(PDO::FETCH_GROUP | PDO::FETCH_ASSOC);
} else {
    echo "Not connected";
}
echo json_encode($response,JSON_PRETTY_PRINT);

?>