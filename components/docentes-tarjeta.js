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
                <div id="nombre">
                    <span>NOMBRE</span>
                </div>
                <div id="especialidad">
                    <span>ESPECIALIDAD</span>
                </div>
                <div id="grupoT">
                    <span>GRUPO TUTORADO</span>
                </div>
                <div id="acciones"> 
                    <span>ACCIONES</span> 
                </div>
            </div>

        </div>
        `;
    }
}

customElements.define("docentes-tarjeta", DocentesTarjeta);