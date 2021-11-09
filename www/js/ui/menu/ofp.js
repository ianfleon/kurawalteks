__XHTTP("POST", "dapur/read_drive.php", "", "responseText", function(drives) {

    drives = JSON.parse(drives);

    const key = Object.keys(drives);
    const disk_wrapper = document.getElementById('disk-wrapper');

    disk_wrapper.innerHTML = "";

    key.forEach(function(k) {

        const el_disk = __CreateElement('div', '💽' + drives[k], {
            "class" : "disk-item",
            "data-path" : drives[k],
            "onclick" : "_Embed_Folder('" + drives[k] + "'); "
            });

        disk_wrapper.appendChild(el_disk);

        el_disk.addEventListener('click', function () {
            
            window.localStorage.setItem('kurawal-dir-project', drives[k]);
            console.log(window.localStorage.getItem('kurawal-dir-project'));

            el_disk.parentNode.childNodes.forEach(function (n) {
                n.classList.remove('folder-item-selected');
            });
            el_disk.classList.add('folder-item-selected');
        });
        
    });

});

function _Embed_Folder(folders) {

    const dir_wrapper = document.getElementById('dir-wrapper');
    const folder_wrapper = document.getElementById('folder-wrapper');
    const disks = document.querySelectorAll('.disk-item');
    const btn_back_dir = document.getElementById('btn_dir_back');

    _Read_Dir(folders, function (data, dirnow) {

        let back_dir = dirnow.split("/");
        back_dir.pop();
        back_dir = back_dir.join("/");

        folder_wrapper.innerHTML = "";

        const keys = Object.keys(data);

        keys.forEach(k => {

            const data_path = data[k];

            const folder_item = __CreateElement('div', '📁' + data[k], {
                "class" : "folder-item ml-1",
                "data-path" : dirnow + '/' + data[k],
                "ondblclick" : "_Embed_Folder('" + dirnow + '/' + data[k] + "')"
            });

            folder_wrapper.appendChild(folder_item);

            folder_item.addEventListener('click', function () {

                window.localStorage.setItem('kurawal-dir-project', dirnow + '/' + data[k]);
                console.log(window.localStorage.getItem('kurawal-dir-project'));

                folder_item.parentNode.childNodes.forEach(function (n) {
                    n.classList.remove('folder-item-selected');
                });
                folder_item.classList.add('folder-item-selected');
            });

        });
    });

}