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
        <li class="disk" onclick="embed_folder(this, '<?= $disk?>')">💽<?= $disk ?></li>
        <?php endforeach; ?>
    </ul>

    <ul id="folder">
    </ul>

    <script src="js/handler/xhttp.js"></script>
    <script>
        const folder = document.getElementById('folder');
        
        function embed_folder(el, folders) {
            
            console.log(el);
            
            __READ_DIR(folders, function (data, dirnow) {

                const keys = Object.keys(data);

                // console.log(data);
                // console.log(dirnow);



                keys.forEach(k => {

                    const folder_item = document.createElement('li');
                    const folder_name = document.createTextNode('📁' + data[k]);
                    // folder_item.setAttribute("onclick", "embed_folder(this,'" + dirnow + '/' + data[k] +
                    //     "')");

                    folder_item.appendChild(folder_name);
                    el.appendChild(folder_item);

                    folder_item.addEventListener('click', function() {
                        embed_folder(folder_item, dirnow + '/' + data[k]);
                    });


                });
            });
        }
    </script>

</body>

</html>