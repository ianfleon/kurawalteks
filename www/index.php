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

    <!-- Blank Style to Manipulate -->
    <style></style>

</head>

<body>

    <!-- Menu Bar -->
    <nav id="menu">
        <div class="menubar-button">
            <input type="button" id="btn_simpan" onclick="_simpan_file()" disabled />
            <label for="btn_simpan" class="btn">Simpan</label>
        </div>
        <div class="menubar-button">
            <input type="button" id="btn_tentang" onclick="_tentang()" />
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
            <textarea id="isi-content" spellcheck="false" onchange onpropertychange onkeyuponpaste
                oninput="_tes()"></textarea>
        </div>
        <!-- // Right Panel -->
    </div>
    <!-- // Container -->

    <!-- Core Script -->
    <script src="js/script.js"></script>

    <!-- App Script -->
    <script src="js/app.js"></script>
    <script src="js/resizer.js"></script>
    <script src="js/menu.js"></script>
    
    <!-- Helper -->
    <script src="js/builder.js"></script>
    <script src="js/shortcut.js"></script>
    
    <!-- Handler -->
    <script src="js/handler/xhttp.js"></script>
    <script src="js/dir_handler.js"></script>
    
    <script src="js/main.js"></script>

</body>

</html>