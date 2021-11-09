/* Memanggil File JS */
function __require_script(url) {
    // console.log("__require_script: " + url);
    const s = document.createElement('script');
    s.src = url;
    s.setAttribute('data-scriptname', url);
    document.body.appendChild(s);
}

/* Menghapus File JS */
function __unrequire_script(name) {
    document.querySelector(`[data-scriptname="${name}"`).remove();
}

/* Call Script */
__require_script('js/handler/PHPGue.js');

__require_script('js/script.js');

__require_script('js/ui/app.js');
__require_script('js/ui/resizer.js');
__require_script('js/ui/menu.js');
__require_script('js/ui/shortcut.js');

__require_script('js/utility/builder.js');

__require_script('js/handler/xhttp.js');

__require_script('js/dir_handler.js');