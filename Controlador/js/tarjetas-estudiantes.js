function Mostrar(){
    $.ajax({
		url:"../Modelo/bd/grupostabla-general.php",
		type:"GET",
        
		success:function(r){
            let template = ``;
            
            let grupos = JSON.parse(r);
            

            grupos.forEach(grupo => {
                if(grupo.NOALUMNOS>0){
                    template += `
                    <estudiantes-tarjeta 
                    idgrupo="${grupo.ID}"
                    idgrado="${grupo.GRADO}"
                    clavegrupo="${grupo.CLAVE}"
                    descripciongrupo="${grupo.DESCRIPCION}"
                    tutorgrupo_ID="${grupo.TUTOR_ID}">

                    </estudiantes-tarjeta>
                    `;
                }
            });
            $('#grid').html(template);
		}
	});
}

function modificar(id, nombre, apellidoPaterno, apellidoMaterno, matricula){
    let template = `
    <estudiantes-form
    accion = "editar"
    
    idusuario="${id}"
    nombre="${nombre}"
    apellidoPaterno="${apellidoPaterno}"
    apellidoMaterno="${apellidoMaterno}" 
    matricula="${matricula}">
    >     
    </estudiantes-form>
    `;
    $('#modal_container').html(template);
    modal_container.classList.remove('hide');
    modal_container.classList.add('show');
}

function visualizar(id, nombre, apellidoPaterno, apellidoMaterno, matricula){
    let template = `
    <estudiantes-form
    accion = "ver"

    idusuario="${id}"
    nombre="${nombre}"
    apellidoPaterno="${apellidoPaterno}"
    apellidoMaterno="${apellidoMaterno}" 
    matricula="${matricula}"
    >     
    </estudiantes-form>
    `;
    $('#modal_container').html(template);
    modal_container.classList.remove('hide');
    modal_container.classList.add('show');
}

function eliminar(id, nombre, apellidoPaterno, apellidoMaterno, matricula){
    let template = `
    <estudiantes-form
    accion = "eliminar"

    idusuario="${id}"
    nombre="${nombre}"
    apellidoPaterno="${apellidoPaterno}"
    apellidoMaterno="${apellidoMaterno}" 
    matricula="${matricula}"
    >     
    </estudiantes-form>
    `;
    $('#modal_container').html(template);
    modal_container.classList.remove('hide');
    modal_container.classList.add('show');
}

//Grupos
function modificargrupo(id, clave, descripcion, grado, tutor){
    let template = `
    <grupos-form
    accion = "editar"
    
    idusuario="${id}"
    clave="${clave}"
    descripcion="${descripcion}"
    grado="${grado}" 
    tutor="${tutor}"
    >     
    </grupos-form>
    `;
    $('#modal_container').html(template);
    modal_container.classList.remove('hide');
    modal_container.classList.add('show');
}

function visualizargrupo(id, clave, descripcion, grado, tutor){
    let template = `
    <grupos-form
    accion = "ver"

    idusuario="${id}"
    clave="${clave}"
    descripcion="${descripcion}"
    grado="${grado}" 
    tutor="${tutor}"
    >     
    </grupos-form>
    `;
    $('#modal_container').html(template);
    modal_container.classList.remove('hide');
    modal_container.classList.add('show');
}

function eliminargrupo(id, clave, descripcion, grado, tutor){
    let template = `
    <grupos-form
    accion = "eliminar"

    idusuario="${id}"
    clave="${clave}"
    descripcion="${descripcion}"
    grado="${grado}" 
    tutor="${tutor}"
    >     
    </grupos-form>
    `;
    $('#modal_container').html(template);
    modal_container.classList.remove('hide');
    modal_container.classList.add('show');
}

$(document).ready(function() {
    Mostrar();
});