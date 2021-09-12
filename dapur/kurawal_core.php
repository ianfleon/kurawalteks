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
            _Collapse_Folder($f);
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

function _Collapse_Folder($data) {
    foreach($data as $d) {
        echo $d;
    }
}

// function _Loop_Folder($data) {
//     foreach ($data as $d) {
//         if (gettype($d) == 'array') {
//             _Loop_Folder($d);
//         } else {
//             echo $d . "| ";
//         }
//     }
// }

// _Loop_Folder($data);