/* Run Konfigurasi */
__XHTTP("POST", "konfigurasi.json", "", "responseText", function(data) {
    data = JSON.parse(data);
    _Get_Dir_Project(data.direktori_projek + '/', _Set_Dir_Project);
});

var sidebardir = document.getElementById('dir-item');

function _Simpan_File() {

    const konten = document.getElementById("isi-content");
    const isi = "filepath=" + encodeURI(konten.attributes["data-path"].value) + "&" + "isifile=" + encodeURI(konten.value);
    
    if (konten.hasAttribute('data-path')) {
        __XHTTP("POST", "dapur/simpan.php", isi, "responseText", function(response) {
            console.log(response);
        });
    } else {
        const myBlob = new Blob([konten.value], {
            type: 'text/plain'
        });

        function saveBlob(blob, fileName) {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";

            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);

            location.reload();
        };

        saveBlob(myBlob, 'file.txt');
    }

}

function _Read_File(uri) {
    
    __XHTTP("POST", "dapur/kurawal_core.php", "file=" + encodeURI(uri), "responseText", function(data) {
        const isi = document.getElementById('isi-content');
        isi.setAttribute(['data-path'], uri);
        isi.value = data;
    });

    event.stopImmediatePropagation();
}

/* Memanggil File JS */
function __require_script(url) {
    const s = document.createElement('script');
    s.src = url;
    s.setAttribute('data-scriptname', url);
    document.body.appendChild(s);
}

/* Menghapus File JS */
function __unrequire_script(name) {
    document.querySelector(`[data-scriptname="${name}"`).remove();
}

function __XHTTP(method, action, parameter, respon, callback) {

        /* Template:
        * POST, file.php, id=1, json/teks, fungsisaya()
        */

        const xhr = new XMLHttpRequest();
        xhr.open(method, action, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                callback(this[respon]);
            }
        }

        xhr.send(parameter);

}