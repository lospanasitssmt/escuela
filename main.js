//document.getElementById("search").addEventListener("keyup", buscar);
let contador = 0;
getMedicamentos("");

const open = document.getElementById('btn_add_med');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');


const grupos = document.getElementById('grupos');
const grupospormateria = document.getElementById('grupospormateria');

$('#search').keyup(function (e) {
    e.preventDefault();
    var search = $.trim($("#search").val());
    if (search == "") {
        if (contador == 0) {
            getMedicamentos("");
            contador++;
        }
    } else {

        getMedicamentos(search);
        contador = 0;
    }
});

function getMedicamentos(search) {
    $.ajax({
        url: "bd/busqueda.php",
        type: "POST",
        data: {
            search: search
        },
        success: function (response) {
            let medicamentos = JSON.parse(response);
            let template = '';
            medicamentos.forEach(medicamento => {
                template += `
                <div>
                    <medicamentos-tarjeta 
                    idmedicamento="${medicamento.ID}" 
                    titulo="${medicamento.NOMBRE}" 
                    color="${medicamento.COLOR}"
                    fecha="${medicamento.CADUCIDAD}"
                    categoria="${medicamento.CATEGORIA}"
                    idcat="${medicamento.ID_CAT}"
                    descripcion="${medicamento.DESCRIPCION.length > 0 ? medicamento.DESCRIPCION : 'Sin descripción'}"
                    url="${medicamento.LINK_IMAGEN != null ? medicamento.LINK_IMAGEN : 'Medicamentos.webp'}"
                    stock="${medicamento.STOCK}">
                    </medicamentos-tarjeta>
                </div>
                `;
            });
            $('#tarjetas').html(template);

        }
    });
}

grupos.addEventListener('click', ()=> {
    grupos.classList.remove('gruponoseleccionado');
    grupos.classList.add('gruposeleccionado');
    grupospormateria.classList.remove('gruposeleccionado');
    grupospormateria.classList.add('gruponoseleccionado');
});

grupospormateria.addEventListener('click', ()=> {
    grupos.classList.remove('gruposeleccionado');
    grupos.classList.add('gruponoseleccionado');
    grupospormateria.classList.remove('gruponoseleccionado');
    grupospormateria.classList.add('gruposeleccionado');
});

open.addEventListener('click', () => {
    let template = `
    <medicamento-form
    accion = "registrar"
    >     
    </medicamento-form>
    `;
    $('#modal_container').html(template);
    modal_container.classList.remove('hide');
    modal_container.classList.add('show');

});

function editarMedicamento(idmed, nombre, caducidad, idcat, descripcion, url, stock) {
    let template = `
    <medicamento-form
    accion = "editar"
    idmedicamento="${idmed}" 
    titulo="${nombre}" 
    fecha="${caducidad}"
    idcat="${idcat}"
    descripcion="${descripcion == 'Sin descripción' ? "null" : descripcion}"
    url="${url == 'Medicamentos.webp' ? "null" : url}"
    stock="${stock}"
    >  
    </medicamento-form>
    `;
    $('#modal_container').html(template);
    modal_container.classList.remove('hide');
    modal_container.classList.add('show');
}


function cerrar() {
    modal_container.classList.remove('show');
    modal_container.classList.add('hide');
}

function alerta() {
    $('#prueba').click();
}

function registrarMed(nombre, caducidad, id_cat_medicamento, descripcion, stock) {
    

    $.ajax({
        url: "bd/insertmed.php",
        type: "POST",
        datatype: "json",
        data: {
            nombre: nombre,
            caducidad: caducidad,
            id_cat_medicamento: id_cat_medicamento,
            descripcion: descripcion,
            stock: stock,
        },
        success: function (data) {
            if (data == '"null"') {
                alert('Medicamento no registrado');
            } else {
                alert('Medicamento registrado');
            }
        }
    });




}