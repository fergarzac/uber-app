<template>
    <b-card
    :title="titulo"
    :img-src="perfil"
    img-alt="Image"
    img-top
    img-height="250px"
    tag="article"
    style="max-width: 20rem;"
    border-variant="dark"
    class="mb-2"
  >
    <b-card-text>
      Placas: {{placas}} 
      <br>
      Serie: {{serie}}
    </b-card-text>

    <b-button variant="outline-dark"  @click="modal = !modal">Revisar</b-button>
    <b-modal :id="'modal-lg'+id" size="xl" :title="'Revision de ' + titulo " v-model="modal" hide-footer>
        <b-collapse v-model='fotografiasPage' id="collapapse-fotos" class="mt-2">
            <b-card>
                <h5>Fotos</h5>
                <b-row>
                    <b-col cols="12" md="4" >
                        <h5>Frente</h5>
                        <b-img thumbnail style="width:250px;height:250px" fluid id="frente" alt="Image 1" src="https://via.placeholder.com/250"></b-img>
                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotofrente').click();">Tomar Foto</b-button>
                        <b-form-file
                            capture
                            id="fotofrente"
                            ref="fotofrente"
                            v-model="fotos.fotofrente"
                            accept="image/*"
                            style="display:none;"
                            @change="changeFotoFrente"
                        ></b-form-file>
                    </b-col>
                    <b-col cols="12" md="4">
                        <h5>Costado lado derecho</h5>
                        <b-img thumbnail style="width:250px;height:250px" fluid id="costadoderecho" alt="Image 1" src="https://via.placeholder.com/250"></b-img>
                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotocostadoderecho').click();">Tomar Foto</b-button>
                        <b-form-file
                            capture
                            id="fotocostadoderecho"
                            ref="fotocostadoderecho"
                            v-model="fotos.fotocostadoderecho"
                            accept="image/*"
                            style="display:none;"
                            @change="changeFotoCostadoDerecho"
                        ></b-form-file>
                    </b-col>
                    <b-col cols="12" md="4" >
                        <h5>Costado lado izquierdo</h5>
                        <b-img thumbnail style="width:250px;height:250px" fluid id="costadoizquierdo" alt="Image 1" src="https://via.placeholder.com/250"></b-img>
                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotocostadoizquierdo').click();">Tomar Foto</b-button>
                        <b-form-file
                            capture
                            id="fotocostadoizquierdo"
                            ref="fotocostadoizquierdo"
                            v-model="fotos.fotocostadoizquierdo"
                            accept="image/*"
                            style="display:none;"
                            @change="changeFotoCostadoIzquierdo"
                        ></b-form-file>
                    </b-col>
                    <b-col cols="12" md="4">
                        <h5>Motor</h5>
                        <b-img thumbnail style="width:250px;height:250px" fluid id="motor" alt="Image 1" src="https://via.placeholder.com/250"></b-img>
                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotomotor').click();">Tomar Foto</b-button>
                        <b-form-file
                            capture
                            id="fotomotor"
                            ref="fotomotor"
                            v-model="fotos.fotomotor"
                            accept="image/*"
                            style="display:none;"
                            @change="changeFotoMotor"
                        ></b-form-file>
                    </b-col>
                    <b-col cols="12" md="4">
                        <h5>Trasera</h5>
                        <b-img thumbnail style="width:250px;height:250px" fluid id="trasera" alt="Image 1" src="https://via.placeholder.com/250"></b-img>
                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fototrasera').click();">Tomar Foto</b-button>
                        <b-form-file
                            capture
                            id="fototrasera"
                            ref="fototrasera"
                            v-model="fotos.fototrasera"
                            accept="image/*"
                            style="display:none;"
                            @change="changeFotoTrasera"
                        ></b-form-file>
                    </b-col>
                    <b-col cols="12" md="4">
                        <h5>Interior frente</h5>
                        <b-img thumbnail style="width:250px;height:250px" fluid id="interiorfrente" alt="Image 1" src="https://via.placeholder.com/250"></b-img>
                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotointeriorfrente').click();">Tomar Foto</b-button>
                        <b-form-file
                            capture
                            id="fotointeriorfrente"
                            ref="fotointeriorfrente"
                            v-model="fotos.fotointeriorfrente"
                            accept="image/*"
                            style="display:none;"
                            @change="changeFotoInteriorFrente"
                        ></b-form-file>
                    </b-col>
                    <b-col cols="12" md="4" >
                        <h5>Interior trasero</h5>
                        <b-img thumbnail style="width:250px;height:250px" fluid id="interiortrasero" alt="Image 1" src="https://via.placeholder.com/250"></b-img>
                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotointeriortrasero').click();">Tomar Foto</b-button>
                        <b-form-file
                            capture
                            id="fotointeriortrasero"
                            ref="fotointeriortrasero"
                            v-model="fotos.fotointeriortrasero"
                            accept="image/*"
                            style="display:none;"
                            @change="changeFotoInteriorTrasero"
                        ></b-form-file>
                    </b-col>
                    <b-col cols="12" md="4">
                        <h5>Interior cajuela</h5>
                        <b-img thumbnail style="width:250px;height:250px" fluid id="cajuela" alt="Image 1" src="https://via.placeholder.com/250"></b-img>
                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotocajuela').click();">Tomar Foto</b-button>
                        <b-form-file
                            capture
                            id="fotocajuela"
                            ref="fotocajuela"
                            v-model="fotos.fotocajuela"
                            accept="image/*"
                            style="display:none;"
                            @change="changeFotoCajuela"
                        ></b-form-file>
                    </b-col>
                </b-row>
            </b-card>
        </b-collapse>
        <b-collapse v-model='informacionPage' id="collapapse-fotos" class="mt-2">
            <h5>Información</h5>
            <b-row>
                <b-col cols="12" md="6">
                    <h5>Tablero prendido</h5>
                    <b-img thumbnail style="width:250px;height:250px" fluid id="tablero" alt="Image 1" src="https://via.placeholder.com/250"></b-img>
                    <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fototablero').click();">Tomar Foto</b-button>
                    <b-form-file
                        capture
                        id="fototablero"
                        ref="fototablero"
                        v-model="fotos.fototablero"
                        accept="image/*"
                        style="display:none;"
                        @change="changeFotoTablero"
                    ></b-form-file>
                </b-col>
                <b-col cols="12" md="6">
                    <b-form-group
                        id="fieldset-1"
                        label="Ingresa el kilometraje"
                        label-for="input-1"
                        :state="kilometrajestate"
                    >
                        <b-form-input id="input-1" v-model="data.kilometraje" placeholder="Kilometraje" :state="kilometrajestate" trim @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-collapse>
        <b-collapse v-model='marcarPage' id="collapapse-fotos" class="mt-2">
            <h5>Marcar!</h5>
            <b-row>
                <b-col xs='auto'>
                    <b-table striped hover :items="items" :fields="fields" responsive="sm">
                        
                        <template slot="si" slot-scope="row">
                            <b-form-radio v-model="row.item.selected" :name="row.item.tipo+'radios'" value="true"></b-form-radio>
                        </template>
                        <template slot="no" slot-scope="row">
                            <b-form-radio v-model="row.item.selected" :name="row.item.tipo+'radios'" value="false"></b-form-radio>
                        </template>
                    </b-table>
                </b-col>
                <b-col xs='auto'>
                    <b-table striped hover :items="items2" :fields="fields" responsive="sm">
                        <template slot="si" slot-scope="row">
                            <b-form-radio v-model="row.item.selected" :name="row.item.tipo+'radios'" value="true"></b-form-radio>
                        </template>
                        <template slot="no" slot-scope="row">
                            <b-form-radio v-model="row.item.selected" :name="row.item.tipo+'radios'" value="false"></b-form-radio>
                        </template>
                    </b-table>
                </b-col>
            </b-row>
        </b-collapse>
        <b-collapse v-model='gananciasPage' id="collapapse-fotos" class="mt-2">
            <h5>Ingresos</h5>
            <b-row>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Ganancias totales de viajes"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.ganancias_totales" :state="gananciasstate" trim @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Efectivo recolectado"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.efectivo" :state="efectivostate" trim @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Deposito bancario"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.depositos_bancarios" :state="depositostate" trim @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Renta"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.renta" :state="rentastate" trim @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Pendientes"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.pendientes" :state="pendientesstate" trim @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Choques"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.choques" :state="choquesstate" trim @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Total"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.total" :state="totalstate" trim @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Pendiente"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.pendiente" :state="pendientestate" trim @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Semana"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.revision_semana" type="date" :state="semanastate"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-collapse>
        <b-collapse v-model='finPage' id="collapapse-fotos" class="mt-2">
            <h5>Para terminar, ingresa los gastos generados esta semana.</h5>
            <b-row>
                <b-col cols="12">
                    <b-button variant="info" @click="agregarInput = true">Agregar</b-button>
                </b-col>
                <b-col cols="12" v-if="agregarInput">
                    <b-row style="margin-bottom:15px">
                        <b-col cols="12" md="4">
                            <b-form-group
                            id="fieldset-1"
                            label="Concepto"
                            label-for="input-1"
                            >
                                <b-form-input id="input-1" v-model="concepto_gasto" :state="conceptostate"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group
                            id="fieldset-1"
                            label="Cantidad"
                            label-for="input-1"
                            >
                                <b-form-input type="" id="input-1" v-model="cantidad_gasto" :state="cantidadstate" @keypress="isNumber($event)"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-button style="margin-top:25px" variant="primary" @click="agregarGasto">Aceptar</b-button>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" style="padding:20px" v-for="(gasto, index) in gastos" :key="index">
                    <div style="width:70%;display:inline-block; font-weight:bold">
                        {{gasto.concepto}} - {{gasto.cantidad}}
                    </div>
                    <div style="width:30%;display:inline-block;float:right">
                        <b-button variant="danger" @click="quitarGasto(index)">X</b-button>
                    </div>
                    <hr>
                </b-col>
            </b-row>
        </b-collapse>
      <b-row>
          <b-col md="12">
            <b-button-toolbar justify aria-label="Toolbar with button groups">
                <b-button-group class="mx-1" v-if='!isFirst'>
                    <b-button variant="info" @click="changeBeforePage">&lsaquo;</b-button>
                </b-button-group>
                <b-button-group class="mx-1" v-if='isFirst' >
                    <b-button @click="modal = false">Cancelar</b-button>
                </b-button-group>
                <b-button-group class="mx-12" v-if='!isLast'>
                    <b-button variant="info" @click="changeNextPage">&rsaquo;</b-button>
                </b-button-group>
                <b-button-group class="mx-12" v-if='isLast'>
                    <b-button variant="outline-success" @click="sendData">Terminar</b-button>
                </b-button-group>
            </b-button-toolbar>
          </b-col>
      </b-row>
    </b-modal>
    <b-modal v-model="alerta" centered hide-footer title="Alerta">
        <div class="d-block text-center">
            <h3>{{messageAlert}}</h3>
        </div>
        <b-button class="mt-3" variant="primary" block @click="alerta = false">Ok</b-button>
                        
    </b-modal>
  </b-card>
  
