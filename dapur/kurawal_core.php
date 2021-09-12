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
            echo "DIR";
            echo '<div class="file-item folder" onclick="_collapse_folder(this.id)" id="'.$my.'">'.$my.'</div>';
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