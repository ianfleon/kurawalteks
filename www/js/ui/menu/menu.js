const menu_btn_open_folder = document.getElementById("btn_open_project");

menu_btn_open_folder.addEventListener("click", function() {
    __CallPartial("/partial/window_browse_folder.html", function(data) {
        const penahan = __CreateElement("div", "", {
            "id" : "penahan",
            "onselectstart" : "return false",
            "onmousedown" : "return false"
        });
        document.body.insertBefore(penahan, document.getElementById("menu"));
        penahan.innerHTML = data;
    });
    __require_script("js/ui/menu/ofp.js");
});

function popup_browse_close(el) {
    document.getElementById("penahan").remove();
    __unrequire_script("js/ui/menu/ofp.js");
}