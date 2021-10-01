<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/* Handle Project Folder */
if (isset($_POST['folder'])) {
    
    // Get URL
    $folder = $_POST['folder'];
    $my_dir = array_diff(scandir($folder), ['.', '..']);
    
    // Looping Data
    foreach ($my_dir as $my) {

        $item_path = $folder . $my;

        if (is_dir($item_path)) {
            echo '<ul class="folder">📂'.$my;
            _Loop_Folder($item_path, array_diff(scandir($item_path), ['.', '..']));
            echo '</ul>';
        }
        
    }

    foreach ($my_dir as $my) {

        $item_path = $folder . $my;

        if (is_file($item_path)) {
            echo '<li class="dir-file" onclick="_read_file(this.id)" id="'.$item_path.'">📄 '.$my.'</li>';
        }
        
    }
}

/* Handle File */
if (isset($_POST['file'])) {
    $file = $_POST['file'];
    echo file_get_contents($file);
}

/* Looping Folder dalam Folder */
function _Loop_Folder($path, $data) {
    foreach ($data as $d) {

        $filelok = $path . "/" . $d;

        if (is_dir($path ."/". $d)) {
            echo "<ul class='dir-folder ml-1'>📂 " . $d;
            _Loop_Folder($path . "/" . $d, _CEK_DIR($path ."/". $d));
            echo "</ul>";
        } elseif(is_file($path ."/". $d)) {
            echo '<li class="dir-file ml-1" onclick="_read_file(this.id)" id="'.$filelok.'">📄 '.$d.'</li>';
        }
    }
}

/* Cek Isi Direktori */
function _CEK_DIR($path) {
    return array_diff(scandir($path), ['.', '..']);
}