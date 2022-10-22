class DocentesTabla extends HTMLElement {
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

        let conjunto="";

        this.divStyle.innerHTML = `
        .contenedor{            
            background: #FFFFFF;
            border-radius: 15px;
            float: left;
            padding: 7.87px 27.67px;
        }

        .titulo{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            line-height: 22px;

            color: #212121;
        }

        .subtitulo{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 18px;

            color: #212121;
        }

        .boton{
            background: #0048D9;
            border-radius: 5px;
            border: none;

            padding: 9.37px 11px 9.37px 9.62px;
        }

        #img{
            width: 20.32px;
            height: 14.29px;
        }

        #texto_btn{ 
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 13px;
            line-height: 18px;
        
            color: #FFFFFF;
        }

        #btn-complete{
            display: inline-block;
            padding: 30px 0 0 400px;
            transform: translate(0, -30%);
        }

        #texto{
            display: inline-block;
        }

        #espacio{
            display: inline-block;
            width: 46.5px;
        }

        #nombre{
            display: inline-block;
            width: 300px;
        }

        #especialidad{
            display: inline-block;
            width: 215px;
        }

        #grupoT{
            display: inline-block;
            width: 205px;
        }

        #acciones{
            display: inline-block;
            width: 115px;
        }

        #primer-col{
            margin-top: 32px;
            margin-bottom: 15px;
        }

        .encabezado{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 11px;
            line-height: 15px;

            text-transform: uppercase;

            color: #A3A3A3;
        }

        `;

        fetch('bd/mostrar-empleados.php')
            .then(respuesta=> respuesta.json())
            .then(json => json.forEach(docente => {
                conjunto+=`
                    <docentes-tarjetaindividual
                            imagen="imagenes/perfil.jpg"
                            nombre="${docente.NOMBRE} ${docente.APELLIDO_PATERNO} ${docente.APELLIDO_MATERNO}"
                            gradoEstudio="${docente.ULTIMO_GRADO_ESTUDIOS}"
                            especialidad="${docente.ESPECIALIDAD}"
                            cedula="${docente.CEDULA_PROFESIONAL}"
                            grupoTutorado="${docente.GRADO}"
                        >
                        </docentes-tarjetaindividual>

                    `;
            })
        )
        .then(dato => {
            this.divContent.innerHTML = `
        <div class="contenedor">
            <div id="texto">
                <div class="titulo">
                    <span>
                    ${this.getAttribute("titulo")}
                    </span>
                </div>

                <div class="subtitulo">
                    <span>
                        ${this.getAttribute("subtitulo")}
                    </span>
                </div>
            </div>

            <div id="btn-complete">
                <button class="boton">
                    <span>
                        <img id="img" src="imagenes/btnAgregar.png">
                    </span>

                    <span id="texto_btn">
                        Añadir nuevo docente
                    </span>
                
                </button>
            </div>

            <div id="primer-col">
                <div id="espacio"> </div>
                <div id="nombre" class="encabezado">
                    <span>NOMBRE</span>
                </div>
                <div id="especialidad" class="encabezado">
                    <span>ESPECIALIDAD</span>
                </div>
                <div id="grupoT" class="encabezado">
                    <span>GRUPO TUTORADO</span>
                </div>
                <div id="acciones" class="encabezado"> 
                    <span>ACCIONES</span> 
                </div>
            </div>

            <div id="tarjeta">
                ${conjunto}
            </div>

        </div>
        `;
        
        });

        

        /*
        this.tar = this.shadowRoot.querySelector("#tarjeta");
        $.ajax({
            url: "bd/mostrar-empleados.php",
            type: "POST",
            datatype: "JSON",
            success: function(data){
                if(data=='"null"'){
                    console.log("No hay registros");
                } else{
                    let conjunto = "";
                    let docentes = JSON.parse(data);
                    docentes.forEach(docente => {
                        conjunto+=`
                        <docentes-tarjetaindividual
                            imagen="imagenes/perfil.jpg"
                            nombre="${docente.NOMBRE} ${docente.APELLIDO_PATERNO} ${docente.APELLIDO_MATERNO}"
                            gradoEstudio="${docente.ULTIMO_GRADO_ESTUDIOS}"
                            especialidad="${docente.ESPECIALIDAD}"
                            cedula="${docente.CEDULA_PROFESIONAL}"
                            grupoTutorado="${docente.GRADO}"
                        >
                        </docentes-tarjetaindividual>

                        `;
                    });
                    alert(conjunto);
                   
                }
            }
        });
        this.tar.innerHTML("texto");*/

    }
}

