function __READ_DIR(dir) {

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "dapur/baca_disk.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // header

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let hasil = this.response;
            hasil = JSON.parse(hasil);
            delete hasil['.$key.'];
            console.log(hasil);
        }
    }

    xhr.send('dir=' + dir);

}

console.log("xhttpJS");