<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$id=$_POST['id'];
$idmateria=$_POST['idmateria'];
$idgrupo=$_POST['idgrupo'];

$consulta="UPDATE MATERIAS_GRUPO SET MATERIAS_DOCENTE_ID = '$idmateria', GRUPOS_ID = '$idgrupo' WHERE ID = '$id'";
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