<template>
    <b-card
    :title="titulo"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    border-variant="dark"
    class="mb-2"
  >
    <b-card-text>
      {{descripcion}}
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
                        <b-form-input id="input-1" v-model="data.kilometraje" placeholder="Kilometraje" :state="kilometrajestate" trim></b-form-input>
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
        <b-collapse v-model='finPage' id="collapapse-fotos" class="mt-2">
            <h5>Para terminar</h5>
            <b-row>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Incentivos y otros pagos"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.incetivos" :state="incentivostate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Ganancias totales de viajes"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.ganancias_totales" :state="gananciasstate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Efectivo recolectado"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.efectivo" :state="efectivostate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Horas conectadas"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.horas_conectado" :state="horasstate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Deposito bancario"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.depositos_bancarios" :state="depositostate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Renta"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.renta" :state="rentastate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Pendientes"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.pedientes" :state="pendientesstate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Multas"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.multas" :state="multasstate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Choques"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.choques" :state="choquesstate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Total"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.total" :state="totalstate" trim></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-group
                        id="fieldset-1"
                        label="Pendiente"
                        label-for="input-1"
                    >
                        <b-form-input id="input-1" v-model="data.pendiente" :state="pendientestate" trim></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-collapse>
      <b-row>
          <b-col md="12">
            <b-button-toolbar justify aria-label="Toolbar with button groups">
                <b-button-group class="mx-1" v-if='!isFirst'>
                    <b-button @click="changeBeforePage">&lsaquo;</b-button>
                </b-button-group>
                <b-button-group class="mx-1" v-if='isFirst' >
                    <b-button @click="modal = false">Cancelar</b-button>
                </b-button-group>
                <b-button-group class="mx-12" v-if='!isLast'>
                    <b-button  @click="changeNextPage">&rsaquo;</b-button>
                </b-button-group>
                <b-button-group class="mx-12" v-if='isLast'>
                    <b-button  @click="sendData">Terminar</b-button>
                </b-button-group>
            </b-button-toolbar>
          </b-col>
      </b-row>
    </b-modal>
  </b-card>
  
</template>
<script>
export default {
    props: {
        id:{
            type: String || Number,
            default: 0
        },
        img:{
            type: String,
            default: 'https://picsum.photos/600/300/?image=25'
        },
        titulo:{
            type: String
        },
        descripcion:{
            type: String
        }
    },
    data(){
        return {
            fields: ['tipo', 'si', 'no'],
            items: [
                {
                    tipo: 'Nivel de aceite de motor',
                    selected: '',
                },
                {
                    tipo: 'Nivel de aceite trasmision',
                    selected: '',
                },
                {
                    tipo: 'Nivel de agua radiador',
                    selected: '',
                },
                {
                    tipo: 'Nivel de liquido de frenos',
                    selected: '',
                },
                {
                    tipo: 'Nivel de aceite powe',
                    selected: '',
                },
                {
                    tipo: 'Nivel de agua parabrisas',
                    selected: '',
                },
                {
                    tipo: 'Fugas de agua',
                    selected: '',
                },
                {
                    tipo: 'Fugas de aceite',
                    selected: '',
                },
                {
                    tipo: 'Revision de llantas',
                    selected: '',
                },
                {
                    tipo: 'Revision de alineacion',
                    selected: '',
                },
                {
                    tipo: 'Revision de luces',
                    selected: '',
                },
                {
                    tipo: 'Revision direccionales',
                    selected: '',
                },
                {
                    tipo: 'Revision limpiaparabrisas',
                    selected: '',
                },
                {
                    tipo: 'Revision copas',
                    selected: '',
                }
            ],
            items2: [
                {
                    tipo: 'Polvaderas',
                    selected: '',
                },
                {
                    tipo: 'Tapon de Gasolina',
                    selected: '',
                },
                {
                    tipo: 'Extra',
                    selected: '',
                },
                {
                    tipo: 'Gato',
                    selected: '',
                },
                {
                    tipo: 'Cruceta',
                    selected: '',
                },
                {
                    tipo: 'Accesorios Cajuela',
                    selected: '',
                },
                {
                    tipo: 'Parabrisas',
                    selected: '',
                },
                {
                    tipo: 'Tapetes',
                    selected: '',
                },
                {
                    tipo: 'Licencia Chofer',
                    selected: '',
                },
                {
                    tipo: 'Copia del seguro',
                    selected: '',
                },
                {
                    tipo: 'Tarjeta de circulacion',
                    selected: '',
                },
                {
                    tipo: 'Limpieza interior',
                    selected: '',
                },
                {
                    tipo: 'Limpieza exterior',
                    selected: '',
                }
            ],
            
            modal: false,
            isFirst: true,
            page: 0,
            fotografiasPage: true,
            informacionPage: false,
            marcarPage: false,
            finPage: false,
            isLast: false,
            data:{
                kilometraje: '',
                incetivos: '0',
                ganancias_totales: '0',
                efectivo: '0',
                horas_conectado: '0',
                depositos_bancarios: '0',
                renta: '0',
                pedientes: '0',
                multas: '0',
                choques: '0',
                total: '0',
                pendiente:'0',
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
            }
        }
    },
    methods: {
        changeNextPage() {
            this.page++;
            this.isFirst = false;
            if(this.page == 1) {
                this.informacionPage = true;
                this.fotografiasPage = false;
                this.marcarPage = false;
                this.finPage = false;
            }else if(this.page == 2) {
                this.informacionPage = false;
                this.fotografiasPage = false;
                this.marcarPage = true;
                this.finPage = false;
            }else if(this.page == 3) {
                this.informacionPage = false;
                this.fotografiasPage = false;
                this.marcarPage = false;
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
                this.marcarPage = false;
                this.finPage = false;
            }else if(this.page == 2) {
                this.informacionPage = false;
                this.fotografiasPage = false;
                this.marcarPage = true;
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
            let formData = new FormData();
            formData.append('fotos', this.fotos);
            formData.append('checklist', Array.prototype.concat(this.items, this.items2));
            formData.append('data', this.data);
        }
    },
    computed: {
        kilometrajestate() {
            return this.data.kilometraje.length > 0;
        },
        incentivostate() {
            return this.data.incetivos.length > 0;
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
            return this.data.pedientes.length > 0;
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
        }

    }
}
</script>