<?php

/* Handle Project Folder */
if (isset($_POST['folder'])) {
    
    // Get URL
    $folder = $_POST['folder'];
    $my_dir = array_diff(scandir($folder), ['.', '..']);
    
    // Looping Data
    foreach ($my_dir as $my) {
        $item_path = $folder . '/' . $my;
        if (is_dir($item_path)) {
            echo '<div class="file-item folder" onclick="_read_file(this.id)" id="'.$my.'">'.$my.'</div>';
            $f = array_diff(scandir($item_path), ['.', '..']);
            _Loop_Folder($item_path, $f);
        } else {
            echo '<div class="file-item" onclick="_read_file(this.id)" id="'.$my.'">'.$my.'</div>';
        }
        echo "<br/>";
        
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
        if (is_dir($path ."/". $d)) {
            echo "Folder: " . $d . "<br/>";
            _Loop_Folder($path, _CEK_DIR($path ."/". $d));
        } else {
            echo "File: " . $d .  "<br/>";
        }
    }
}

/* Cek Isi Direktori */
function _CEK_DIR($path) {
    return array_diff(scandir($path), ['.', '..']);
}