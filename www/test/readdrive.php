<?php

function get_disks(){

    if(php_uname('s')=='Windows NT'){
        // windows
        $disks=`fsutil fsinfo drives`;
        $disks=str_word_count($disks,1);
        if($disks[0]!='Drives')return '';
        unset($disks[0]);
        foreach($disks as $key=>$disk)$disks[$key]=$disk.':\\';
        return $disks;
    } else {
        // unix
        $data=`mount`;
        $data=explode(' ',$data);
        $disks=array();
        foreach($data as $token)if(substr($token,0,5)=='/dev/')$disks[]=$token;
        return $disks;
    }
    
}

function read_drive()
{
    $DIR_E = scandir("E:/");
    return array_diff($DIR_E, ['System Volume Information', '$RECYCLE.BIN']);
}

$disk_label = get_disks();

/* Ubah \\ jadi / */
foreach ($disk_label as $i => $d) {
    $disk_label[$i] = str_replace('\\', '/', $d);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .disk {
        cursor: pointer;
        margin-bottom: 1rem;
    }

</style>
<body>
    <ul>
        <?php foreach($disk_label as $disk) :?>
        <li class="disk"><?= $disk ?></li>
        <?php endforeach; ?>
    </ul>

    <ul class="folder">
    </ul>

    <script src="js/handler/xhttp.js"></script>
    <script>
        const disk = document.querySelectorAll('.disk');
        disk.forEach(function(d) {
            d.addEventListener('click', function() {
                const letter = d.innerHTML;
                __READ_DIR(letter);
            });
        });
    </script>

</body>
</html>