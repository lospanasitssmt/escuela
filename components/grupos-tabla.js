class GruposTabla extends HTMLElement {
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
        #vacio{
            width:78px;
            display: inline-block;

            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            color: #000000;


            mix-blend-mode: normal;
            opacity: 0.4;
        }

        #id{
            width:108px;
            display: inline-block;

            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            color: #000000;


            mix-blend-mode: normal;
            opacity: 0.4;
        }

        #clave{
            width:186px;
            display: inline-block;

            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            color: #000000;


            mix-blend-mode: normal;
            opacity: 0.4;
        }

        #descripcion{
            width:174.5px;
            display: inline-block;

            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            color: #000000;


            mix-blend-mode: normal;
            opacity: 0.4;
        }

        #grado{
            width:129px;
            display: inline-block;

            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            color: #000000;


            mix-blend-mode: normal;
            opacity: 0.4;
            
        }

        #tutor{
            width:234.5px;
            display: inline-block;
           
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            color: #000000;


            mix-blend-mode: normal;
            opacity: 0.4;
        }

        #globalelement{
            margin-top:34px;
            margin-bottom:34px;


        }
        `;

        this.divContent.innerHTML = `
        <div>
            <div id="globalelement">
                <div id="vacio"></div>
                <div id="id">ID</div>
                <div id="clave">Clave</div>
                <div id="descripcion">Descripción</div>
                <div id="grado">Grado</div>
                <div id="tutor">Tutor</div>
            </div>

            <grupos-tablaindividual datoid="4" clav="3DER567" describe="lsijgnj" grad="3° 'A'" tuto="L.C.C Anabel Savedra Cortez">  </grupos-tablaindividual>
            <grupos-tablaindividual datoid="6" clav="3DJU567" describe="lsijgnj" grad="6° 'B'" tuto="L.C.C Miriam Savra Cotez"></grupos-tablaindividual>
            <grupos-tablaindividual datoid="7" clav="6DER567" describe="lsijgnj" grad="5° 'C'" tuto="L.C.C Anabel Savedra Cortez"></grupos-tablaindividual>
            <grupos-tablaindividual datoid="8" clav="7DER567" describe="lsijgnj" grad="3° 'D'" tuto="L.C.C Raul Savedra Cortez"></grupos-tablaindividual>
            <grupos-tablaindividual datoid="9" clav="9DER567" describe="lsijgnj" grad="7° 'A'" tuto="L.C.C Anabel Cata Cortez"></grupos-tablaindividual>

           
        `;
    }
}

//---------------- Inicio de grupos tabla -----------------------
class GruposTablaindividual extends HTMLElement {
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
        #vacio{
            width:78px;
            display: inline-block;
        }

        #id{
            width:108px;
            display: inline-block;

        }

        #clave{
            width:186px;
            display: inline-block;
        }

        #descripcion{
            width:174.5px;
            display: inline-block;
        }

        #grado{
            width:129px;
            display: inline-block;
        }

        #tutor{
            width:234.5px;
            display: inline-block;
        }

        #globalelement{
            background: #FFFFFF;
            border-radius: 10px;

            float: left;

            padding-top: 25px;
            padding-bottom: 25px;

            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #000000;

            margin-top:12.5px;
            margin-bottom:12.5px;
        }

        `;

        this.divContent.innerHTML = `
        <div id="globalelement">
            <div id="vacio"><input type="checkbox"></div>
            <div id="id">${this.getAttribute("datoid")}</div>
            <div id="clave">${this.getAttribute("clav")}</div>
            <div id="descripcion">${this.getAttribute("describe")}</div>
            <div id="grado">${this.getAttribute("grad")}</div>
            <div id="tutor">${this.getAttribute("tuto")}</div>
        </div>
        `;
    }
}


customElements.define("grupos-tabla", GruposTabla);
customElements.define("grupos-tablaindividual", GruposTablaindividual);