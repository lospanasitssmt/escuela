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
        .contenedor{            background: #FFFFFF;
            border-radius: 15px;
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

        </div>
        `;
    }
}

customElements.define("docentes-tarjetas", DocentesTarjeta);