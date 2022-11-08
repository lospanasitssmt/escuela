<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$search=$_POST['search'];

$consulta="SELECT
m.ID,
m.CLAVE,
m.NOMBRE
FROM MATERIAS m
INNER JOIN MATERIAS_DOCENTE md
ON m.ID = md.MATERIA_ID
INNER JOIN EMPLEADOS e
ON e.ID = md.DOCENTE_ID
INNER JOIN USUARIOS u
ON u.ID = e.USUARIO_ID
WHERE
m.CLAVE LIKE '%$search%' OR
m.NOMBRE LIKE '%$search%' OR
u.NOMBRE LIKE '%$search%' OR
u.APELLIDO_PATERNO LIKE '%$search%' OR
u.APELLIDO_MATERNO LIKE '%$search%' OR
u.CLAVE_EMPLEADO LIKE '%$search%';";
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