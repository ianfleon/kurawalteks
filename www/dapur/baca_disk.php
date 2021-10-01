<?php

if (isset($_POST['dir'])) {

    $dirs = array_diff(scandir($_POST['dir']), ['$RECYCLE.BIN', 'System Volume Information']);

    foreach ($dirs as $key => $d) {
        $dirs['.$key.'] = $d;
    }

    echo json_encode($dirs);
}
