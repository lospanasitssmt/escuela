<?php
include_once('conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$consulta="SELECT 
                g.ID, g.CLAVE, g.DESCRIPCION, g.GRADO, g.TUTOR_ID,  
                    (SELECT COUNT(*) FROM alumnos  al WHERE  al.GRUPO_ID= g.ID) as NOALUMNOS
                FROM grupos g

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