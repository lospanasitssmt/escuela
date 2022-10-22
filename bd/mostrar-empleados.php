<?php
include_once('conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$consulta="SELECT 
                e.ID,  u.NOMBRE, u.APELLIDO_PATERNO, u.APELLIDO_MATERNO, e.CLAVE_EMPLEADO, e.ESPECIALIDAD, g.GRADO, e.CEDULA_PROFESIONAL, e.USUARIO_ID, e.ULTIMO_GRADO_ESTUDIOS, u.TELEFONO, u.EMAIL
                FROM empleados e
                INNER JOIN usuarios u ON e.USUARIO_ID=u.ID /*USUARIO_ID */
                INNER JOIN grupos g ON e.ID=g.TUTOR_ID
                WHERE 

                u.TIPO_USUARIO_ID=1
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