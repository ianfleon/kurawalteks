var dir = document.getElementById('dir-items');

__GET_DIR_PROJECT(null, function (dirproject) {

    // console.log(typeof(dir.root_folder.jadwal.harian['0']));

    _Loop_Dir_Folder(dirproject.root_folder);
    _Loop_Dir_File(dirproject.root_file);

});

function _Loop_Dir_Folder(obj) {

    if (obj instanceof Object) {

        const keys = Object.keys(obj);

        keys.forEach(key => {

            if (typeof obj[key] != 'string') {
                dir.appendChild(
                    __CreateElement("div", '📁' + key, {
                        "class": "dir-item"
                    }))
            } else {
                dir.appendChild(
                    __CreateElement("div", '📄' + obj[key], {
                        "class": "dir-item ml-1"
                    }))
            }

            _Loop_Dir_Folder(obj[key]);

        });

    }

}

function _Loop_Dir_File(data) {
    // console.log(data);
    data.forEach(d => {
        dir.appendChild(
            __CreateElement("div", '📄' + d, {
                "class": "dir-item"
            }))
    });
}