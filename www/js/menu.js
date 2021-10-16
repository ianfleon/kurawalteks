// console.log("menu.js--");

const menu_btn_open_folder = document.getElementById('btn_open_project');
// console.log(menu_btn_open_folder);

menu_btn_open_folder.addEventListener('click', function() {
    __CallPartial('/partial/window_browse_folder.html', function(data) {
        const newel = document.createElement('div');
        newel.setAttribute('id', 'penahan');
        document.body.insertBefore(newel, document.getElementById('menu'));
        newel.innerHTML = data;
    });
    __require_once('js/ofp.js');
});

/* Tentang */
function _tentang() {
    new Popup("KurawalTeks v0.1");
}

function popup_browse_close(el) {
    __delete_once('js/ofp.js');
    document.getElementById('penahan').remove();
}