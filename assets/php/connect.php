<?php
header("Access-Control-Allow-Origin: *");

define('DB_DATABASE', 'technica_wizroots');
define('DB_USERNAME', 'technica_wiz');
define('DB_PASSWORD', 'edutechno@!23');
define('DB_HOST', 'reflectivetech.in');

$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

/* check connection */

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

?>