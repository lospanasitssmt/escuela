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
            position: relative;
            left: 0%;
            right: 0%;
            top: 0%;
            bottom: 0%;

            background-color: red;
            border-radius: 10px;           
        }

        .categoria{
            position: absolute;
            height: 15px;
            left: 5.49%;
            right: 6.7%;
            top: calc(50% - 15px/2 + 0.5px);

            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 10px;
            line-height: 15px;

            text-align: center;
          

            color: #000000;
        }
        `;

        this.divContent.innerHTML = `
        <div class="contenedor">
            <div class="categoria">
                <span>
                    
                    ${this.getAttribute("categoria")}
                </span>
            </div>

            
        </div>
        `;
    }
}

customElements.define("usuarios-tarjetas", UsuariosTarjeta);