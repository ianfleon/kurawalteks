<?php

// $_POST['dir'] = 'E:/Belajar HTML';

if (isset($_POST['dir'])) {

    $path = $_POST['dir'];

    $dirs = scandir($path);
    $hasil = array();

    foreach ($dirs as $key => $value) {
        if (is_dir($path .'/'. $value)) {
            $hasil[$key] = $value;
        }
    }

    $hasil = array_diff($hasil, ['.', '..', 'System Volume Information', '$RECYCLE.BIN']);
    // var_dump($hasil);
    echo json_encode($hasil);
}
