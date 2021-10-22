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

function __GET_DIR_PROJECT(dir, callback)
{
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "dapur/read_project.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // header

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            
            /* Hasil Drive */
            let hasil = this.responseText;
            hasil = JSON.parse(hasil);

            callback(hasil, dir);
        }
    }

    xhr.send('folder=' + encodeURI(dir));
}