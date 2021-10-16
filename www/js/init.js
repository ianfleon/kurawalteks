function __require_once(url) {
    console.log("__require_once: " + url);
    const s = document.createElement('script');
    s.src = url;
    s.setAttribute('data-scriptname', url);

    if (document.querySelector('[data-scriptname]') === null) {
        document.body.appendChild(s);
        return true;
    }
}

function __delete_once(name) {
    document.querySelector('[data-scriptname]').remove();
}