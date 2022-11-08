<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$ID=$_POST['ID'];

$consulta="UPDATE alumnos SET GRUPO_ID = NULL WHERE GRUPO_ID='$ID'";
$resultado=$conexion->prepare($consulta);
$resultado->execute();

$consulta="DELETE FROM grupos WHERE ID = '$ID'";
$resultado=$conexion->prepare($consulta);
$resultado->execute();
if($resultado->rowCount()>=1){
	$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
	$data="Eliminado exitosamente";
}else{
	$data="null";
}
print json_encode($data);
$conexion=null;
?>