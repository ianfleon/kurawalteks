console.log("KurawalTeks v0.1 dev\n-------");

var uri = "E:/Reposaya/kurawalteks/fileku";

/* Mengambil Data Direktori */
function _post(alamat) {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "dapur/get_file.php");

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            // console.log(this.responseText);
            document.getElementById('dir-item').innerHTML = this.responseText;
        }
    }

    // console.log(alamat);

    xhr.send("folder=" + alamat);

}

function _read_file(namafile) {
    // _post(encodeURI(alamat+namafile));
    console.log(namafile);
}

_post(encodeURI(uri));