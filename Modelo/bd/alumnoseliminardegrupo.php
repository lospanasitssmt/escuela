<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$ID=$_POST['ID'];


$consulta="UPDATE alumnos SET GRUPO_ID = NULL WHERE USUARIO_ID = '$ID'";
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