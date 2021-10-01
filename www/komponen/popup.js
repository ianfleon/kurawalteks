class Popup {

    constructor(pesan)
    {

        const popup = document.createElement("div");

        const popup_text = document.createTextNode(pesan);
        popup.appendChild(popup_text);

        popup.setAttribute('id', 'popup');

        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 3000);

        popup.addEventListener('click', function() {
            popup.remove();
        });

    }

}