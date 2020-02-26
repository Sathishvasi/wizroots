<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

include('connect.php');

    $query = "SELECT * FROM careers";
    
    $result = $mysqli->query($query);
    
    $jobList = array();

    if ($result->num_rows > 0) {

        while($row = $result->fetch_assoc()) {
		$jobList[] = $row;
        }
    } else {
        echo "0 results";
    }
    
    print_r(json_encode($jobList));
    
?>