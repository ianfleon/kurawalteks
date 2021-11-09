/* Memanggil File JS */
function _require_script(url) {
    // console.log("_require_script: " + url);
    const s = document.createElement('script');
    s.src = url;
    s.setAttribute('data-scriptname', url);
    document.body.appendChild(s);
}

/* Menghapus File JS */
function __delete_once(name) {
    document.querySelector('[data-scriptname]').remove();
}

/* Call Script */
_require_script('js/utility/PHPGue.js');
_require_script('js/script.js');
_require_script('js/app.js');
_require_script('js/resizer.js');
_require_script('js/menu.js');
_require_script('js/builder.js');
_require_script('js/shortcut.js');
_require_script('js/handler/xhttp.js');
_require_script('js/dir_handler.js');