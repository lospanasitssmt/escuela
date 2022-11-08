<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$NOMBRE=$_POST['NOMBRE'];
$APELLIDO_PATERNO=$_POST['APELLIDO_PATERNO'];
$APELLIDO_MATERNO=$_POST['APELLIDO_MATERNO'];
$DIRECCION=$_POST['DIRECCION'];
$TELEFONO=$_POST['TELEFONO'];
$EMAIL=$_POST['EMAIL'];
$PASSWORD=$_POST['PASSWORD'];


$consulta="INSERT INTO usuarios(NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, DIRECCION, TELEFONO, EMAIL, TIPO_USUARIO_ID, PASSWORD) VALUES('$NOMBRE', '$APELLIDO_PATERNO', '$APELLIDO_MATERNO', '$DIRECCION', '$TELEFONO', '$EMAIL', '1', '$PASSWORD')";
$resultado=$conexion->prepare($consulta);
$resultado->execute();
if($resultado->rowCount()>=1){
	//$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

$IDA=$conexion->lastInsertId();
/*$consulta="INSERT INTO alumnos(MATRICULA, USUARIO_ID, GRUPO_ID) VALUES('$MATRICULA', '$IDA', '$GRUPO_ID')";
$resultado=$conexion->prepare($consulta);
$resultado->execute();*/

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
?>