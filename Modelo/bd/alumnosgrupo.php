<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$grupo=$_GET['idgrupo'];

$consulta="SELECT 
                a.ID, a.MATRICULA, a.USUARIO_ID, a.GRUPO_ID, u.NOMBRE, u.APELLIDO_PATERNO, u.APELLIDO_MATERNO 
                FROM alumnos a
                INNER JOIN usuarios u ON a.USUARIO_ID=u.ID /*USUARIO_ID */
                INNER JOIN grupos g ON a.GRUPO_ID=g.ID /* GRUPO_ID*/
                
                WHERE 
                g.ID=$grupo
                 
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