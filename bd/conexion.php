<?php

class Conexion{
    public static function Conectar(){
        define('servidor', 'localhost');
        define('nombre_bd', 'escuela');
        define('usuario', 'root');
        define('pass', '');

        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');

        try {
            $conexion = new PDO("mysql:host=".servidor.";dbname=".nombre_bd, usuario, pass, $opciones);
            return $conexion;
            echo 'si conecta';
        } catch(Exception $e) {
            die("error de conexion".$e);
        }
    }
}

?>