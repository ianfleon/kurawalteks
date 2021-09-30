const menu = document.getElementById('menu');
const leftpanel = document.getElementById('leftpanel');
const rightpanel = document.getElementById('rightpanel');

// console.log(menu);

let menu_height = 20;

menu.style.height = menu_height + "px";

leftpanel.style.width = 200 + "px";
leftpanel.style.height = window.outerHeight - menu_height + "px";

rightpanel.style.width = window.outerWidth - (leftpanel.offsetWidth + 30) + "px";
rightpanel.style.height = window.outerHeight - menu_height + "px";

window.addEventListener('resize', function() {
    leftpanel.style.height = window.outerHeight - menu_height + "px";

    rightpanel.style.height = window.outerHeight;
    rightpanel.style.width = window.outerWidth - (leftpanel.offsetWidth + 30) + "px";
});