</template>
<script>
import axios from 'axios'
import {URL_API} from "../constants/Constants";
export default {
    props: {
        id:{
            type: String || Number,
            default: 0
        },
        img:{
            type: String,
            default: 'https://via.placeholder.com/600/1'
        },
        titulo:{
            type: String
        },
        placas:{
            type: String
        },
        serie:{
            type: String
        }
    },
    data(){
        return {
            agregarInput:false,
            concepto_gasto: '',
            cantidad_gasto: '',
            alerta: false,
            messageAlert: '',
            fields: ['tipo', 'si', 'no'],
            items: [
                {
                    "key": 'n_motor',
                    "tipo": 'Nivel de aceite de motor',
                    "selected": '',
                },
                {
                    "key": 'n_trasmision',
                    "tipo": 'Nivel de aceite trasmision',
                    "selected": '',
                },
                {
                    "key": 'n_radiador',
                    "tipo": 'Nivel de agua radiador',
                    "selected": '',
                },
                {
                    "key": 'n_frenos',
                    "tipo": 'Nivel de liquido de frenos',
                    "selected": '',
                },
                {
                    "key": 'n_power',
                    "tipo": 'Nivel de aceite power',
                    "selected": '',
                },
                {
                    "key": 'n_parabrisas',
                    "tipo": 'Nivel de agua parabrisas',
                    "selected": '',
                },
                {
                    "key": 'f_agua',
                    "tipo": 'Fugas de agua',
                    "selected": '',
                },
                {
                    "key": 'f_aceite',
                    "tipo": 'Fugas de aceite',
                    "selected": '',
                },
                {
                    "key": 'r_llantas',
                    "tipo": 'Revision de llantas',
                    "selected": '',
                },
                {
                    "key": 'r_alineacion',
                    "tipo": 'Revision de alineacion',
                    "selected": '',
                },
                {
                    "key": 'r_luces',
                    "tipo": 'Revision de luces',
                    "selected": '',
                },
                {
                    "key": 'r_direccionales',
                    "tipo": 'Revision direccionales',
                    "selected": '',
                },
                {
                    "key": 'r_limpiaparabrisas',
                    "tipo": 'Revision limpiaparabrisas',
                    "selected": '',
                },
                {
                    "key": 'r_copas',
                    "tipo": 'Revision copas',
                    "selected": '',
                }
            ],
            items2: [
                {
                    "key": 'polvaderas',
                    "tipo": 'Polvaderas',
                    "selected": '',
                },
                {
                    "key": 'tapon_gasolina',
                    "tipo": 'Tapon de Gasolina',
                    "selected": '',
                },
                {
                    "key": 'extra',
                    "tipo": 'Extra',
                    "selected": '',
                },
                {
                    "key": 'gato',
                    "tipo": 'Gato',
                    "selected": '',
                },
                {
                    "key": 'cruceta',
                    "tipo": 'Cruceta',
                    "selected": '',
                },
                {
                    "key": 'a_cajuela',
                    "tipo": 'Accesorios Cajuela',
                    "selected": '',
                },
                {
                    "key": 'parabrisas',
                    "tipo": 'Parabrisas',
                    "selected": '',
                },
                {
                    "key": 'tapetes',
                    "tipo": 'Tapetes',
                    "selected": '',
                },
                {
                    "key": 'l_chofer',
                    "tipo": 'Licencia Chofer',
                    "selected": '',
                },
                {
                    "key": 'c_seguro',
                    "tipo": 'Copia del seguro',
                    "selected": '',
                },
                {
                    "key": 't_circulacion',
                    "tipo": 'Tarjeta de circulacion',
                    "selected": '',
                },
                {
                    "key": 'l_interior',
                    "tipo": 'Limpieza interior',
                    "selected": '',
                },
                {
                    "key": 'l_exterior',
                    "tipo": 'Limpieza exterior',
                    "selected": '',
                }
            ],
            
            modal: false,
            isFirst: true,
            page: 0,
            fotografiasPage: true,
            informacionPage: false,
            marcarPage: false,
            finPage: false,
            gananciasPage: false,
            isLast: false,
            data:{
                kilometraje: '',
                incentivos: '0',
                ganancias_totales: '0',
                efectivo: '0',
                horas_conectado: '0',
                depositos_bancarios: '0',
                renta: '0',
                pendientes: '0',
                multas: '0',
                choques: '0',
                total: '0',
                pendiente:'0',
                revision_semana: ''
            },
            fotos: {
                fotofrente: null,
                fotomotor: null,
                fotocostadoderecho: null,
                fotocostadoizquierdo: null,
                fototrasera: null,
                fotocajuela: null,
                fotointeriorfrente: null,
                fotointeriortrasero: null,
                fototablero: null
            },
            perfil: '',
            gastos: []
        }
    },
    methods: {
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        quitarGasto(index){
            this.gastos.splice(index, 1);
        },
        changeNextPage() {
            this.page++;
            this.isFirst = false;
            if(this.page == 1) {
                this.informacionPage = true;
                this.fotografiasPage = false;
                this.marcarPage = false;
                this.gananciasPage = false;
                this.finPage = false;
            }else if(this.page == 2) {
                if(this.kilometrajestate) {
                    this.informacionPage = false;
                    this.fotografiasPage = false;
                    this.marcarPage = true;
                    this.gananciasPage = false;
                    this.finPage = false;
                }else{
                    this.page--;
                }
            }else if(this.page == 3) {
                if(this.checkliststate) {
                    this.informacionPage = false;
                    this.fotografiasPage = false;
                    this.marcarPage = false;
                    this.gananciasPage = true;
                    this.finPage = false;
                    this.isLast = false;
                }else{
                    this.page--;
                }
            }else if(this.page == 4) {
                this.informacionPage = false;
                this.fotografiasPage = false;
                this.marcarPage = false;
                this.gananciasPage = false;
                this.finPage = true;
                this.isLast = true;
            }
        },
        changeBeforePage() {
            this.page--;
            this.isLast = false;
            if(this.page == 0) {
                this.fotografiasPage = true;
                this.informacionPage = false;
                this.isFirst = true;
            }else if(this.page == 1) {
                this.informacionPage = true;
                this.fotografiasPage = false;
                this.gananciasPage = false;
                this.marcarPage = false;
                this.finPage = false;
            }else if(this.page == 2) {
                this.informacionPage = false;
                this.gananciasPage = false;
                this.fotografiasPage = false;
                this.marcarPage = true;
                this.finPage = false;
            }else if(this.page == 3) {
                this.informacionPage = false;
                this.fotografiasPage = false;
                this.marcarPage = false;
                this.gananciasPage = true;
                this.finPage = false;
            }
        },
        changeFotoFrente(event) {
            this.fotos.fotofrente = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('frente');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoMotor(event) {
            this.fotos.fotomotor = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('motor');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoCostadoDerecho(event) {
            this.fotos.fotocostadoderecho = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('costadoderecho');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoCostadoIzquierdo(event) {
            this.fotos.fotocostadoizquierdo = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('costadoizquierdo');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoCajuela(event) {
            this.fotos.fotocajuela = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('cajuela');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoInteriorFrente(event) {
            this.fotos.fotointeriorfrente = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('interiorfrente');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoInteriorTrasero(event) {
            this.fotos.fotointeriortrasero = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('interiortrasero');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoTrasera(event) {
            this.fotos.fototrasera = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('trasera');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoTablero(event) {
            this.fotos.fototablero = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('tablero');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        sendData() {
            if(this.incentivostate && this.gananciasstate && this.efectivostate && this.horasstate && this.depositostate && 
            this.rentastate && this.pendientesstate && this.multasstate && this.choquesstate && this.totalstate && this.pendientestate) {
                let formData = new FormData();
                for(let f in this.fotos) {
                    if(this.fotos[f] !== null) {
                        formData.append(f, this.fotos[f]);                   
                    }
                }
                formData.append('checklist', JSON.stringify(Array.prototype.concat(this.items, this.items2)));
                formData.append('data', JSON.stringify(this.data));
                formData.append('gastos', JSON.stringify(this.gastos));
                formData.append('idvehiculo', JSON.stringify(this.id));
                axios.post(URL_API + 'revisiones/add' , 
                    formData,
                    {
                        headers: 
                        {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then((response) => {
                    if(response.data['status'] == 1) {
                        this.clearData();
                        this.modal = false;
                        this.alerta = true;
                        this.messageAlert = "Revision añadida correctamente";

                    }else{
                        this.alerta = true;
                        this.messageAlert = "Ocurrio un error al añadir la revision";
                    }
                    
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        agregarGasto() {
            this.gastos.push(
                {
                    concepto: this.concepto_gasto,
                    cantidad: this.cantidad_gasto
                }
            );
            this.concepto_gasto = '';
            this.cantidad_gasto = '';
            this.agregarInput = false;
        },
        clearData() {
            this.data = {
                kilometraje: '',
                incentivos: '0',
                ganancias_totales: '0',
                efectivo: '0',
                horas_conectado: '0',
                depositos_bancarios: '0',
                renta: '0',
                pendientes: '0',
                multas: '0',
                choques: '0',
                total: '0',
                pendiente:'0',
                revision_semana: ''
            };
            this.fotos = {
                fotofrente: null,
                fotomotor: null,
                fotocostadoderecho: null,
                fotocostadoizquierdo: null,
                fototrasera: null,
                fotocajuela: null,
                fotointeriorfrente: null,
                fotointeriortrasero: null,
                fototablero: null
            };
            this.gastos = [];
            var motor = document.getElementById('motor');
            var frente = document.getElementById('frente');
            var costadoderecho = document.getElementById('costadoderecho');
            var costadoizquierdo = document.getElementById('costadoizquierdo');
            var cajuela = document.getElementById('cajuela');
            var interiorfrente = document.getElementById('interiorfrente');
            var interiortrasero = document.getElementById('interiortrasero');
            var trasera = document.getElementById('trasera');
            var tablero = document.getElementById('tablero');
            motor.src="https://via.placeholder.com/250";
            frente.src="https://via.placeholder.com/250";
            costadoderecho.src="https://via.placeholder.com/250";
            costadoizquierdo.src="https://via.placeholder.com/250";
            cajuela.src="https://via.placeholder.com/250";
            interiorfrente.src="https://via.placeholder.com/250";
            interiortrasero.src="https://via.placeholder.com/250";
            trasera.src="https://via.placeholder.com/250";
            tablero.src="https://via.placeholder.com/250";
            this.isFirst = true;
            this.isLast = false;
            this.fotografiasPage = true;
        }
    },
    computed: {
        kilometrajestate() {
            return this.data.kilometraje.length > 0;
        },
        incentivostate() {
            return this.data.incentivos.length > 0;
        },
        gananciasstate() {
            return this.data.ganancias_totales.length > 0;
        },
        efectivostate() {
            return this.data.efectivo.length > 0;
        },
        horasstate() {
            return this.data.horas_conectado.length > 0;
        },
        depositostate() {
            return this.data.depositos_bancarios.length > 0;
        },
        rentastate() {
            return this.data.renta.length > 0;
        },
        pendientesstate() {
            return this.data.pendientes.length > 0;
        },
        multasstate() {
            return this.data.multas.length > 0;
        },
        choquesstate() {
            return this.data.choques.length > 0;
        },
        totalstate() {
            return this.data.total.length > 0;
        },
        pendientestate() {
            return this.data.pendiente.length > 0;
        },
        semanastate() {
            return this.data.revision_semana.length > 0;
        },
        checkliststate() {
            var allSelected = true;
            var data = Array.prototype.concat(this.items, this.items2);
            data.forEach(element => {
                if(element.selected.length == 0) {
                    allSelected = false;
                }
            });
            return allSelected;
        },
        conceptostate(){
            return this.concepto_gasto.length > 0;
        },
        cantidadstate() {
            return this.cantidad_gasto.length > 0;
        }

    },
    created: function() {
        if(this.img != null && this.img.length>0){
            var name = this.img.split('.');
            axios.get(URL_API + 'img/' + name[0]).then((response) => {
                if(response.data['status'] != undefined) {
                    this.perfil = 'https://via.placeholder.com/600/1';
                }else {
                    this.perfil = URL_API + 'img/' + name[0];
                }
           }).catch((error) => {
                this.perfil = 'https://via.placeholder.com/600/1';
          });
            
        }else {
            this.perfil = 'https://via.placeholder.com/600/1';
        }
    },
}
</script>