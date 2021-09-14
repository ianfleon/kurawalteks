<?php

$isifile = $_POST['isifile']; // path file
$filepath = $_POST['filepath']; // isi file baru

// $fp = file_get_contents($filepath); // mengambil file sekarang
// $simpan = file_put_contents($fp, $isifile);

// Let's make sure the file exists and is writable first.
if (is_writable($filepath)) {

    // In our example we're opening $filepath in append mode.
    // The file pointer is at the bottom of the file hence
    // that's where $isifile will go when we fwrite() it.
    if (!$handle = fopen($filepath, 'w+')) {
         echo "Cannot open file ($filepath)";
         exit;
    }

    // Write $isifile to our opened file.
    if (fwrite($handle, $isifile) === FALSE) {
        echo "Cannot write to file ($filepath)";
        exit;
    }

    echo "Success, wrote ($isifile) to file ($filepath)";

    fclose($handle);

} else {
    echo "The file $filepath is not writable";
}