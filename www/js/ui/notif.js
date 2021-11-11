function __Footer_Notif(pesan) {
    document.getElementById("footer-notif").innerHTML = pesan;
    setTimeout(() => {
        document.getElementById("footer-notif").innerHTML = "";
    }, 3000);
}