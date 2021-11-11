const menu_btn_open_folder = document.getElementById("btn_open_project");
const menu_btn_tentang = document.getElementById("btn_tentang");

menu_btn_open_folder.addEventListener("click", function () {
    __CallPartial("window_browse_folder.html", function (data) {
        const penahan = __CreateElement("div", "", {
            "id": "penahan",
            "onselectstart": "return false",
            "onmousedown": "return false"
        });
        document.body.insertBefore(penahan, document.getElementById("menu"));
        penahan.innerHTML = data;
    });
    __require_script("js/ui/menu/ofp.js");
});

menu_btn_tentang.addEventListener("click", function () {
    // __CallPartial("popup.html", function (data) {
    //     const penahan = __CreateElement("div", "", {
    //         "id": "penahan",
    //         "onselectstart": "return false",
    //         "onmousedown": "return false"
    //     });
    //     document.body.insertBefore(penahan, document.getElementById("menu"));
    //     penahan.innerHTML = data;
    // });
    prompt("Hai");
});

function popup_browse_close(el) {
    document.getElementById("penahan").remove();
    __unrequire_script("js/ui/menu/ofp.js");
}