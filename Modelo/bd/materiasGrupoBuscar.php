<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$search=$_POST['search'];

$consulta="SELECT m.ID, m.NOMBRE, m.CADUCIDAD, cm.NOMBRE AS CATEGORIA, cm.COLOR, cm.ID AS ID_CAT, m.DESCRIPCION, m.LINK_IMAGEN, m.STOCK FROM MEDICAMENTOS m INNER JOIN CATEGORIA_MEDICAMENTO cm ON m.ID_CAT_MEDICAMENTO = cm.ID WHERE m.NOMBRE LIKE '%$search%' OR m.CADUCIDAD LIKE '%$search%' OR cm.NOMBRE LIKE '%$search%' OR m.DESCRIPCION LIKE '%$search%';";
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