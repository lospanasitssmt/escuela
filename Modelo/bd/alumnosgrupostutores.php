<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();


$consulta="SELECT 
                e.ID, u.NOMBRE, u.APELLIDO_PATERNO, u.APELLIDO_MATERNO
                FROM empleados e
                INNER JOIN usuarios u ON e.USUARIO_ID=u.ID /*USUARIO_ID */
                WHERE 
                u.TIPO_USUARIO_ID = 1
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