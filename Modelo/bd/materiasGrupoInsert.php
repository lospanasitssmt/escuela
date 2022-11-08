<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$idmateria=$_POST['idmateria'];
$idgrupo=$_POST['idgrupo'];

$consulta="INSERT INTO MATERIAS_GRUPO(MATERIAS_DOCENTE_ID, GRUPOS_ID) VALUES('$idmateria', '$idgrupo')";
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