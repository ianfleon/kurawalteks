console.log("KurawalTeks v0.1 dev\n-------");

var uri = "E:/Reposaya/kurawalteks/fileku/";
var sidebardir = document.getElementById('dir-item');

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
    _POST(namafile, "file", "kurawal_core.php", function(data) {
        const isi = document.getElementById('isi-content');
        isi.setAttribute(['data-path'], namafile);
        isi.value = data;
    });
}

function _collapse_folder(namafolder) {
    _POST(uri + '/' + namafolder, "folder", "kurawal_core.php", function(items) {
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
        }
    }

    // console.log(konten.attributes["data-path"]);
    // console.log(konten);

    xhr.send("filepath=" + encodeURI(konten.attributes["data-path"].value) + "&" + "isifile=" + encodeURI(konten.value));

}

_POST(uri, "folder", "kurawal_core.php", function(data) {
    document.getElementById('dir-item').innerHTML = data;
});