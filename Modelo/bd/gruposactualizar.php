<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$ID=$_POST['ID'];
$CLAVE=$_POST['CLAVE'];
$DESCRIPCION=$_POST['DESCRIPCION'];
$GRADO=$_POST['GRADO'];
$TUTOR_ID=$_POST['TUTOR_ID'];


$consulta="UPDATE grupos SET CLAVE = '$CLAVE', DESCRIPCION = '$DESCRIPCION', GRADO = '$GRADO', TUTOR_ID = '$TUTOR_ID' WHERE ID = '$ID'";
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