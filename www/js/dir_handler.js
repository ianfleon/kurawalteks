var dir = document.getElementById('dir-project-wrapper');

function __SET_DIR_PROJECT(data_dir_project, dirproject) {

    const data = _Loop_Dir_Folder(data_dir_project.root_folder, __CreateElement('div', '', {
        "id": "project-folder",
        "data-folder-path": dirproject
    }), dirproject);

    dir.appendChild(data);

    _Loop_Dir_File(data_dir_project.root_file, dirproject);

}

function _Loop_Dir_Folder(obj, el, dirnow, SUB_ITEM = "") {

    if (obj instanceof Object) {

        const keys = Object.keys(obj);

        keys.forEach((key, indx) => {

            if (typeof obj[key] != 'string') {

                var fol = __CreateElement("div", '📁' + key, {
                    "class": "dir-item-folder " + SUB_ITEM,
                    "data-folderpath": dirnow + key,
                    "data-type-folder": "",
                    "onclick": "_Colapse_Folder(this)"
                });

                fol.addEventListener('click', _Colapse_Folder);
                fol.removeEventListener('click', _Colapse_Folder);

                el.appendChild(fol);

                _Loop_Dir_Folder(obj[key], fol, dirnow + '/' + key, "sub-item-hidden pl-1");

            } else {
                const filesub = __CreateElement("div", '📄' + obj[key], {
                        "class": "dir-item-file " + SUB_ITEM,
                        "onclick": "_Read_File('" + dirnow + '/' + obj[key] + "')"
                    });

                    // filesub.addEventListener('click', _Stop_Propaganda);
                    // filesub.removeEventListener('click', _Stop_Propaganda);
                    
                    el.appendChild(filesub);
            }
        });
    }
    return el;
}

function _Read_File(e) {
    _read_file(e);
    event.stopImmediatePropagation();
}

function _Colapse_Folder(e) {

    const children = e.childNodes;

    if (children != undefined) {
        children.forEach(c => {
            if (c.childNodes.length > 0) {
                c.classList.remove("sub-item-hidden");
            }
        });
    }

    event.stopImmediatePropagation();
    console.log(event.target);
    event.target.setAttribute("onclick", "_Expand_Folder(this)");

}

function _Stop_Propaganda() {
    event.preventDefault();
    event.stopPropagation();
}

function _Expand_Folder(e) {
    
    const children = e.childNodes;
    if (children != undefined) {
        children.forEach(c => {
            if (c.childNodes.length > 0) {
                c.classList.add("sub-item-hidden");
            }
        });
    }

    event.stopImmediatePropagation();
    console.log(event.target);
    event.target.setAttribute("onclick", "_Colapse_Folder(this)");

}

function _Loop_Dir_File(data, dirnow) {
    data.forEach(d => {
        dir.appendChild(
            __CreateElement("div", '📄' + d, {
                "class": "dir-item-file",
                "onclick": "_read_file('" + dirnow + '/' + d + "')"
            }))
    });
}

/* Run Konfigurasi */
__READ_FILE_JSON('konfigurasi.json', function (data) {
    __GET_DIR_PROJECT(data.direktori_projek + '/', __SET_DIR_PROJECT);
});