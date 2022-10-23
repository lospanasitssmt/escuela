class FormularioEmpleados extends HTMLElement {
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

        let conjunto = "";

        this.divStyle.innerHTML = `
        body {
            background-color: #EAF2FA;
        }
        
        .tarjeta-contenedor {
            width: 934.3390502929688px;
            height: 700px;
        }
        
        .rectangle2 {
            border-radius: 20px;
            width: 934.3390502929688px;
            height: 700px;
            background-color: #ffffff;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05000000074505806);
        }
        
        .formulario {
            width: 934.3390502929688px;
            height: 663.9392700195312px;
            padding: 0px;
            background-color: #ffffff;
            position: absolute;
        }
        
        .icon-24 {
            width: 23.460674285888672px;
            height: 23.460674285888672px;
            padding-left: 850px;
            gap: 9.775280952453613px;
            top: 30px;
            position: relative;
        }
        
        .close {
            width: 23.460674285888672px;
            height: 23.460674285888672px;
            padding: 0px;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        
        .estilo {
            width: 370px;
            height: 50px;
            border-radius: 8px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 8px;
            padding-bottom: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: rgba(233, 235, 247, 0.8999999761581421);
            left: 74px;
            top: 99.93px;
            position: absolute;
        }
        
        .inputcontent {
            width: 338px;
            height: 34px;
            padding: 0px;
            display: flex;
            flex-direction: column;
            left: 16px;
            top: 8px;
            position: relative;
        }
        
        .label {
            text-align: left;
            vertical-align: text-top;
            font-size: 12px;
            font-family: Inter;
            line-height: auto;
            color: #5570f1;
        
            padding-bottom: 6px;
        }
        
        .typing {
            text-align: left;
            vertical-align: text-top;
            font-size: 14px;
            font-family: Inter;
            line-height: auto;
            color: #5e6366;
            top: 15px;
            left: 0px;
            position: absolute;
        }
        
        
        .aPaterno {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 8px 16px;
            gap: 10px;
        
            position: absolute;
            width: 370px;
            height: 50px;
            left: 490px;
            top: 99.94px;
        
            /* Input/focusBackground */
        
            background: rgba(233, 236, 248, 0.9);
            border-radius: 8px;
        }
        
        .aMaterno {
            width: 370px;
            height: 50px;
            border-radius: 8px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 8px;
            padding-bottom: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: rgba(233, 235, 247, 0.8999999761581421);
            top: 200px;
            left: 74px;
            position: absolute;
        }
        
        .direccion {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 8px 16px;
            gap: 10px;
        
            position: absolute;
            width: 370px;
            height: 50px;
            left: 490px;
            top: 200px;
        
            /* Input/focusBackground */
        
            background: rgba(233, 236, 248, 0.9);
            border-radius: 8px;
        }
        
        .telefono {
            width: 370px;
            height: 50px;
            border-radius: 8px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 8px;
            padding-bottom: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: rgba(233, 235, 247, 0.8999999761581421);
            top: 300px;
            left: 74px;
            position: absolute;
        }
        
        .email {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 8px 16px;
            gap: 10px;
        
            position: absolute;
            width: 370px;
            height: 50px;
            left: 490px;
            top: 300px;
        
            /* Input/focusBackground */
        
            background: rgba(233, 236, 248, 0.9);
            border-radius: 8px;
        }
        
        .tipoUsu {
            width: 370px;
            height: 50px;
            border-radius: 8px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 8px;
            padding-bottom: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: rgba(233, 235, 247, 0.8999999761581421);
            top: 400px;
            left: 74px;
            position: absolute;
        }
        
        .labelTipo {
            text-align: left;
            vertical-align: text-top;
            font-size: 12px;
            font-family: Inter;
            line-height: auto;
            color: #5570f1;
        
            padding-top: 10px;
            padding-left: 16px;
        }
        
        .password {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 8px 16px;
            gap: 10px;
        
            position: absolute;
            width: 370px;
            height: 50px;
            left: 490px;
            top: 400px;
        
            /* Input/focusBackground */
        
            background: rgba(233, 236, 248, 0.9);
            border-radius: 8px;
        }
        
        .clave {
            width: 370px;
            height: 50px;
            border-radius: 8px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 8px;
            padding-bottom: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: rgba(233, 235, 247, 0.8999999761581421);
            top: 500px;
            left: 74px;
            position: absolute;
        }
        
        .grado-estudios {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 8px 16px;
            gap: 10px;
        
            position: absolute;
            width: 370px;
            height: 50px;
            left: 490px;
            top: 500px;
        
            /* Input/focusBackground */
        
            background: rgba(233, 236, 248, 0.9);
            border-radius: 8px;
        }
        
        .especialidad {
            width: 370px;
            height: 50px;
            border-radius: 8px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 8px;
            padding-bottom: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: rgba(233, 235, 247, 0.8999999761581421);
            top: 600px;
            left: 74px;
            position: absolute;
        }
        
        .cedula {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 8px 16px;
            gap: 10px;
        
            position: absolute;
            width: 370px;
            height: 50px;
            left: 490px;
            top: 600px;
        
            /* Input/focusBackground */
        
            background: rgba(233, 236, 248, 0.9);
            border-radius: 8px;
        }
        
        .frame1 {
            width: 346px;
            height: 34px;
            padding: 0px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: 16px;
            position: absolute;
            top: 8px;
            left: 16px;
        }
        
        .inputcontent4 {
            width: 290px;
            height: 34px;
            padding: 0px;
            display: flex;
            flex-direction: column;
        }
        
        
        .tipo {
            text-align: left;
            vertical-align: text-top;
            font-size: 16px;
            font-family: Inter;
            line-height: auto;
            color: #5e6366;
            padding-left: 20px;
            padding-top: 5px;
        }
        
        .titulo-agregar-docente {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 28px;
            color: #586472;
            
            padding-left: 90px;
        }
        `;

        this.divContent.innerHTML = `
        <div id="tarjeta-contenedor" class="tarjeta-contenedor">
            <div id="rectangle2" class="rectangle2">
                <div id='formulario' class='formulario'>
                
                        <div id='icon-24' class='icon-24'>
                        <button>
                            <img id='close' class='close' src="../imagenes/vector.svg">
                            </button>
                        </div>

                    <div id='estilo' class='estilo'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Nombre</div>
                            <input type="text" placeholder="Ej.: Mario " id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='aPaterno' class='aPaterno'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Apellido paterno</div>
                            <input type="text" placeholder="Ej.: Flores" id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='aMaterno' class='aMaterno'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Apellido materno</div>
                            <input type="text" placeholder="Ej.: Roldan" id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='direccion' class='direccion'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Dirección</div>
                            <input type="text" placeholder="Ej.: Av Independencia" id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='telefono' class='telefono'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Teléfono</div>
                            <input type="text" placeholder="Ej.: 2481599702" id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='email' class='email'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>E-mail</div>
                            <input type="email" placeholder="Ej.: mRoldan22@gmail.com" id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='tipoUsu' class='tipoUsu'>
                        <div id='frame1' class='frame1'>
                            <div id='inputcontent4' class='inputcontent4'>
                                <div id='labelTipo' class='labelTipo'>Tipo de usuario</div>
                                <div id='tipo' class='tipo'>
                                    1</div>
                            </div>
                        </div>
                    </div>

                    <div id='password' class='password'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Contraseña</div>
                            <input type="password" id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='clave' class='clave'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Clave de empleado</div>
                            <input type="text" placeholder="Ej.: 19240015" id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='grado-estudios' class='grado-estudios'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Último grado de estudios</div>
                            <input type="text" placeholder="Ej.: Preparatoria" id='typing|' class='typing|'>
                        </div>
                    </div>
                
                    <div id='especialidad' class='especialidad'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Especialidad</div>
                            <input type="text" placeholder="Ej.: Computación" id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='cedula' class='cedula'>
                        <div id='inputcontent' class='inputcontent'>
                            <div id='label' class='label'>Cédula profesional</div>
                            <input type="text" placeholder="Ej.: 234567894521" id='typing|' class='typing|'>
                        </div>
                    </div>

                    <div id='titulo-agregar-docente' class='titulo-agregar-docente'>Agregar docentes</div>
                </div>

            </div>
        </div>
        
        `;
    }
}

customElements.define("formulario-empleados", FormularioEmpleados);


