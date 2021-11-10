// App UI
var menu = document.getElementById('menu');
var leftpanel = document.getElementById('leftpanel');
var rightpanel = document.getElementById('rightpanel');
const resize = document.getElementById('resizer');
const footer = document.getElementById('footer');

// Left Panel
var sidebardir = document.getElementById('dir-item');
var menu_height = 20;
var footer_height = 20;

menu.style.height = menu_height + "px";
footer.style.height = footer_height + "px";

leftpanel.style.width = 200 + "px";
leftpanel.style.height = window.outerHeight - (menu_height + footer_height) + "px";

rightpanel.style.width = window.outerWidth - (leftpanel.offsetWidth + 20) + "px";
rightpanel.style.height = window.outerHeight - (menu_height + footer_height) + "px";

resize.style.height = window.outerHeight - menu_height + "px";

window.addEventListener('resize', onResizePanel, false);

function onResizePanel() {
    leftpanel.style.height = window.outerHeight - menu_height + "px";
    rightpanel.style.height = window.outerHeight - menu_height + "px";
    rightpanel.style.width = window.outerWidth - (leftpanel.offsetWidth + 50) + "px";

    resize.style.height = window.outerHeight - menu_height + "px";
}