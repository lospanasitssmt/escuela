<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$ID=$_POST['ID'];
$NOMBRE=$_POST['NOMBRE'];
$APELLIDO_PATERNO=$_POST['APELLIDO_PATERNO'];
$APELLIDO_MATERNO=$_POST['APELLIDO_MATERNO'];

$GRUPO_ID=$_POST['GRUPO_ID'];
$MATRICULA=$_POST['MATRICULA'];


$consulta="UPDATE usuarios SET NOMBRE = '$NOMBRE', APELLIDO_PATERNO = '$APELLIDO_PATERNO', APELLIDO_MATERNO = '$APELLIDO_MATERNO' WHERE ID = '$ID'";
$resultado=$conexion->prepare($consulta);
$resultado->execute();

$consulta="UPDATE alumnos SET GRUPO_ID = '$GRUPO_ID', MATRICULA = '$MATRICULA' WHERE USUARIO_ID = '$ID'";
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