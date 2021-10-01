<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KurawalTeks</title>

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/leftpanel.css">
    <link rel="stylesheet" href="css/rightpanel.css">

    <!-- Blank Style to Manipulate -->
    <style></style>

</head>
<body>

    <!-- Menu Bar -->
    <nav id="menu">
        <div class="menubar-button">
            <input type="button" id="btn_simpan" onclick="_simpan_file()" disabled/>
            <label for="btn_simpan" class="btn">Simpan</label>
        </div>
        <div class="menubar-button">
            <input type="button" id="btn_tentang" onclick="_tentang()"/>
            <label for="btn_tentang" class="btn">Tentang</label>
        </div>
        <div class="menubar-button">
            <input type="file" webkitdirectory multiple id="btn_open_project" />
            <label for="btn_open_project" class="btn">Open Folder</label>
        </div>
    </nav>
    <!-- // Menu Bar -->

    <!-- Container -->
    <div class="container">

        <!-- Left Panel -->
        <div id="leftpanel">
            <div id="dir-item"></div>
        </div>
        <!-- // Left Panel -->

        <!-- Right Panel -->
        <div id="rightpanel">
            <textarea id="isi-content" spellcheck="false" onchange onpropertychange onkeyuponpaste
                oninput="_tes()"></textarea>
        </div>
        <!-- // Right Panel -->
    </div>
    <!-- // Container -->

    <!-- JS -->
    <script src="js/app.js"></script>
    <script src="js/script.js"></script>
    <script src="js/menu.js"></script>
    <script src="js/shortcut.js"></script>
    
    <!-- Komponen -->
    <script src="komponen/popup.js"></script>
</body>
</html>