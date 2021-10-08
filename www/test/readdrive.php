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

<link rel="stylesheet" href="css/style.css">

<body onmousedown="return false" onselectstart="return false">

    <button id="btn_dir_back">Back</button>
    <button id="btn_dir_next">Next</button>

    <div id="dir-wrapper">
        <div id="disk-wrapper">
            <?php foreach($disk_label as $disk) :?>
            <div class="disk" data-path="<?= $disk?>">💽<?= $disk ?></div>
            <?php endforeach; ?>
        </div>
        <div id="folder-wrapper"></div>
    </div>

    <script src="js/handler/xhttp.js"></script>
    <script>

        const dir_wrapper = document.getElementById('dir-wrapper');
        const folder_wrapper = document.getElementById('folder-wrapper');
        const disks = document.querySelectorAll('.disk');

        disks.forEach((disk)=>{
            disk.addEventListener('click', ()=> {
                embed_folder(disk, disk.dataset.path);
            });
        });
        
        function embed_folder(el, folders) {
            
            let back_dir = folders.split("/");
            back_dir.pop();
            back_dir = back_dir.join("/");
            // console.log(back_dir);
            
            document.getElementById('btn_dir_back').setAttribute("onclick", "embed_folder(this, '" + back_dir +"')");

            __READ_DIR(folders, function (data, dirnow) {
                

                folder_wrapper.innerHTML = "";

                const keys = Object.keys(data);

                keys.forEach(k => {

                    const data_path = data[k];

                    const folder_item = document.createElement('div');
                    const folder_name = document.createTextNode('📁' + data[k]);
                    
                    folder_item.setAttribute('class', 'fi');
                    folder_item.classList.add('ml-1');
 
                    folder_item.appendChild(folder_name);
                    folder_wrapper.appendChild(folder_item);

                    folder_item.setAttribute("ondblclick", "embed_folder(this, '" + dirnow +'/'+ data[k] + "')");

                    folder_item.addEventListener('click', function() {
                        folder_item.parentNode.childNodes.forEach(function(n) {
                            n.classList.remove('fi-selected');
                        });
                        folder_item.classList.add('fi-selected');
                    });

                    // folder_item.addEventListener('click', function() {
                    //     folder_item.setAttribute('ondblclick', 'collapse_dir()');
                    //     embed_folder(folder_item, dirnow + '/' + data[k]);
                    // });


                });
            });

        }
    </script>

</body>

</html>