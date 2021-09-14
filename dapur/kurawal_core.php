<?php

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

/* Handle Project Folder */
if (isset($_POST['folder'])) {
    
    // Get URL
    $folder = $_POST['folder'];
    $my_dir = array_diff(scandir($folder), ['.', '..']);
    
    // Looping Data
    foreach ($my_dir as $my) {

        $item_path = $folder . $my;

        if (is_dir($item_path)) {
            echo '<div class=" folder">'.$my.'</div>';
            _Loop_Folder($item_path, array_diff(scandir($item_path), ['.', '..']));
        }

        echo "<br/>";
        
    }

    foreach ($my_dir as $my) {

        $item_path = $folder . $my;

        if (is_file($item_path)) {
            echo '<div class="file-item" onclick="_read_file(this.id)" id="'.$item_path.'">'.$my.'</div>';
        }

        echo "<br/>";
        
    }
}

/* Handle File */
if (isset($_POST['file'])) {
    $file = $_POST['file'];

    if (pathinfo($file)['extension'] == 'html' || pathinfo($file)['extension'] == 'html' || pathinfo($file)['extension'] == 'xml') {
        echo htmlentities(file_get_contents($file));
    } else {
        echo file_get_contents($file);
    }
}

/* Looping Folder dalam Folder */
function _Loop_Folder($path, $data) {
    foreach ($data as $d) {

        $filelok = $path . "/" . $d;

        if (is_dir($path ."/". $d)) {
            echo "📂 Folder: " . $d . "<br/>";
            _Loop_Folder($path . "/" . $d, _CEK_DIR($path ."/". $d));
        } elseif(is_file($path ."/". $d)) {
            echo '<div class="file-item" onclick="_read_file(this.id)" id="'.$filelok.'">'.$d.'</div>';
        }
    }
}

/* Cek Isi Direktori */
function _CEK_DIR($path) {
    return array_diff(scandir($path), ['.', '..']);
}