<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$search=$_POST['search'];

$consulta="SELECT 
                u.ID, u.NOMBRE, U.APELLIDO_PATERNO, u.APELLIDO_MATERNO 
                FROM usuarios u
                WHERE 
                u.NOMBRE LIKE '%$search%' OR
                u.APELLIDO_PATERNO LIKE '%$search%' OR
                u.APELLIDO_MATERNO LIKE '%$search%'
                ;";


$resultado=$conexion->prepare($consulta);
$resultado->execute();
if($resultado->rowCount()>=1){
	$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
}else{
	$data="null";
}
print json_encode($data);
$conexion=null;
?>