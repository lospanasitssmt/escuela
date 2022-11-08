<?php 
include_once "../../Controlador/conexion.php";
//Datos pasados por POST

$EMAIL=$_POST['EMAIL'];
$PASSWORD=$_POST['PASSWORD'];



$objeto = new Conexion();
$conexion = $objeto->Conectar();
$sql = "SELECT * From usuarios where EMAIL='$EMAIL' AND PASSWORD = '$PASSWORD'";
$resultado = $conexion->prepare($sql);
$resultado->execute();

$filas = $resultado->fetchAll();
if($resultado->rowCount()==1){
    print_r("Usuario correcto");
        //header('location:../index.html');      
}else{
    print_r("Usuario no registrado  :ERROR");
} 
?>