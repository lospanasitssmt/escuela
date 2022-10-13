class DocentesTarjeta extends HTMLElement {
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
                        <img id="img" src="imagenes/Add User.png">
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

            <docentes-tarjetaindividual
                imagen="imagenes/perfil.jpg"
                nombre="Alberto Juárez Varela"
                gradoEstudio="Grado de estudio"
                especialidad="Arquitecto de Nube"
                cedula="Cédula Profesional"
                grupoTutorado="3 A"

            >

            </docentes-tarjetaindividual>

            <docentes-tarjetaindividual
                imagen="imagenes/perfil.jpg"
                nombre="Laura González Lara"
                gradoEstudio="Grado de estudio"
                especialidad="Inteligencia Artificial"
                cedula="Cédula Profesional"
                grupoTutorado="1 B"

            >

            </docentes-tarjetaindividual>

        </div>
        `;
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
        }

        #espacio{
            display: inline-block;
            width: 46.5px;
  
            text-align: center;
            transform: translate(0, -60%);
        }

        #imagen{
            display: inline-block;
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
        }

        #acciones{
            display: inline-block;
            width: 115px;
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

                <div id="especialidad">
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
                    
                </div>
            </div>
        </div>

        
        `;
    }
}


customElements.define("docentes-tarjeta", DocentesTarjeta);
customElements.define("docentes-tarjetaindividual", DocentesTarjetaIndividual);