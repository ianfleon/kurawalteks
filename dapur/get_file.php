<?php

$folder = $_POST['folder'];
$my_dir = array_diff(scandir($folder), ['.', '..']);

foreach ($my_dir as $my) {
    echo '<div class="file-item" onclick="_read_file('. '. .$my. ' .')">'. $my .'</div>';
    echo "<br/>";
}
