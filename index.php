<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="https://kit.fontawesome.com/fa963c3f73.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="jquery/jquery-3.6.0.min.js"></script>
    
    <script type="text/javascript" src="components/docentes-tabla.js"></script>

    <script src='components/usuario-tarjeta.js'></script>

    <link rel="stylesheet" type="text/css" href="css/styles.css">


    <!--Librerias slider-->
    <link rel="stylesheet" href="css/slider.css">

    <!--<link href="https://fonts.googleapis.com/css?family=DM+Sans&display=swap" rel="stylesheet" />-->
</head>

<body>

     

    
    <!--Barra de busqueda-->
    <div id="contenedor-barra">
        <!--Logo-->
        <div id="container-logo" class="item-nav">
            <img src="imagenes/logoITSSMT.svg">
        </div>
        <!--Input busqueda-->
        <div id="container-searchbar" class="item-nav">
            <img id="icon-search" src="imagenes/Search_alt.svg">
            <input type="text" id="search" placeholder="Buscar ...">
        </div>
        <!--Cuenta img-->
        <div id="container-cuenta" class="item-nav">
            <img id="notificacion-icn" src="imagenes/bell.svg">
            <img id="img-user-nav" class="img-user" src="imagenes/perfil.jpg">
            <span id="user-name-nav">Jane</span>
            <img src="imagenes/flecha.svg">
        </div>
    </div>
    <!--Termina barra de busqueda-->

    <!--Sidebar-->
    <div class="sidebar">
        <ul class="nav">
            <!--Inicio-->
            <li class="select-item">
                <a href="#">
                    <img class="icon-item" src="imagenes/inicio-icn.svg">
                    <span>Inicio</span>
                    <img class="flecha-item" src="imagenes/flecha.svg">
                </a>
            </li>
            <!--Usuarios-->
            <li>
                <a href="#">
                    <img class="icon-item" src="imagenes/usuarios-icn.svg">
                    <span>Usuarios</span>
                    <img class="flecha-item" src="imagenes/flecha.svg">
                </a>
            </li>
            <!--Docentes-->
            <li>
                <a href="#">
                    <img class="icon-item" src="imagenes/docentes-icn.svg">
                    <span>Docentes</span>
                    <img class="flecha-item" src="imagenes/flecha.svg">
                </a>
            </li>
            <!--Alumnos-->
            <li>
                <a href="#">
                    <img class="icon-item" src="imagenes/alumnos-icn.svg">
                    <span>Alumnos</span>
                    <img class="flecha-item" src="imagenes/flecha.svg">
                </a>
            </li>
            <!--Materias-->
            <li>
                <a href="#">
                    <img class="icon-item" src="imagenes/materias-icn.svg">
                    <span>Materias</span>
                    <img class="flecha-item" src="imagenes/flecha.svg">
                </a>
            </li>
            <!--Grupos-->
            <li>
                <a href="#">
                    <img class="icon-item" src="imagenes/grupos-icn.svg">
                    <span>Grupos</span>
                    <img class="flecha-item" src="imagenes/flecha.svg">
                </a>
            </li>
        </ul>
    </div>

    <!--Termina sidebar-->


    <!--Cuerpo-->
    <div id="main">
        <docentes-tabla
            titulo="Ingenier??a en Sistemas Computacionales"
            subtitulo="Docentes adscritos"
        >

        </docentes-tabla>
>>>>>>> 744c6683ee1a3236ef84b3f15066b8c856efa1a4
    </div>
    <!--Termina cuerpo-->


    <!--Scripts-->
    <script src='main.js'></script>

</body>

</html>