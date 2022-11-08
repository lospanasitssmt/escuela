class EstudiantesmGrafica extends HTMLElement {

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

        let etiquetasC = "";
        let graficasC = "";

        this.divStyle.innerHTML = `
        .contenedor{
            background-color: white;
            padding: 18px;
            width: 692px;
            border-radius: 10px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }

        h2{
            font-family: "DM Sans";
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 29px;
            margin: 0px;
        }

        .descripcion{
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #000000;
            mix-blend-mode: normal;
            opacity: 0.4;
        }

        .graficas_circulares{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        `;

        this.divContent.innerHTML = `
        <div class="contenedor">

            <div>
                <h2>
                    ${this.getAttribute("titulo")}
                </h2>
            </div>


            <div>
                <etiqueta-medicamento
                    color="#FFB200"
                    nombre="Materia 1"
                >
                </etiqueta-medicamento>

                <etiqueta-medicamento
                    color="#4339F2"
                    nombre="Materia 2"
                >
                </etiqueta-medicamento>

                <etiqueta-medicamento
                    color="#02A0FC"
                    nombre="Materia 3"
                >
                </etiqueta-medicamento>

                <etiqueta-medicamento
                    color="#FF3A29"
                    nombre="Materia 4"
                >
                </etiqueta-medicamento>

            </div>

            <div class="graficas_circulares">

                <graficalineal-materia></graficalineal-materia>
                <graficalineal-materia></graficalineal-materia>
                <graficalineal-materia></graficalineal-materia>
            
            </div>


            <div>
                <span class="descripcion">
                    ${this.getAttribute("descripcion")}
                <span>
            </div>
            
        </div>
        `;

    }
}

//Etiqueta de medicamento

class EtiquetaMedicamento extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({
            mode: 'open'
        });

        this.divStyle = document.createElement("style");
        this.divContent = document.createElement("span");

        shadow.appendChild(this.divStyle);
        shadow.appendChild(this.divContent);
    }

    connectedCallback() {

        this.divStyle.innerHTML = `
            .contenedor{
                margin-top: 10px;
                margin-right: 10px;
                display: inline-block;
            }
            .circulo{
                background: ${this.getAttribute("color")};
                width: 14px;
                height: 14px;
                border-radius: 50%;
                display: inline-block;
            }
            .nombre{
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
            }
        `;

        this.divContent.innerHTML = `
        <div class="contenedor">

            <div class="circulo">
            </div>

            <span class="nombre">
                ${this.getAttribute("nombre")}
            </span>
            
        </div>
        `;

    }
}

class GraficaLinealMateria extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({
            mode: 'open'
        });

        this.divStyle = document.createElement("style");
        this.divContent = document.createElement("span");

        shadow.appendChild(this.divStyle);
        shadow.appendChild(this.divContent);
    }

    connectedCallback() {

        this.divStyle.innerHTML = `
            #linea-principal{
                width: 50%;
                height: 8px;
                border-radius: 71.5px;
                background: #FFB200;
                position: absolute;
                left: 0px;
                top: 0px;
            }
            #linea-fondo{
                width: 100%;
                height: 8px;
                border-radius: 71.5px;
                background: #FFB200;
                position: absolute;
                left: 0px;
                top: 0px;
                opacity: 0.36;
            }
            #contenedor-linea{
                position: relative;
            }
            #titulo{
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;

                color: #000000;
                margin-bottom: 6px;
                display: inline-block;
            }
            #contenedor-graficaindividual{
                margin-bottom: 24px;
            }
            #numero{
                float: right;
                display: inline-block;
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                text-align: right;
                color: #FFB200;
            }
        `;

        this.divContent.innerHTML = `
            <div id="contenedor-graficaindividual">
                <div id="contenedor-info">
                    <div id="titulo">
                        Algebra lineal
                    </div>
                    <div id="numero">
                        27
                    </div>
                </div>

                <div id="contenedor-linea">
                    <div id="linea-fondo"></div>
                    <div id="linea-principal"></div>
                </div>
            </div>
        `;
    }
}

customElements.define("estudiantesm-grafica", EstudiantesmGrafica);
customElements.define("etiqueta-medicamento", EtiquetaMedicamento);
customElements.define("graficalineal-materia", GraficaLinealMateria);