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
        

        `;

        this.divContent.innerHTML = `
        <div>
            <div>
                <span></span>
                <span>ID</span>
                <span>Clave</span>
                <span>Descripción</span>
                <span>Grado</span>
                <span>Tutor</span>
            </div>
        </div>
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
       

        `;

        this.divContent.innerHTML = `
        
        `;
    }
}


customElements.define("grupos-Tabla", GruposTabla);
customElements.define("grupos-Tablaindividual", GruposTablaindividual);