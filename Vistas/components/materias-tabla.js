class MateriasTabla extends HTMLElement {
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
            #contenedor{
                background-color: white;
                border-radius: 10px;
                padding: 35px 23px;
                float: left;    
            }
            #titulo{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 800;
                font-size: 20px;
                line-height: 27px;

                color: #212121;
            }
            #materias{
                display: grid;
                gap: 39px 28px;
                grid-template-columns: auto auto auto;
                padding: 10px;
            }
        `;

        this.divContent.innerHTML = `
            <div id="contenedor">
                <div id="titulo">
                    Materias
                </div>
                <div id="materias">
                    <materia-individual>
                    </materia-individual>
                    <materia-individual>
                    </materia-individual>
                    <materia-individual>
                    </materia-individual>


                    <materia-individual>
                    </materia-individual>
                    <materia-individual>
                    </materia-individual>
                    <materia-individual>
                    </materia-individual>
                </div>
            </div>
        `;
    }
}


class MateriaIndividual extends HTMLElement {
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

        function hexToRgbA(hex) {
            var c;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                c = hex.substring(1).split('');
                if (c.length == 3) {
                    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c = '0x' + c.join('');
                return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.36)';
            }
            throw new Error('Bad Hex');
        }


        this.divStyle.innerHTML = `
            #seleccion{
                display: inline-block;
            }
            #datos{
                display: inline-block;
            }
            #titulomateria{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 600;
                font-size: 13px;
                line-height: 18px;
                color: #000000;

            }
            #datosmateria{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color: #707070;
            }
            #nombredocente{
                margin-right: 3px;
            }
            #contenedor-grupo{
                display: inline-block;
                float: right;
                position: relative;
                padding: 3px 10px;
                background: ${hexToRgbA("#C4F2E7")};
                border-radius: 8px;

                font-family: 'Manrope';
                font-style: normal;
                font-weight: 700;
                font-size: 11px;
                line-height: 15px;

                color: #008200;
            }
            #textmat{
                display: inline-block;
            }

        `;

        this.divContent.innerHTML = `
            <div>
                <div id="seleccion">
                    <input type="checkbox">
                </div>

                <div id="datos">
                    <div id="titulomateria">
                        <div id="textmat">
                            <span>Ingenieria de software</span>
                        </div>

                        <div id="contenedor-grupo">
                            3° A
                        </div>
                    </div>

                    <div id="datosmateria">
                        <span id="nombredocente">M.S.C. Ricardo Valencia Juárez</span>
                        
                        <span>Clave: AEF1052</span>
                    </div>
                    
                </div>
                
            </div>
        `;
    }
}

customElements.define("materias-tabla", MateriasTabla);
customElements.define("materia-individual", MateriaIndividual);