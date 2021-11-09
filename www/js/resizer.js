var startX, startY, startWidth, startHeight;

resize.addEventListener('mousedown', __RESIZER_initDrag, false);

function __RESIZER_initDrag(e) {
    startX = e.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(leftpanel).width, 10);
    document.documentElement.addEventListener('mousemove', __RESIZER_doDrag, false);
    document.documentElement.addEventListener('mouseup', __RESIZER_stopDrag, false);
}

function __RESIZER_doDrag(e) {
    onResizePanel();
    leftpanel.style.width = (startWidth + e.clientX - startX) + 'px';
}

function __RESIZER_stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', __RESIZER_doDrag, false);
    document.documentElement.removeEventListener('mouseup', __RESIZER_stopDrag, false);
}