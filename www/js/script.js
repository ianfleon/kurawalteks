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

function _simpan_file() {

    const konten = document.getElementById("isi-content");
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "dapur/simpan.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // header

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // console.log(this.responseText);
            new Popup("Berhasil disimpan");
            document.getElementById('btn-simpan').setAttribute('disabled', '');
        }
    }

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

function __READ_DIR(dir, callback) {

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "dapur/baca_folder.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // header

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            
            /* Hasil Drive */
            let hasil = this.responseText;
            hasil = JSON.parse(hasil);

            callback(hasil, dir);
        }
    }

    xhr.send('dir=' + encodeURI(dir));

}

/* Membaca File JSON */
function __READ_FILE_JSON(filename, callback) {

    const xhr = new XMLHttpRequest();

    xhr.open("POST", filename, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            
            let hasil = this.responseText;
            hasil = JSON.parse(hasil);

            callback(hasil);
        }
    }

    xhr.send();

}