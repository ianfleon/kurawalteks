console.log("KurawalTeks v0.1 dev\n-------");

var uri = "E:/Reposaya/kurawalteks/fileku/";
var sidebardir = document.getElementById('dir-item');

/* Mengambil Data Direktori */
function _POST(url, tipe, callback) {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "dapur/" + "kurawal_core.php", true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            // console.log(this.responseText);
            callback(this.responseText);
        }
    }

    // console.log(url);

    xhr.send(tipe + "=" + encodeURI(url));

}

function _read_file(namafile) {
    _POST(uri + namafile, "file", function(data) {
        console.log(data);
        document.getElementById('isi-content').innerHTML = data;
    });
}

function _collapse_folder(namafolder) {
    _POST(uri + '/' + namafolder, "folder", function(items) {
        // console.log(items);
        sidebardir.append(items);
    });
}

_POST(uri, "folder", function(data) {
    // console.log(data);
    document.getElementById('dir-item').innerHTML = data;
});