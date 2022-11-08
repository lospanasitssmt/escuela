<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$search=$_POST['search'];

$consulta="SELECT 
                g.ID, g.CLAVE, g.DESCRIPCION, g.GRADO, g.TUTOR_ID 
                FROM grupos g
                INNER JOIN empleados e ON g.TUTOR_ID=e.ID
                INNER JOIN usuarios u ON e.USUARIO_ID=u.ID
                WHERE 
                g.CLAVE LIKE '%$search%' OR 
                g.DESCRIPCION LIKE '%$search%' OR 
                g.GRADO LIKE '%$search%' OR 
                g.TUTOR_ID LIKE '%$search%' OR

                e.CLAVE_EMPLEADO LIKE '%$search%' OR
                e.CEDULA_PROFESIONAL LIKE '%$search%' OR

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