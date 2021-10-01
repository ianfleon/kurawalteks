const menu_btn_open_folder = document.getElementById('btn_open_project');

menu_btn_open_folder.addEventListener('change', function(e) {
    console.log(e);
});

/* Tentang */
function _tentang() {
    new Popup("KurawalTeks v0.1");
}