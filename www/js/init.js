console.log("REQUIRE ONCE");

function __require_once(url) {
    console.log("__require_once: " + url);
    const s = document.createElement('script');
    s.src = url;
    document.body.appendChild(s);
}