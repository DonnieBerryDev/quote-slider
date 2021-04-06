<?php

$con = mysqli_connect("localhost", "root", "", "products");
$response = array();
if($con){
    $sql = "select * from wp_productlist";
    $result = mysqli_query($con,$sql);
        if($result){
            header("Content-Type: application/json");
            $i=0;
            while ($row = mysqli_fetch_assoc($result)) {
                $response[$i]['Product_ID'] = $row['Product_ID'];
                $response[$i]['Product_Name'] = $row['Product_Name'];
                $response[$i]['Product_Color'] = $row['Product_Color'];
                $response[$i]['Product_Stock'] = $row['Product_Stock'];
                $i++;
            }
            echo json_encode($response,JSON_PRETTY_PRINT);
        }
} else {
    echo "Not connected";
}

?>