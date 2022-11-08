class EstudiantesTarjeta extends HTMLElement {
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
        #contPrincipal{
            
            float:left;
            background-color: #FFFFFF;
            border-radius: 15px;
            
            padding: 21px 24px;            
        }    

        #tituloEstudiantes{
            width: 253px;
            display: inline-block;
   

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            line-height: 22px;

            color: #212121;
        }

        #general-logos{
            display: inline-block;
            text-align: center;

        }
        
        #logoEditar{
            display: inline-block;
            padding-right: 15px;
            padding-left: 8px;



            width: 30px;
            height: 26px;

            border: none;
            background: #EDF9F0;
            border-radius: 8px;

            cursor: pointer;
        }

        #logoVer{
            display: inline-block;
            padding-right: 15px;
            padding-left: 6px;


            width: 30px;
            height: 26px;
            border: none;

            background: #FFF4EC;
            border-radius: 8px;

            cursor: pointer;
        }

        #logoEliminar{
            display: inline-block;
            padding-right: 15px;
            padding-left: 8px;



            width: 30px;
            height: 26px;
            border: none;

            background: #FEEFEF;
            border-radius: 8px;
            
            cursor: pointer;
        }
        `;


        let va1="";

        fetch('../Modelo/bd/alumnosgrupo.php?idgrupo='+this.getAttribute('idgrupo'), )
        .then(response => response.json())
        .then(json => json.forEach(element => {
            va1 = va1 +
                `
        
            <estudiantes-tarjetaindividual
                nombreusuario="${element.NOMBRE}"
                apellidoPaterno="${element.APELLIDO_PATERNO}"
                apellidoMaterno="${element.APELLIDO_MATERNO}"
                numeroControl="${element.MATRICULA}"
                grupobd="${this.getAttribute("idgrado")}"
                
                usuarioid="${element.USUARIO_ID}">
            </estudiantes-tarjetaindividual>
        `;

        }))
        .then(tarjeta => {


//---------------- Contenedor Principal para Grupos -----------------------
        this.divContent.innerHTML = `

            <div id="contPrincipal">
                <div id="tituloEstudiantes">Estudiantes-${this.getAttribute("idgrado")}</div>
                <div id="general-logos">

                   
                    <button id="logoEditar" onClick="modificargrupo('${this.getAttribute("idgrupo")}', '${this.getAttribute("clavegrupo")}','${this.getAttribute("descripciongrupo")}', '${this.getAttribute("idgrado")}', '${this.getAttribute("tutorgrupo_ID")}')">
                        <img src="../assets/imagenes/btnModificar.svg">

                    </button>
                    
                    <button id="logoVer" onClick="visualizargrupo('${this.getAttribute("idgrupo")}', '${this.getAttribute("clavegrupo")}','${this.getAttribute("descripciongrupo")}', '${this.getAttribute("idgrado")}', '${this.getAttribute("tutorgrupo_ID")}')">
                        <img src="../assets/imagenes/btnVisualizar.svg">
                    </button>
                    
                    <button id="logoEliminar" onClick="eliminargrupo('${this.getAttribute("idgrupo")}', '${this.getAttribute("clavegrupo")}','${this.getAttribute("descripciongrupo")}', '${this.getAttribute("idgrado")}', '${this.getAttribute("tutorgrupo_ID")}')">
                        <img src="../assets/imagenes/btnEliminar.svg">
                    </button>
                </div>


                ${va1}
            </div>
        
        `;});
    }
}

//---------------- Inicio de grupos tabla Individual-----------------------
class EstudiantesTarjetasIndividual extends HTMLElement {
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
        #contPrincipal{
            background-color: FDE2CF;
            margin-top: 15px;
        }
        
        #imagenUsuario{
            display: inline-block;
        }
        #Etiquetas{
            display: inline-block;
            width: 196px;
        }

        #NombreUsuario{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 18px;
            color: #000000;
            text-align: justify;

            margin-top: 3px;
            padding-bottom: 5px;
            padding-right: 107px;

            transform: translate(0px, -5px);
        }

        #NoControl{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;

            color: #8D8D8D;

            transform: translate(0px, -8px);
        }

        #grupoAcciones{
            display: inline-block; 
        }

        #formatoimagen{
            width: 44px;
            height: 44px;
            margin-right: 9px;
            border-radius: 12px;
        }

        #grupo{
            margin-left: 17px;

            width: 44px;
            height: 19px;

            border: none;
            background: #CACEEA;
            border-radius: 8px;

            cursor: pointer;



            
            padding-left: 25px;
            padding-rigth: 0px;
            padding-top: 3px;
            padding-bottom: 3px;
            
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 11px;
            line-height: 15px;

            color: #7B20C7;

            margin-bottom: 16px;
        }

        #acciones{
            display: inline-block;
            text-align: center;

        }
        
        #Editar{
            display: inline-block;
            padding-right: 15px;
            padding-left: 8px;



            width: 30px;
            height: 26px;

            border: none;
            background: #EDF9F0;
            border-radius: 8px;

            cursor: pointer;
        }

        #Ver{
            display: inline-block;
            padding-right: 15px;
            padding-left: 6px;


            width: 30px;
            height: 26px;
            border: none;

            background: #FFF4EC;
            border-radius: 8px;

            cursor: pointer;
        }

        #Eliminar{
            display: inline-block;
            padding-right: 15px;
            padding-left: 8px;



            width: 30px;
            height: 26px;
            border: none;

            background: #FEEFEF;
            border-radius: 8px;
            
            cursor: pointer;
        }

        #linea{
            border-top: 1px solid #E8E8E8;
            height: 1px;
            width: 100%;
            padding: 0;
            margin: 8px auto 0 auto;

        }
        `;

        this.divContent.innerHTML = `
        <div id="contPrincipal">
            <div id="imagenUsuario">
                <img id="formatoimagen" src="../assets/imagenes/perfil.jpg">
            </div>
            
            <div id="Etiquetas">
                <div id="NombreUsuario">${this.getAttribute("nombreusuario")} ${this.getAttribute("apellidoPaterno")} ${this.getAttribute("apellidoMaterno")}</div>
                <div id="NoControl">No. Control: ${this.getAttribute("numeroControl")}</div>
            </div>

            <div id="grupoAcciones">
                <div id="grupo">${this.getAttribute("grupobd")}</div>
                <div id="acciones">
                    <button id="Editar" onClick="modificar('${this.getAttribute("usuarioid")}', '${this.getAttribute("nombreusuario")}','${this.getAttribute("apellidoPaterno")}', '${this.getAttribute("apellidoMaterno")}', '${this.getAttribute("numeroControl")}')">
                        <img src="../assets/imagenes/btnModificar.svg">
                    </button>
                    
                    <button id="Ver" onClick="visualizar('${this.getAttribute("usuarioid")}', '${this.getAttribute("nombreusuario")}','${this.getAttribute("apellidoPaterno")}', '${this.getAttribute("apellidoMaterno")}', '${this.getAttribute("numeroControl")}')">
                        <img src="../assets/imagenes/btnVisualizar.svg">
                    </button>
                    
                    <button id="Eliminar" onClick="eliminar('${this.getAttribute("usuarioid")}', '${this.getAttribute("nombreusuario")}','${this.getAttribute("apellidoPaterno")}', '${this.getAttribute("apellidoMaterno")}', '${this.getAttribute("numeroControl")}')">
                        <img src="../assets/imagenes/btnEliminar.svg">
                    </button>
                </div>
            </div>

            <div id="linea"></div>
        </div>
        `;
    }
}


customElements.define("estudiantes-tarjeta", EstudiantesTarjeta);
customElements.define("estudiantes-tarjetaindividual", EstudiantesTarjetasIndividual);