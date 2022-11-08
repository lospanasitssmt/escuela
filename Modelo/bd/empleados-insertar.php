<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

// Campos de la tabla usuarios
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

$consulta="INSERT INTO usuarios(NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, DIRECCION, TELEFONO, EMAIL, TIPO_USUARIO_ID, PASSWORD) VALUES('$NOMBRE', '$APELLIDO_PATERNO', '$APELLIDO_MATERNO', '$DIRECCION', '$TELEFONO', '$EMAIL', '3', '$PASSWORD')";
$resultado=$conexion->prepare($consulta);
$resultado->execute();
if($resultado->rowCount()>=1){
	//$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

$IDA=$conexion->lastInsertId();
$consulta="INSERT INTO empleados(CLAVE_EMPLEADO, ULTIMO_GRADO_ESTUDIOS, ESPECIALIDAD, CEDULA_PROFESIONAL, USUARIO_ID) VALUES('$CLAVE_EMPLEADO', '$ULTIMO_GRADO_ESTUDIOS', '$ESPECIALIDAD', '$CEDULA_PROFESIONAL', '$IDA')";
$resultado=$conexion->prepare($consulta);
$resultado->execute();
    if($resultado->rowCount()>=1){
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    }else{
        $data="null";    
    }
}else{
	$data="null";
}
print json_encode($data);
$conexion=null;
