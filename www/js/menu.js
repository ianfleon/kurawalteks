// console.log("menu.js--");

const menu_btn_open_folder = document.getElementById('btn_open_project');
// console.log(menu_btn_open_folder);

menu_btn_open_folder.addEventListener('click', function() {
    new EmbedHTML('/komponen/window_browse_folder.html', function(data) {
        const newel = document.createElement('div');
        document.body.appendChild(newel);
        newel.innerHTML = data;
    });
    __require_once('js/ofp.js');
    __require_once('js/component.js');
});

/* Tentang */
function _tentang() {
    new Popup("KurawalTeks v0.1");
}

class EmbedHTML {
    constructor(url, callback) {
        fetch(url).then(response => response.text()).then(data => callback(data));
    }
}