//---------------- Inicio de tarjeta individual -----------------------
class DocentesTarjetaIndividual extends HTMLElement {
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


        this.divStyle.innerHTML = `
        .contenedor{
        }

        #nombre{
            display: inline-block;
            width: 300px;
            transform: translate(0, 5%);
        }

        #espacio{
            display: inline-block;
            width: 46.5px;
  
            text-align: center;
            transform: translate(0, -60%);
        }

        #imagen{
            display: inline-block;
            padding-right: 10px;
        }

        #img{
            width: 57.99px;
            height: 41.24px;
            border-radius: 12px;
        }

        #especialidad{
            display: inline-block;
            width: 215px;
        }

        #texto{
            display: inline-block;
            transform: translate(0, -20%);
        }

        .textoPrincipal{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 18px;

            color: #000000;
        }

        .textoSecundario{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;

            color: #8D8D8D;
        }

        #grupoT{
            display: inline-block;
            width: 205px;
            text-align: center;
            transform: translate(0, -80%);
        }

        #acciones{
            display: inline-block;
            width: 115px;

            text-align: center;
            transform: translate(0, -50%);
        }
        
        #btnModificar{
            width: 30px;
            height: 26px;

            border: none;
            background: #EDF9F0;
            border-radius: 8px;

            cursor: pointer;
            
        }

        #btnVisualizar{
            width: 30px;
            height: 26px;
            border: none;

            background: #FFF4EC;
            border-radius: 8px;

            cursor: pointer;
        }

        #btnEliminar{
            width: 30px;
            height: 26px;
            border: none;

            background: #FEEFEF;
            border-radius: 8px;
            
            cursor: pointer;
        }



        #btn-complete{
            display: inline-block;                
        }

        `;

        this.divContent.innerHTML = `
        <div class="contenedor">
            <hr/>

            <div>
                <div id="espacio"> 
                    <input type="checkbox"  >
                </div>

                <div id="nombre">
                    <div id="imagen">
                        <img id="img" src="${this.getAttribute("imagen")}">
                    </div>
                    <div id="texto"> 
                        <div class="textoPrincipal">
                            ${this.getAttribute("nombre")}
                        </div>
                        <div class="textoSecundario">
                            ${this.getAttribute("gradoEstudio")}
                        </div>
                    </div>
                    
                </div>

                <div id="especialidad" style="transform: translate(0, -15%);">
                        <div class="textoPrincipal">
                            ${this.getAttribute("especialidad")}
                        </div>
                        <div class="textoSecundario">
                            ${this.getAttribute("cedula")}
                        </div>
                </div>

                <div id="grupoT" class="textoSecundario">
                    ${this.getAttribute("grupoTutorado")}
                </div>

                <div id="acciones"> 
                    <div id="btn-complete">
                        <button id="btnModificar">
                            <img id="imgBtn" src="imagenes/btnModificar.svg">
                        </button>

                        <button id="btnVisualizar" >
                            <img src="imagenes/btnVisualizar.svg">
                        </button>

                        <button id="btnEliminar">
                            <img src="imagenes/btnEliminar.svg">
                        </button>
                    </div>
                    
                </div>

                

            </div>
        </div>

        
        `;
    }
}


customElements.define("docentes-tabla", DocentesTabla);
customElements.define("docentes-tarjetaindividual", DocentesTarjetaIndividual);