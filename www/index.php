<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KurawalTeks</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Menu Bar -->
    <nav id="menu">
        <button class="menu-bar-button" id="btn-simpan" onclick="_simpan_file()" disabled>Simpan</button>
        <input type="file" class="menu-bar-button" webkitdirectory multiple id="btn_open_project" />
        <button class="menu-bar-button" id="btn-tentang" onclick="_tentang()">Tentang</button>
    </nav>
    <!-- End Menu Bar -->

    <!-- Container -->
    <div class="container">
        <!-- Sidebar File -->
        <div id="leftpanel">
            <div id="dir-item"></div>
        </div>
        <!-- End Sidebar File -->

        <!-- Sidebar Content -->
        <div id="rightpanel">
            <textarea id="isi-content" spellcheck="false" onchange onpropertychange onkeyuponpaste
                oninput="_tes()"></textarea>
        </div>
        <!-- End Sitebar Content -->
    </div>

    <script src="js/app.js"></script>
    <script src="js/script.js"></script>
    <script src="js/menu.js"></script>
    <script src="js/shortcut.js"></script>
</body>

</html>