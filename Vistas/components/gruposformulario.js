class GruposForm extends HTMLElement {
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
            titulo = "Editar grupo";
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
                                Eliminar
                            </span>
                        </button>
                    </div>
                </div>
            `;
        } else if (this.getAttribute("accion") == "ver") {
            titulo = "Visualizar grupo";
            
        } else if (this.getAttribute("accion") == "eliminar") {
            titulo = "Eliminar grupo";
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

//Listado de tutores

        let va2="";



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
                                    Clave
                                </span>
                            </div>
                            <br>
                            <input id="clave" value="${this.getAttribute('clave')}" type="text" placeholder="Escribe la clave del grupo" class="input-atributo">
                        </div>


                        <div class="contenedor-atributo">
                            <div>
                                <span>
                                    Descripción
                                </span>
                            </div>
                            <br>
                            <input id="descripcion" value="${this.getAttribute('descripcion')}" type="text" placeholder="Escribe la descripcion del grupo" class="input-atributo">
                        </div>

                        <div class="contenedor-atributo">
                            <div>
                                <span>
                                    Grado
                                </span>
                            </div>
                            <br>
                            <input id="grado" value="${this.getAttribute('grado')}" type="text" placeholder="Escribe el grado y grupo perteneciente al grupo" class="input-atributo">
                        </div>


                    </div>
                    ${botones}
                </form>
                </div>
            </div>
        `;

        let fileImagen;

        this.btnactualizar = this.shadowRoot.querySelector("#btnactualizar");
        this.btneliminar = this.shadowRoot.querySelector("#btneliminar");
        this.clave = this.shadowRoot.querySelector("#clave");
        this.descripcion = this.shadowRoot.querySelector("#descripcion");
        this.grado = this.shadowRoot.querySelector("#grado");
        //this.tutor = this.shadowRoot.querySelector("#listutor");
        
        //this.alumnoAgregado = this.shadowRoot.querySelector("#alumnoAgregado");
        //alert(this.selectcat.value);

     /*   $.ajax({
            url: "bd/alumnosgrupostutores.php",
            type: "GET",
            dataType: "json",
            success: function (data) {
                if (data == '"null"') {
                    alert('La información no se consulto');
                    return false;
                } else {
                    alert(data[0].ID);
                    for(var i=0;i<data.length;i++){
                        const opt = document.createElement('option');
                        opt.value = data[i].ID;
                        opt.innerHTML = data[i].NOMBRE + ' ' + data[i].APELLIDO_PATERNO + ' ' +data[i].APELLIDO_MATERNO;
                        this.tutor.appendChild(opt);
                        
                       
                    }
                    
                }
            }
        });*/

        if (this.getAttribute("accion") == "editar") {
            //this.alumnoAgregado.value = this.getAttribute("alumnoAgregado");

            this.btnactualizar.addEventListener("click", ()=>{
                $.ajax({
                    url: "../Modelo/bd/gruposactualizar.php",
                    type: "POST",
                    datatype: "json",
                    data: {
                        ID: this.getAttribute("idusuario"),
                        CLAVE: this.clave.value,
                        DESCRIPCION: this.descripcion.value,
                        GRADO: this.grado.value,
                        TUTOR_ID: this.getAttribute("tutor"),

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
                    url: "../Modelo/bd/gruposeliminar.php",
                    type: "POST",
                    datatype: "json",
                    data: {
                        ID: this.getAttribute("idusuario"),
                    },
                    success: function (data) {
                        if (data == '"null"') {
                            alert('No pudo ser eliminado este grupo');
                            return false;
                        } else {
                            alert('Grupo eliminado');
                        }
                    }
                });
            });

        } else if(this.getAttribute("accion") == "ver"){
            this.clave.value = this.getAttribute("clave");
            this.descripcion.value = this.getAttribute("descripcion");
            this.grado.value = this.getAttribute("grado");
            this.tutor.value = this.getAttribute("tutor");

        } else if(this.getAttribute("accion") == "eliminar"){
            this.btnconfirmar = this.shadowRoot.querySelector("#btnconfirmar");
            

            this.clave.value = this.getAttribute("clave");
            this.descripcion.value = this.getAttribute("descripcion");
            this.grado.value = this.getAttribute("grado");
            
            
            this.btnconfirmar.addEventListener("click", ()=>{
                $.ajax({
                    url: "../Modelo/bd/gruposeliminar.php",
                    type: "POST",
                    datatype: "json",
                    data: {
                        ID: this.getAttribute("idusuario"),
                    },
                    success: function (data) {
                        if (data == '"null"') {
                            alert('No pudo ser eliminado este grupo');
                            return false;
                        } else {
                            alert('Grupo eliminado');
                        }
                    }
                });
            });
        }


    }
}

customElements.define("grupos-form", GruposForm);