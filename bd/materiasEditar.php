<?php
include_once('conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$id=$_POST['id'];
$clave=$_POST['clave'];
$nombre=$_POST['nombre'];
$docenteid=$_POST['docenteid'];

$consulta="UPDATE MATERIAS SET CLAVE = '$nombre', NOMBRE = '$nombre' WHERE ID = '$id'";
$resultado=$conexion->prepare($consulta);
$resultado->execute();

$consulta="UPDATE MATERIAS_DOCENTE SET DOCENTE_ID = '$docenteid' WHERE MATERIA_ID = '$id'";
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