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
                    "onclick": "_Colapse_Folder(this)"
                });

                // fol.addEventListener('click', function(e) {

                    // const children = e.target.childNodes;

                    // console.log(e);

                    // if (e.target.hasAttribute('data-folder-is-open')) {
                    //     children.forEach(c => {
                    //         if (c.childNodes.length > 0) {
                    //             c.classList.add("sub-item-hidden");
                    //         }
                    //     });
                    // } else {
                    //     children.forEach(c => {
                    //         if (c.childNodes.length > 0) {
                    //             c.classList.remove("sub-item-hidden");
                    //         }
                    //     });
                        
                    //     e.target.setAttribute('data-folder-is-open', 'true');
                    // }

                // });

                el.appendChild(fol);

                _Loop_Dir_Folder(obj[key], fol, dirnow + '/' + key, "sub-item-hidden pl-1");

            } else {
                el.appendChild(
                    __CreateElement("div", '📄' + obj[key], {
                        "class": "dir-item-file " + SUB_ITEM,
                        "onclick": "_read_file('" + dirnow + '/' + obj[key] + "')"
                    }))
            }
        });
    }
    return el;
}

function _Colapse_Folder(e) {
    // console.log(e.childNodes);
    const children = e.childNodes;
    children.forEach(c => {
        if (c.childNodes.length > 0) {
            c.classList.remove("sub-item-hidden");
        }
    });

    // e.parentElement.setAttribute('onclick', '_Expand_Folder(this)');
    console.log(e.parentElement);
}

function _Expand_Folder(e) {
    // console.log(e);
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