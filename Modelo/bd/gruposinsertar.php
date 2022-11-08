<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$CLAVE=$_POST['CLAVE'];
$DESCRIPCION=$_POST['DESCRIPCION'];
$GRADO=$_POST['GRADO'];
$TUTOR_ID=$_POST['TUTOR_ID'];




$consulta="INSERT INTO grupos(CLAVE, DESCRIPCION, GRADO, TUTOR_ID) VALUES('$CLAVE', '$DESCRIPCION', '$GRADO', '$TUTOR_ID')";
$resultado=$conexion->prepare($consulta);
$resultado->execute();
if($resultado->rowCount()>=1){
	//$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

    $data=$conexion->lastInsertId();
}else{
	$data="null";
}
print json_encode($data);
$conexion=null;
?>