/* Membuat Element */
function __CreateElement(tag, teks, attr) {
    const t1 = document.createElement(tag);
    const t2 = document.createTextNode(teks);
    t1.appendChild(t2);
    const keys = Object.keys(attr);
    keys.forEach((key) => {
        t1.setAttribute(key, attr[key]);
    });

    return t1;
}

/* Memanggil File HTML */
function __CallPartial(url, callback) {
    fetch(url).then(response => response.text()).then(data => callback(data));
}