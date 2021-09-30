const menu = document.getElementById('menu');
const leftpanel = document.getElementById('leftpanel');

console.log(menu);

let menu_height = 20;

menu.style.height = menu_height + "px";

leftpanel.style.height = window.outerHeight - menu_height + "px";

window.addEventListener('resize', function() {
    leftpanel.style.height = window.outerHeight - menu_height + "px";
});