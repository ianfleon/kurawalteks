var menu_height = 20;

menu.style.height = menu_height + "px";

leftpanel.style.width = 200 + "px";
leftpanel.style.height = window.outerHeight - menu_height + "px";

rightpanel.style.width = window.outerWidth - (leftpanel.offsetWidth + 30) + "px";
rightpanel.style.height = window.outerHeight - menu_height + "px";

resize.style.height = window.outerHeight - menu_height + "px";

window.addEventListener('resize', onResizePanel, false);

function onResizePanel() {
    leftpanel.style.height = window.outerHeight - menu_height + "px";
    rightpanel.style.height = window.outerHeight - menu_height + "px";
    rightpanel.style.width = window.outerWidth - (leftpanel.offsetWidth + 50) + "px";

    resize.style.height = window.outerHeight - menu_height + "px";
}