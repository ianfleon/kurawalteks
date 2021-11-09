class PHPGue {

    static xhttp(method, action, parameter, respon, callback) {

        /* Template:
        * POST, file.php, id=1, fungsisaya()
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

}