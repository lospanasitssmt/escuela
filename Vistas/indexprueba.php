<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../assets/css/styles.css">

    <script src="https://kit.fontawesome.com/fa963c3f73.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../Controlador/jquery/jquery-3.6.0.min.js"></script>

    <script src='components/grupos-tabla.js'></script>
    

    <title>Document</title>
</head>
<body>
    <div id="bombon">
        <div id="gruposBotones">
            <button type="button" id="grupos" class="gruposeleccionado"> Grupos</button>
            <button type="button" id="grupospormateria" class="gruponoseleccionado"> Grupos por materia</button>
        </div>
    </div>
    <br>
    <grupos-tabla>

    </grupos-tabla>
    <script src='../main.js'></script>
</body>
</html>