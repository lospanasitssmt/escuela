<?php
include_once('../../Controlador/conexion.php');
$objeto= new Conexion();
$conexion=$objeto->Conectar();

$consulta="SELECT 
                a.ID, a.MATRICULA, a.USUARIO_ID, a.GRUPO_ID 
                FROM alumnos a
                INNER JOIN usuarios u ON a.USUARIO_ID=u.ID /*USUARIO_ID */
                INNER JOIN grupos g ON a.GRUPO_ID=g.ID /* GRUPO_ID*/
                WHERE 
                a.MATRICULA LIKE '%$search%' OR 

                g.CLAVE LIKE '%$search%' OR
                g.GRADO LIKE '%$search%' OR

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