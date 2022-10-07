<?php
include_once('conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();
 
// Campos de tabla usuarios
$ID=$_POST['ID']; 
$NOMBRE=$_POST['NOMBRE'];
$APELLIDO_PATERNO=$_POST['APELLIDO_PATERNO'];
$APELLIDO_MATERNO=$_POST['APELLIDO_MATERNO'];
$DIRECCION=$_POST['DIRECCION'];
$TELEFONO=$_POST['TELEFONO'];
$EMAIL=$_POST['EMAIL'];
$PASSWORD=$_POST['PASSWORD'];

// Campos de la tabla empleados (docentes)
$CLAVE_EMPLEADO=$_POST['CLAVE_EMPLEADO'];
$ULTIMO_GRADO_ESTUDIOS=$_POST['ULTIMO_GRADO_ESTUDIOS'];
$ESPECIALIDAD=$_POST['ESPECIALIDAD'];
$CEDULA_PROFESIONAL=$_POST['CEDULA_PROFESIONAL'];

$consulta="UPDATE usuarios SET NOMBRE='$NOMBRE', APELLIDO_PATERNO='$APELLIDO_PATERNO', APELLIDO_MATERNO='$APELLIDO_MATERNO', DIRECCION='$DIRECCION', TELEFONO='$TELEFONO', EMAIL='$EMAIL', PASSWORD='$PASSWORD' WHERE ID = '$ID'";
$resultado=$conexion->prepare($consulta);
$resultado->execute();

$consulta="UPDATE empleados SET CLAVE_EMPLEADO='$CLAVE_EMPLEADO', ULTIMO_GRADO_ESTUDIOS='$ULTIMO_GRADO_ESTUDIOS', ESPECIALIDAD='$ESPECIALIDAD', CEDULA_PROFESIONAL='$CEDULA_PROFESIONAL' WHERE USUARIO_ID = '$ID'";
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