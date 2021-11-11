<?php

require_once __DIR__ . '/kurawal_core.php';

$hasil = array();

/* Handle Project Folder */
if (isset($_POST['folder'])) {

    
    // Get URL
    $folder = $_POST['folder'];
    $my_dir = array_diff(scandir($folder), ['.', '..']);

    $hasil_folder = array();
    $hasil_folder = array();

    foreach ($my_dir as $my) {

        $item_path = $folder . $my;

        if (is_dir($item_path)) {
            $hasil_folder[$my] = _Loop_Folder($item_path, array_diff(scandir($item_path), ['.', '..']));
        }

    }

    if (count($hasil_folder) > 0) {
        $hasil['root_folder'] = $hasil_folder;
    }

    // Looping File
    foreach ($my_dir as $my) {

        $item_path = $folder . $my;

        if (is_file($item_path)) {
            $hasil_file[] = $my;
        }
    }

    if (count($hasil_file) > 0) {
        $hasil['root_file'] = $hasil_file; // enter in $hasil
    }


    // $hasil = array_merge($hasil_file, $hasil_folder);
}

/* Looping Folder dalam Folder */
function _Loop_Folder($path, $data) {

    global $hasil;

    $tempfolder = [];
    $hasil_sub_folder = [];
    $hasil_sub_file = [];

    foreach ($data as $d) {

        $filelok = $path . "/" . $d;

        if (is_dir($path ."/". $d)) {
            $hasil_sub_folder[$d] = _Loop_Folder($path . "/" . $d, _CEK_DIR($path ."/". $d));
        } elseif (is_file($path ."/". $d)) {
            $hasil_sub_folder[] = $d;
        }
    }

    return $hasil_sub_folder;

}

echo PHP_EOL;
// var_dump($hasil);

echo json_encode($hasil);

// print_r($hasil);