<?php
include_once('conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$id=$_POST['id'];

$consulta="DELETE FROM MATERIAS_DOCENTE WHERE MATERIA_ID = '$id'";
$resultado=$conexion->prepare($consulta);
$resultado->execute();

$consulta="DELETE FROM MATERIAS WHERE ID = '$id'";
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