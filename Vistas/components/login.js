class Login extends HTMLElement {
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
            border: 1px solid #ECF0FF;
            box-shadow: 0px 2px 4px rgba(0, 72, 217, 0.1), 0px 24px 60px rgba(0, 72, 217, 0.05), 0px 12px 24px rgba(0, 72, 217, 0.05);
            border-radius: 12px;    
            float: left;  
        }
        #titulo{
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            align-items: center;
            letter-spacing: -0.37px;
            color: #586472;
            padding: 49px 48px;
            display: inline-block;
        }
        #boton{
            background: #0E50B3;
            border-radius: 4px;
            font-family: 'Red Hat Text';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            text-align: center;
            border: none;
            color: #FFFFFF;
            padding: 10px 15px;
        }
        #btn_completo{
            padding: 46px 350px;
        }
        #vector{
            display: inline-block;
            padding-left: 400px;

        }
        #titulo_input{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;

            color: #5570F1;
        }
        #total_titulo{
            align-self: stretch;
        }
        #contenedor_input{
            background: rgba(233, 236, 248, 0.9);
            border-radius: 8px;
            width: 490px;
            padding: 11px 19px;
        }
        #name{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 15px;
            color: #5570F1;
        }
        #nombre{
            border: 0;
            background: rgba(233, 236, 248, 0.9);
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 17px;

            color: #5E6366;

        }
        #contenedor_nombre{
            padding: 47px 102px;
        }
        #contenedor_pass{
            padding: 47px 102px;
        }
        #candado{
            width: 24px;
            height: 24px;
            padding-right: 10px;
        }
        #ojo{
            width: 16px;
            height: 16px;

        }
        #pass{
            border: 0;
            background: rgba(233, 236, 248, 0.9); 
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 17px;

            color: #5E6366;
        }
        #contra{
            background: rgba(233, 236, 248, 0.9);
            border-radius: 8px;
            width: 490px;
            padding: 8px 16px;
        }
        #ver{
            border: none;
            padding-left: 220px;
            background: rgba(233, 236, 248, 0.9);
        }
        `;

        this.divContent.innerHTML = `
        <div class="contenedor">


        <!--div del titulo-->
            <div id="titulo">
                ${this.getAttribute("titulo")}
            </div>

       

         <!--contenedor de los inputs-->   
            <div id="contenedor_nombre">
                <div>
                    <label id="name">Nombre de usuario:</label>
                </div>

                <div id="contenedor_input">
                    <input type="text" id="nombre" name="nombre" placeholder="Por ejemplo: Rodrigo">
                </div>
            </div>

            <div id="contenedor_pass">
                <div>
                    <label id="name">Contraseña:</label>
                </div>

                <div id="contra">
                    <img id="candado" src="imagenes/Lock.svg">
                    <input type="password" id="pass" name=pass" placeholder="*********">
                    <button id="ver"><img id="ojo" src="imagenes/ojo.svg"></button>
                    
                </div>
            </div>
            

        <!--div del titulo--> 
            <div id="btn_completo">
            <button id="boton">Ingresar</button>
            </div>   

      

            
        </div>
        `;
    }
}

customElements.define("login-admin", Login);