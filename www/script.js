console.log("KurawalTeks v0.1 dev\n-------");

var uri = "E:/Reposaya/kurawalteks/www/fileku/";
var sidebardir = document.getElementById('dir-item');

function __OPEN_DIR_PROJECT() {
    _POST(uri, "folder", "kurawal_core.php", function (data) {
        document.getElementById('dir-item').innerHTML = data;
    });
}

__OPEN_DIR_PROJECT();

/* Mengambil Data Direktori */
function _POST(url, tipe, file, callback) {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "dapur/" + file, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // header

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            callback(this.responseText);
        }
    }

    xhr.send(tipe + "=" + encodeURI(url));

}

function _read_file(namafile) {
    _POST(namafile, "file", "kurawal_core.php", function (data) {
        const isi = document.getElementById('isi-content');
        isi.setAttribute(['data-path'], namafile);
        isi.value = data;
    });
}

function _collapse_folder(namafolder) {
    _POST(uri + '/' + namafolder, "folder", "kurawal_core.php", function (items) {
        sidebardir.append(items);
    });
}

function _simpan_file() {

    const konten = document.getElementById("isi-content");
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "dapur/simpan.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // header

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log(this.responseText);
            document.getElementById('btn-simpan').setAttribute('disabled', '');
        }
    }

    // console.log(konten.attributes["data-path"]);
    // console.log(konten);

    if (konten.hasAttribute('data-path')) {
        xhr.send("filepath=" + encodeURI(konten.attributes["data-path"].value) + "&" + "isifile=" + encodeURI(konten.value));
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

/* Tentang Aplikasi */
function _tentang() {
    alert("KurawalTeks");
}

function _tes() {
    document.getElementById('btn-simpan').removeAttribute('disabled');
    // if(confirm("Perubahan belum disimpan. Ingin menyimpan?")) {
    //     _simpan_file();
    // }
}

