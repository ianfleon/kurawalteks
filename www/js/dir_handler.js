var dir = document.getElementById('dir-project-wrapper');

__GET_DIR_PROJECT(null, function (dirproject) {

    // console.log(typeof(dir.root_folder.jadwal.harian['0']));

    const data = _Loop_Dir_Folder(dirproject.root_folder, __CreateElement('div', '', {
        "id": "project-folder"
    }));

    console.log(data);

    dir.appendChild(data);

    _Loop_Dir_File(dirproject.root_file);

});

function _Loop_Dir_Folder(obj, el) {

    if (obj instanceof Object) {

        const keys = Object.keys(obj);

        keys.forEach((key) => {

            if (typeof obj[key] != 'string') {

                var fol = __CreateElement("div", '📁' + key, {
                    "class": "",
                });

                el.appendChild(fol);

                // console.log(el);

                _Loop_Dir_Folder(obj[key], fol);

                
            } else {
                el.appendChild(
                    __CreateElement("div", '📄' + obj[key], {
                        "class": "dir-item-file ml-1"
                    }))
            }

            
        });
        
        
    }

    return el;


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