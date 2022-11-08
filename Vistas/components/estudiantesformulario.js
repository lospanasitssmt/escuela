class EstudiantesForm extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({
            mode: 'open'
        });


        this.divStyle = document.createElement("style");
        this.divContent = document.createElement("div");

        shadow.appendChild(this.divStyle);
        shadow.appendChild(this.divContent);
    }

    connectedCallback() {
        let titulo = "";
        let botones = "";

        if (this.getAttribute("accion") == "editar") {
            titulo = "Editar estudiante";
            botones = `
                <div id="contenedor-btns">
                    <div>
                        <button id="btnactualizar" class="text-btn btn-contenedor btn-guardar">
                            <span>
                                Guardar cambios
                            </span>
                        </button>
                    </div>
                        
                    <div>
                        <button id="btneliminar" class="text-btn btn-contenedor btn-eliminar">
                            <span>
                                Eliminar de este grupo
                            </span>
                        </button>
                    </div>
                </div>
            `;
        } else if (this.getAttribute("accion") == "ver") {
            titulo = "Visualizar estudiante";
            
        } else if (this.getAttribute("accion") == "eliminar") {
            titulo = "Eliminar estudiante de este grupo";
            botones = `
            <input id="btnconfirmar" class="btn-enviar text-btn btn-contenedor" type='submit' value='Confirmar'></input>
            <input id="btncancelar" class="btn-enviar text-btn btn-contenedor" type='submit' value='Cancelar' onClick="cerrar(${this.getAttribute("idelemento")})"></input>
            `;
        }

        this.divStyle.innerHTML = `
        .modal{
            background-color: #fff;
            max-width: 100%;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            text-align: center;
            padding: 35px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
            border-radius: 20px;
        }
        #encabezado{
            margin-bottom: 50px;
        }
        #titulo{
            float: left;
        }
        #titulo h2{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 28px;

            letter-spacing: -0.37px;


            color: #000000;
            margin: 0;
        }
        #titulo{
            display: inline-block;
        }
        #btn-cerrar{
            background: rgba(230, 230, 230, 0.5);
            backdrop-filter: blur(3.91011px);
            padding: 7.82022px;
            border-radius: 50%;
            float: right;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            cursor: pointer;

        }
        #contenedor-form{
            display: grid;
            gap: 50px 50px;
            grid-template-columns: auto auto;
        }
        .contenedor-atributo{
            background: rgba(233, 236, 248, 0.9);
            border-radius: 8px;
            width: 370px;
            height: 50px;
            padding: 8px 16px 8px 16px;
        }

        .contenedor-atributo div{
            float: left;
            margin-bottom: 5px;
        }

        .contenedor-atributo span{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #5570F1;
        }

        .input-atributo{
            height: 20px;
            border: none;
            outline: none;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            width: 100%;
            background: none;
        }

        .textarea-atributo{
            height: 136px;
        }

        .textarea-atributo textarea{
            height: 100px;
            resize: none;
        }
        #contenedor-subir-img{
            border: 1px dashed rgba(156, 176, 197, 0.7);
            border-radius: 16px 16px 16px 0px;
            margin: 20px;
            position: relative;
            cursor: pointer;

        }
        #contenedor-subir-img-2{
            position: absolute;
            top: 20%;
            left: 18%;
        }
        #text-subir{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 11px;
            line-height: 20px;

            color: rgba(44, 51, 57, 0.95);
        }
        .text-btn{
            font-family: 'Archivo';
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 16px;
            text-align: center;
        }

        .btn-contenedor{
            padding: 12px 20px 12px 20px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            margin-top: 32px;

        }

        .btn-enviar{
            background: #2074F2;
            color: #FFFFFF;

        }
        #contenedor-btns{
            display: grid;
            gap: 50px 50px;
            grid-template-columns: auto auto;
        }
        .btn-guardar{
            background: #D8E6FF;
        }
        .btn-guardar span{
            color: #1B4EA3;
        }
        .btn-eliminar{
            background: #FBCACA;
        }
        .btn-eliminar span{
            color: #A3141D;
        }

        
        `;

        this.divContent.innerHTML = `
            <div class="modal">

                <div id="encabezado">
                    <div id="titulo">
                        <h2>
                            ${titulo}
                        </h2>
                    </div>

                    <div id='btn-cerrar' class='btn-cerrar'>
                        <img id='close' class='close' onClick="cerrar(${this.getAttribute("idelemento")}, 'xdxdxdx')"
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADwSURBVHgB7ZRhDYMwEIXbKpgEJGwOmANwAEHANEzBHAAOtikACUzBkDAFsNeEJoQc9PFrP9aXXJpe7+6D44pSQX8pLTmLorgMw5CM45jXdd0rj7IsO2it77C2LMvr8txISSgeY4mR1KBApPyAxsYjL5FiRAjeIsfSwaIt0AxwhPWApFKc2K6VAud563znFGSr0B6AF7ICSrGvWAAFEUBOFICGTCA7BG+3nwAtk2uYIHcP5j7bMt940xDhm5wUMd40ZGWKOrvuAf3unrAF2DixXcaYmyKeEP7PonWVWE9y4t/1QsKDuQcOBLPxTxUU5PQFtTXR4B6U9+MAAAAASUVORK5CYII=' />
                    </div>
                </div>

                <br>

                <form id="formmed">
                    <div id="contenedor-form">
                        <div class="contenedor-atributo">
                            <div>
                                <span>
                                    Nombre
                                </span>
                            </div>
                            <br>
                            <input id="nombre" type="text" placeholder="Escribe el nombre del estudiante" class="input-atributo">
                        </div>


                        <div class="contenedor-atributo">
                            <div>
                                <span>
                                    Apellido Paterno
                                </span>
                            </div>
                            <br>
                            <input id="apellidoPaterno" type="text" placeholder="Escribe el apellido paterno del estudiante" class="input-atributo">
                        </div>

                        <div class="contenedor-atributo">
                            <div>
                                <span>
                                    Apellido Materno
                                </span>
                            </div>
                            <br>
                            <input id="apellidoMaterno" type="text" placeholder="Escribe el apellido materno del estudiante" class="input-atributo">
                        </div>

                        <div class="contenedor-atributo">
                            <div>
                                <span>
                                    Matricula
                                </span>
                            </div>
                            <br>
                            <input id="matricula" type="text" placeholder="Escribe la matricula del estudiante" class="input-atributo">
                        </div>


                        <input id="btn-file" type="file" hidden>


                    </div>
                    ${botones}
                </form>
                </div>
            </div>
        `;

        let fileImagen;

        this.btnactualizar = this.shadowRoot.querySelector("#btnactualizar");
        this.btneliminar = this.shadowRoot.querySelector("#btneliminar");
        this.nombre = this.shadowRoot.querySelector("#nombre");
        this.apellidoPaterno = this.shadowRoot.querySelector("#apellidoPaterno");
        this.apellidoMaterno = this.shadowRoot.querySelector("#apellidoMaterno");
        this.matricula = this.shadowRoot.querySelector("#matricula");
        //alert(this.selectcat.value);

        if (this.getAttribute("accion") == "editar") {
            this.nombre.value = this.getAttribute("nombre");
            this.apellidoPaterno.value = this.getAttribute("apellidoPaterno");
            this.apellidoMaterno.value = this.getAttribute("apellidoMaterno");
            this.matricula.value = this.getAttribute("matricula");
            

            this.btnactualizar.addEventListener("click", ()=>{
                $.ajax({
                    url: "../Modelo/bd/alumnosactualizar.php",
                    type: "POST",
                    datatype: "json",
                    data: {
                        ID: this.getAttribute("idusuario"),
                        NOMBRE: this.nombre.value,
                        APELLIDO_PATERNO: this.apellidoPaterno.value,
                        APELLIDO_MATERNO: this.apellidoMaterno.value,
                        MATRICULA: this.matricula.value,
                    },
                    success: function (data) {
                        if (data == '"null"') {
                            alert('La información no se actualizo');
                            return false;
                        } else {
                            alert('La información ha sido actualizada');
                        }
                    }
                });
            });

            this.btneliminar.addEventListener("click", ()=>{
                $.ajax({
                    url: "../Modelo/bd/alumnoseliminardegrupo.php",
                    type: "POST",
                    datatype: "json",
                    data: {
                        ID: this.getAttribute("idusuario"),
                    },
                    success: function (data) {
                        if (data == '"null"') {
                            alert('No pudo ser eliminado este estudiante de este grupo');
                            return false;
                        } else {
                            alert('Estudiante eliminado');
                        }
                    }
                });
            });

        } else if(this.getAttribute("accion") == "ver"){
            this.nombre.value = this.getAttribute("nombre");
            this.apellidoPaterno.value = this.getAttribute("apellidoPaterno");
            this.apellidoMaterno.value = this.getAttribute("apellidoMaterno");
            this.matricula.value = this.getAttribute("matricula");

        } else if(this.getAttribute("accion") == "eliminar"){
            this.btnconfirmar = this.shadowRoot.querySelector("#btnconfirmar");
            this.nombre.value = this.getAttribute("nombre");
            this.apellidoPaterno.value = this.getAttribute("apellidoPaterno");
            this.apellidoMaterno.value = this.getAttribute("apellidoMaterno");
            this.matricula.value = this.getAttribute("matricula");

            this.btnconfirmar.addEventListener("click", ()=>{
                $.ajax({
                    url: "../Modelo/bd/alumnoseliminardegrupo.php",
                    type: "POST",
                    datatype: "json",
                    data: {
                        ID: this.getAttribute("idusuario"),
                    },
                    success: function (data) {
                        if (data == '"null"') {
                            alert('No pudo ser eliminado este estudiante de este grupo');
                            return false;
                        } else {
                            alert('Estudiante eliminado');
                        }
                    }
                });
            });
        }

    }
}

customElements.define("estudiantes-form", EstudiantesForm);