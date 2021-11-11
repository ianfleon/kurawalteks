<?php

$configpath = $_SERVER['SERVER_ROOT'] . "/konfigurasi.json";

if (isset($_POST["direktori_projek"])) {

    $hasil = json_decode(file_get_contents($configpath), true);
    $hasil["direktori_projek"] = $_POST["direktori_projek"];
    $hasil = json_encode($hasil);

    // echo $hasil;
    
    if (is_writable($configpath)) {
    
        if (!$handle = fopen($configpath, 'w+')) {
             echo "Cannot open file ($configpath)";
             exit;
        }
    
        if (fwrite($handle, $hasil) === FALSE) {
            echo "Tidak bisa tulis di: ($configpath)";
            exit;
        }
    
        // echo "Berhasil disimpan: ($configpath)";
        
        fclose($handle);
        
        echo true;
    
    } else {
        echo "File: $configpath tidak bisa diubah!";
    }
}
