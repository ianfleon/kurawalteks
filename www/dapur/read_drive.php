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
    return array_diff($DIR_E, ['.', '..', 'System Volume Information', '$RECYCLE.BIN', ]);
}

$disk_label = get_disks();

/* Ubah \\ jadi / */
foreach ($disk_label as $i => $d) {
    $disk_label[$i] = str_replace('\\', '/', $d);
}

echo json_encode($disk_label);

?>