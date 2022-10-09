<?php
include_once('conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$nombre=$_POST['nombre'];
$clave=$_POST['clave'];
$docenteid=$_POST['docenteid'];

$consulta="INSERT INTO MATERIAS(CLAVE, NOMBRE) VALUES('$nombre', '$clave')";
$resultado=$conexion->prepare($consulta);
$resultado->execute();

if($resultado->rowCount()>=1){
	//$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    $IDA=$conexion->lastInsertId();
    $consulta="INSERT INTO MATERIAS_DOCENTE(MATERIA_ID, DOCENTE_ID) VALUES('$IDA', '$docenteid')";
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
?>