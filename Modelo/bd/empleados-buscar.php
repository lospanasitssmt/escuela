<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$search=$_POST['search'];

$consulta="SELECT 
                e.ID,  u.NOMBRE, u.APELLIDO_PATERNO, u.APELLIDO_MATERNO, e.CLAVE_EMPLEADO, e.ESPECIALIDAD, e.CEDULA_PROFESIONAL, e.USUARIO_ID, u.TELEFONO, u.EMAIL
                FROM empleados e
                INNER JOIN usuarios u ON e.USUARIO_ID=u.ID /*USUARIO_ID */
                WHERE 
                e.CLAVE_EMPLEADO LIKE '%$search%' OR
                e.ESPECIALIDAD LIKE '%$search%' OR 

                u.NOMBRE LIKE '%$search%' OR
                u.APELLIDO_PATERNO LIKE '%$search%' OR
                u.APELLIDO_MATERNO LIKE '%$search%'
                ;";


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