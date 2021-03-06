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
    <link rel="stylesheet" href="css/window_browse.css">
    <link rel="stylesheet" href="css/footer.css">

    <!-- Blank Style to Manipulate -->
    <style></style>

</head>

<body>

    <!-- Menu Bar -->
    <nav id="menu">
        <div class="menubar-button">
            <input type="button" id="btn_simpan" onclick="_Simpan_File()"/>
            <label for="btn_simpan" class="btn">Simpan</label>
        </div>
        <div class="menubar-button">
            <input type="button" id="btn_tentang"/>
            <label for="btn_tentang" class="btn">Tentang</label>
        </div>
        <div class="menubar-button">
            <button id="btn_open_project">Open Project</button>
        </div>
    </nav>
    <!-- // Menu Bar -->

    <!-- Container -->
    <div class="container">

        <!-- Left Panel -->
        <div id="leftpanel">
            <div id="dir-project-wrapper"></div>
        </div>
        <!-- // Left Panel -->

        <!-- Resizer -->
        <div id="resizer" onselectstart="return false" onmousedown="return false"></div>

        <!-- Right Panel -->
        <div id="rightpanel">
            <textarea id="isi-content" spellcheck="false" onchange onpropertychange onkeyuponpaste></textarea>
        </div>
        <!-- // Right Panel -->
    </div>
    <!-- // Container -->

    <div class="clear-float"></div>

    <footer id="footer">
        <p id="footer-notif"></p>
    </footer>
    
<script src="js/script.js"></script>
<script src="js/ui/leftpanel/projectdir.js"></script>
<script src="js/ui/app.js"></script>
<script src="js/ui/resizer.js"></script>
<script src="js/ui/notif.js"></script>
<script src="js/ui/menu/menu.js"></script>
<script src="js/ui/shortcut.js"></script>
<script src="js/utility/builder.js"></script>

</body>

</html>