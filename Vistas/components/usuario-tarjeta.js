class UsuariosTarjeta extends HTMLElement {
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
            background-color: white;
            border-radius: 10px;
            padding: 35px 36px;
            float: left;           
        }

        #total_categoria{
            padding: 30px;
        }

        #contenedor_categoria{
            background-color: #E1E4FF;
            border-radius: 10px;
            float: left; 
            
        }

        #categoria{
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 10px;
            line-height: 15px;
            text-align: center;
            color: #000000;
        }

        #nombre{
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 29px;

            color: #000000;
        }

        #desc{
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 20px;

            color: #000000;

            mix-blend-mode: normal;
            opacity: 0.4;
        }

        #img{
            width: 90px;
            height: 90px;

        }
        
        #contenido{
            display: inline-block;
        }

        #imagen{
            display: inline-block;
        }

        #texto_btn{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 150%;

            letter-spacing: 0.05em;
            text-transform: capitalize;

            color: #0D5F00;

            flex: none;
            order: 1;
            flex-grow: 0;
            padding-left: 10px;
        }

        #img_boton{
            width: 19px;
            height: 19px;
        }

        .boton{
            display: flex;
            background: #C5F2C7;
            border: none;
            padding: 8.5px 10.6px 8.5px 10.6px;
            border-radius: 7.82022px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 150%;
            letter-spacing: 0.05em;
            text-transform: capitalize;
            color: #0D5F00;
            cursor: pointer;
        }

        #btn-complete{
            padding: 27px 30px 27px 30px;
        }

        .contenido{
            padding: 27px 30px 27px 30px;
        }

        #titulo{
            padding-left: 30px;
        }
        `;

        this.divContent.innerHTML = `
        <div class="contenedor">

        <div id="total_categoria">
            <div id="contenedor_categoria">
                    <span id="categoria">
                        ${this.getAttribute("categoria")}
                    </span>
            </div>
        </div>    
            
            
        <div id="titulo">
            <span id="nombre">
                ${this.getAttribute("nombre")}
            </span>
        </div>


        <div class=contenido>
            <div id="contenido">
                <div>
                    <span id="desc">
                        ${this.getAttribute("desc")}
                    </span>
                </div>
            </div> 


            <div id="imagen">
                <div>
                    <img id="img" src="imagenes/FotoPeril.png">
                </div>
            </div>
        </div>

            <div id="btn-complete">
                <button class="boton">
                    <span>
                        <img id="img_boton" src="imagenes/pen-2.svg">
                    </span>

                    <span id="texto_btn">
                        Editar Información
                    </span>
                
                </button>
            </div>

            
        </div>
        `;
    }
}

customElements.define("usuarios-tarjetas", UsuariosTarjeta);