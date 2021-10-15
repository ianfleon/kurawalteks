__READ_FILE('dapur/read_drive.php', function(drives) {

    const key = Object.keys(drives);
    const disk_wrapper = document.getElementById('disk-wrapper');

    key.forEach(function(k) {
        const disk = document.createElement('div');
        disk.setAttribute('data-path', drives[k]);
        disk.setAttribute('class', 'disk-item');
        disk.appendChild(document.createTextNode('💽' + drives[k]));
        disk_wrapper.appendChild(disk);
    });

});

const dir_wrapper = document.getElementById('dir-wrapper');
const folder_wrapper = document.getElementById('folder-wrapper');
const disks = document.querySelectorAll('.disk-item');
const btn_back_dir = document.getElementById('btn_dir_back');

disks.forEach((disk) => {
    disk.addEventListener('click', () => {
        embed_folder(disk, disk.dataset.path);
    });
});

function embed_folder(el, folders) {

    __READ_DIR(folders, function (data, dirnow) {

        let back_dir = dirnow.split("/");
        back_dir.pop();
        back_dir = back_dir.join("/");

        if (back_dir != '' && back_dir.includes('/')) {
            btn_back_dir.setAttribute("onclick", "embed_folder(this, '" + back_dir + "')");
        } else {
            btn_back_dir.onclick = function () {
                folder_wrapper.innerHTML = '';
                btn_back_dir.removeAttribute('onclick');
            }
        }

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

            folder_item.setAttribute("ondblclick", "embed_folder(this, '" + dirnow + '/' + data[k] + "')");

            folder_item.addEventListener('click', function () {
                folder_item.parentNode.childNodes.forEach(function (n) {
                    n.classList.remove('fi-selected');
                });
                folder_item.classList.add('fi-selected');
            });

        });
    });

}