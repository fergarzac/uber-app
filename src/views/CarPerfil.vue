<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
            <!-- Mask -->
            <span class="mask bg-gradient-dark opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex">
                <div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <b-button class="m-1" @click="changeStatus(1)" >Documentos</b-button>
                        <b-button class="m-1" @click="changeStatus(2)">Balance</b-button>
                        <b-button class="m-1" @click="changeStatus(3)">Fotografias</b-button>
                        <b-button class="m-1" @click="changeStatus(4)">Revision</b-button>
                        <b-button class="m-1" @click="changeStatus(5)">Chofer</b-button>
                        <b-collapse v-model="showDocumentos" id="collapse-documentos">
                            <h1>Documentos</h1>
                            <card shadow type="secondary">
                                 <b-row>
                                    <b-col cols="12" md="auto" v-if="model.factura !== ''">
                                        <h5>Factura</h5>
                                        <b-img thumbnail style="width:250px" fluid :src="model.factura" alt="Image 1"></b-img>
                                    </b-col>
                                    <b-col cols="12" md="auto" v-if="model.pedimento !== ''">
                                        <h5>Pedimento</h5>
                                        <b-img thumbnail style="width:250px" fluid :src="model.pedimento" alt="Image 2"></b-img>
                                    </b-col>
                                    <b-col cols="12" md="auto" v-if="model.tarjeta !== ''">
                                        <h5>Tarjeta de Circulacion</h5>
                                        <b-img thumbnail style="width:250px" fluid :src="model.tarjeta" alt="Image 3"></b-img>
                                    </b-col>
                                    <b-col cols="12" md="auto" v-if="model.seguro !== ''">
                                        <h5>Seguro</h5>
                                        <b-img thumbnail style="width:250px" fluid :src="model.seguro" alt="Image 3"></b-img>
                                    </b-col>
                                </b-row>
                            </card>
                        </b-collapse>
                        <b-collapse v-model="showBalance" id="collapse-balance">
                            <h1>Balance</h1>
                            <card shadow type="secondary">
                                <b-row style="height: 300px;overflow-y: scroll">
                                    <b-table sticky-header head-variant="light" :items="balance" :fields="fields"></b-table>
                                </b-row>
                                <b-row >
                                    <b-col cols="12" md="3">
                                        <a class="btn btn-outline-dark" target="_blank" :href="urlApi + 'vehiculos/descargarbalance/'+this.idCar">Descargar</a>
                                    </b-col>
                                    <b-col style="font-weight:bold; text-align:center" cols="12" md="3">
                                        Ganancias: {{total_ganancias}}
                                    </b-col>
                                    <b-col style="font-weight:bold; text-align:center" cols="12" md="3">
                                        Gastos: {{total_gastos}}
                                    </b-col>
                                    <b-col style="font-weight:bold; text-align:center" cols="12" md="3">
                                        Total: {{total_balance}}
                                    </b-col>
                                </b-row>
                            </card>
                        </b-collapse>
                        <b-collapse v-model="showFotografias" id="collapse-fotografias">
                            <h1>Fotografias</h1>
                            <card shadow type="secondary">
                                <b-row>
                                    <b-col cols="12" md="3">
                                        <b-form-input v-model="fotos_semana" type="week"></b-form-input>
                                    </b-col>
                                    <b-col cols="12" md="2">
                                        <b-button style="width:100%" variant="outline-dark"  @click="buscarFotosRevision">Buscar</b-button>
                                    </b-col>
                                </b-row>
                                 <b-row v-if="imagenesrevision">
                                    <b-col cols="12" md="4" >
                                            <h5>Frente</h5>
                                            <b-img thumbnail style="width:250px;height:250px" fluid id="frente" alt="Image 1" :src="imagenes.fotofrente !== '' && imagenes.fotofrente !== undefined ? urlApi +'img/'+ imagenes.fotofrente.split('.')[0] : 'https://via.placeholder.com/250'"></b-img>
                                        </b-col>
                                        <b-col cols="12" md="4">
                                            <h5>Costado lado derecho</h5>
                                            <b-img thumbnail style="width:250px;height:250px" fluid id="costadoderecho" alt="Image 1" :src="imagenes.fotocostadoderecho !== '' && imagenes.fotocostadoderecho !== undefined ? urlApi +'img/'+ imagenes.fotocostadoderecho.split('.')[0] : 'https://via.placeholder.com/250'"></b-img>
                                        </b-col>
                                        <b-col cols="12" md="4" >
                                            <h5>Costado lado izquierdo</h5>
                                            <b-img thumbnail style="width:250px;height:250px" fluid id="costadoizquierdo" alt="Image 1" :src="imagenes.fotocostadoizquierdo !== '' && imagenes.fotocostadoizquierdo !== undefined ? urlApi +'img/'+ imagenes.fotocostadoizquierdo.split('.')[0] : 'https://via.placeholder.com/250'"></b-img>
                                        </b-col>
                                        <b-col cols="12" md="4">
                                            <h5>Motor</h5>
                                            <b-img thumbnail style="width:250px;height:250px" fluid id="motor" alt="Image 1" :src="imagenes.fotomotor !== '' && imagenes.fotomotor !== undefined ? urlApi +'img/'+ imagenes.fotomotor.split('.')[0] : 'https://via.placeholder.com/250'"></b-img>
                                        </b-col>
                                        <b-col cols="12" md="4">
                                            <h5>Trasera</h5>
                                            <b-img thumbnail style="width:250px;height:250px" fluid id="trasera" alt="Image 1" :src="imagenes.fototrasera !== '' && imagenes.fototrasera !== undefined ? urlApi +'img/'+ imagenes.fototrasera.split('.')[0] : 'https://via.placeholder.com/250'"></b-img>
                                        </b-col>
                                        <b-col cols="12" md="4">
                                            <h5>Interior frente</h5>
                                            <b-img thumbnail style="width:250px;height:250px" fluid id="interiorfrente" alt="Image 1" :src="imagenes.fotointeriorfrente !== '' && imagenes.fotointeriorfrente !== undefined ? urlApi +'img/'+ imagenes.fotointeriorfrente.split('.')[0] : 'https://via.placeholder.com/250'"></b-img>
                                        </b-col>
                                        <b-col cols="12" md="4" >
                                            <h5>Interior trasero</h5>
                                            <b-img thumbnail style="width:250px;height:250px" fluid id="interiortrasero" alt="Image 1" :src="imagenes.fotointeriortrasero !== '' && imagenes.fotointeriortrasero !== undefined ? urlApi +'img/'+ imagenes.fotointeriortrasero.split('.')[0] : 'https://via.placeholder.com/250'"></b-img>
                                        </b-col>
                                        <b-col cols="12" md="4">
                                            <h5>Interior cajuela</h5>
                                            <b-img thumbnail style="width:250px;height:250px" fluid id="cajuela" alt="Image 1" :src="imagenes.fotocajuela !== '' && imagenes.fotocajuela !== undefined ? urlApi +'img/'+ imagenes.fotocajuela.split('.')[0] : 'https://via.placeholder.com/250'"></b-img>
                                        </b-col>
                                        <b-col cols="12" md="4">
                                            <h5>Tablero</h5>
                                            <b-img thumbnail style="width:250px;height:250px" fluid id="tablero" alt="Image 1" :src="imagenes.fototablero !== '' && imagenes.fototablero !== undefined ? urlApi +'img/'+ imagenes.fototablero.split('.')[0] : 'https://via.placeholder.com/250'"></b-img>
                                        </b-col>
                                </b-row>
                            </card>
                        </b-collapse>
                        <b-collapse v-model="showRevision" id="collapse-revision">
                            <h1>Revision</h1>
                            <card shadow type="secondary">
                                <b-row>
                                    <b-col cols="12" md="3">
                                        <b-form-input v-model="revision_semana" type="week"></b-form-input>
                                    </b-col>
                                    <b-col cols="12" md="2">
                                        <b-button style="width:100%" variant="outline-dark"  @click="buscarReporteRevision">Buscar</b-button>
                                    </b-col>
                                    <b-row cols="12" md="12" v-if="revision">

                                    </b-row>
                                </b-row>
                            </card>
                        </b-collapse>
                        <b-collapse v-model="showChofer" id="collapse-chofer">
                            <h1>Chofer</h1>
                        </b-collapse>
                    </card>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-xl-5 order-xl-2 ">
                    <card shadow type="secondary">
                        Fotografia
                        <b-row>
                            <b-img-lazy v-bind="mainProps" :src="model.perfil == null || model.perfil == undefined ? 'https://via.placeholder.com/600/1' : urlApi +'img/'+ model.perfil.split('.')[0]" alt="Image 5"></b-img-lazy>
                        </b-row>
                    </card>
                </div>
                <div class="col-xl-7 order-xl-1">
                    <card shadow type="secondary">
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h3 class="mb-0">Informacion</h3>
                            </div>
                            <div class="col-4 text-right">
                                <a href="#!" class="btn btn-sm btn-primary" @click="editar = !editar;editar ? editarState = 'Guardar' : alert=true">{{this.editarState}}</a>
                                <b-button size="sm" variant="outline-danger" @click="alert_eliminar = true">Eliminar</b-button>
                                <b-modal id="modal-multi-3" v-model="alert" size="sm" title="Modificar" ok-only @ok="modificar">
                                    <p class="my-1">¿Seguro que quieres modificar este vehiculo?</p>
                                </b-modal>
                                <b-modal id="modal-multi-3" v-model="alert_eliminar" size="sm" title="Eliminar" ok-only @ok="eliminar">
                                    <p class="my-1">¿Seguro que quieres eliminar este vehiculo?</p>
                                </b-modal>
                            </div>
                        </div>
                        <b-row style="font-size:12pt">
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Marca: </b> <div v-if="!editar">{{model.marca}}</div>
                                <b-form-input cols="6" v-if="editar" v-model="model.marca" placeholder="Marca" ></b-form-input>
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Linea: </b> <div v-if="!editar">{{model.linea}}</div>
                                <b-form-input cols="6" v-if="editar" v-model="model.linea" placeholder="Linea" ></b-form-input>
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Version: </b> <div v-if="!editar">{{model.version}}</div>
                                <b-form-input cols="6" v-if="editar" v-model="model.version" placeholder="Version" ></b-form-input>
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Modelo: </b> <div v-if="!editar">{{model.modelo}}</div>
                                <b-form-input cols="6" v-if="editar" v-model="model.modelo" placeholder="Modelo" ></b-form-input>
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Color: </b> <div v-if="!editar">{{model.color}}</div>
                                <b-form-input cols="6" v-if="editar" v-model="model.color" placeholder="Color" ></b-form-input>
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Serie: </b> <div v-if="!editar">{{model.serie}}</div>
                                <b-form-input cols="6" v-if="editar" v-model="model.serie" placeholder="Serie" ></b-form-input>
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Placas: </b> <div v-if="!editar">{{model.placas}}</div>
                                <b-form-input cols="6" v-if="editar" v-model="model.placas" placeholder="Placas" ></b-form-input>
                            </b-col>
                            <b-col cols="12">
                                <b>Chofer: </b> <b-link @click="chofer">{{model.idchofer == 0 ? 'Sin chofer asignado': nombre_chofer}}</b-link>
                                <b-button v-if="chofer !== ''" style="float:right" size="sm" variant="outline-dark" @click="asignar = true">Cambiar</b-button>
                                <b-modal v-model="asignar" title="Asignar chofer" @ok="asignarChofer">
                                    <b-form-input placeholder="Buscar" v-model="buscar" @keyup="buscarChofer"></b-form-input>
                                    <div class="item" v-for="res in resultados" :key="res.id" :id="'item-'+res.idchofer">
                                        <b-row>
                                            <b-col cols="8">{{res.nombre}}</b-col>
                                            <b-col cols="4">
                                                <b-button style="float:right" size="sm" v-b-modal.modal-agregar variant="outline-dark" @click="seleccionar(res.idchofer)">Seleccionar</b-button>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </b-modal>
                            </b-col>
                            <b-modal v-model="alerta" centered hide-footer title="Alerta">
                                <div class="d-block text-center">
                                    <h3>{{messageAlert}}</h3>
                                </div>
                                <b-button class="mt-3" variant="primary" block @click="alerta = false">Ok</b-button>
                        
                            </b-modal>
                        </b-row>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import {ID_COOKIE, URL_API} from "../constants/Constants";
  export default { 
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if(vm.$cookie.get(ID_COOKIE) === null) {
                    vm.$router.push('/');
            }
        });
    },
    name: 'user-profile',
    data() {
      return {
        fields: [
          {
            key: 'concepto',
            sortable: true
          },
          {
            key: 'cantidad',
            sortable: false
          },
          {
            key: 'tipo',
            sortable: true,
          },
          {
            key: 'semana',
            sortable: true,
          }
        ],
        alerta:false,
        total_ganancias:0,
        total_gastos:0,
        total_balance:0,
        alert_eliminar:false,
        alert:false,
        editar: false,
        editarState: 'Editar',
        fotos_semana:'',
        revision_semana:'',
        idCar: '',
        model: {
          marca: '',
          linea: '',
          version: '',
          modelo: '',
          color: '',
          serie: '',
          placas: '',
          tarjeta: '',
          factura: '',
          pedimento: '',
          seguro: '',
          chofer: '',
          idchofer: 0
        },
        collapsestatus: 'Ocultar',
        showDocumentos: false,
        showBalance: false,
        showFotografias: false,
        showRevision: false,
        showChofer: false,
        mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: 600,
          height: 400,
          class: 'my-5'
        },
        revision: false,
        imagenesrevision: false,
        imagenes: [],
        urlApi: '',
        asignar:false,
        buscar: '',
        seleccionado: false,
        buscando: false,
        resultados: [],
        nombre_chofer: '',
        messageAlert: '',
        balance: []
      }
    },
    methods: {
        buscarChofer() {
            if(this.buscar.length >= 3) {
                this.buscando = true;
                let formData = new FormData();
                formData.append('nombre', this.buscar);
                axios.post(URL_API + 'choferes/buscar-any' , 
                    formData,
                    {
                        headers: 
                        {
                        'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then((response) => {
                    console.log(response.data)
                    this.resultados = response.data;
                }).catch(function (error) {
                    console.log(error);
                });
            }else {
                this.buscando = false;
            }

        },
        chofer() {
            if(this.model.idchofer == 0) {
                this.asignar = true;
            }else {
                this.$router.push({name:'profile', params: {choferId : this.model.idchofer}});
            }
        },
        changeStatus(id = 0){
            if(id === 1) {
                this.showDocumentos = !this.showDocumentos;
                this.showBalance = false;
                this.showFotografias = false;
                this.showRevision = false;
                this.showChofer = false;
            }else if(id === 2) {
                this.showDocumentos = false;
                this.showBalance = !this.showBalance;
                this.showFotografias = false;
                this.showRevision = false;
                this.showChofer = false;
            }else if(id === 3) {
                this.showDocumentos = false;
                this.showBalance = false;
                this.showFotografias = !this.showFotografias;
                this.showRevision = false;
                this.showChofer = false;
            }else if(id === 4) {
                this.showDocumentos = false;
                this.showBalance = false;
                this.showFotografias = false;
                this.showRevision = !this.showRevision;
                this.showChofer = false;
            }else if(id === 5) {
                this.showDocumentos = false;
                this.showBalance = false;
                this.showFotografias = false;
                this.showRevision = false;
                this.showChofer = !this.showChofer;
            }
        },
        getData() {
            let formData = new FormData();
            formData.append('id', this.idCar);
            axios.post(URL_API + 'vehiculos/id', 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                if(response.data.status == 1) {
                    this.nombre_chofer = response.data.data.nombre;
                    this.model = response.data.data;
                    this.model.factura = response.data.data.factura != null && response.data.data.factura !== '' ? URL_API + 'img/'+ response.data.data.factura.split('.')[0] : '';
                    this.model.tarjeta = response.data.data.tarjeta_circulacion != null && response.data.data.tarjeta_circulacion !== '' ? URL_API + 'img/'+ response.data.data.tarjeta_circulacion.split('.')[0] : '';
                    this.model.seguro = response.data.data.seguro != null && response.data.data.seguro !== '' ? URL_API + 'img/'+ response.data.data.seguro.split('.')[0] : '';
                    this.model.pedimento = response.data.data.pedimento != null && response.data.data.pedimento !== '' ? URL_API + 'img/'+ response.data.data.pedimento.split('.')[0] : '';
                }
              console.log(response.data);
           }).catch(function (error) {
            console.log(error);
          });
        },
        checkWeek(type) {
            if(this.fotos_semana == this.revision_semana){
                switch(type){
                case 1:
                    this.buscarFotosRevision();
                    break;
                }
            }else {
                switch(type){
                case 1:
                    this.buscarFotosRevision();
                    break;
                }
            }
            
        },
        buscarReporteRevision() {
            let formData = new FormData();
            formData.append('week', this.revision_semana);
            formData.append('id', this.idCar);
            axios.post(URL_API + 'revisiones/week', 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                if(response.data.length > 0) {
                    this.urlApi = URL_API;
                    this.imagenes = JSON.parse(response.data[0].rutas_imagenes);
                    this.imagenesrevision = true;
                }else {
                    this.imagenes = [];
                    this.imagenesrevision = false;
                }
                
           }).catch(function (error) {
            console.log(error);
          });
        },
        buscarFotosRevision() {
            let formData = new FormData();
            formData.append('week', this.fotos_semana);
            formData.append('id', this.idCar);
            axios.post(URL_API + 'revisiones/week', 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                console.log(response.data);
                if(response.data.length > 0) {
                    this.urlApi = URL_API;
                    this.imagenes = JSON.parse(response.data[response.data.length - 1].rutas_imagenes);
                    this.imagenesrevision = true;
                }else {
                    this.imagenes = [];
                    this.imagenesrevision = false;
                }
                
           }).catch(function (error) {
            console.log(error);
          });
        },
        buscarBalanceRevision() {
            let formData = new FormData();
            formData.append('week', this.fotos_semana);
            formData.append('id', this.idCar);
            axios.post(URL_API + 'revisiones/week', 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                if(response.data.length > 0) {
                    this.urlApi = URL_API;
                    this.imagenes = JSON.parse(response.data[0].rutas_imagenes);
                    this.imagenesrevision = true;
                }else {
                    this.imagenes = [];
                    this.imagenesrevision = false;
                }
                
           }).catch(function (error) {
            console.log(error);
          });
        },
        modificar() {
            let formData = new FormData();
            formData.append('marca', this.model.marca);
            formData.append('linea', this.model.linea);
            formData.append('modelo', this.model.modelo);
            formData.append('version', this.model.version);
            formData.append('color', this.model.color);
            formData.append('serie', this.model.serie);
            formData.append('placas', this.model.placas);
            formData.append('id', this.idCar);
            axios.post(URL_API + 'vehiculos/update', 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                if(response.data['status'] == 1) {
                    this.editarState = "Editar";
                    this.alerta = true;
                    this.messageAlert = "Vehiculo modificado correctamente.";
                }else{
                    this.editar = !this.editar;
                    this.alerta = true;
                    this.messageAlert = "Ocurrio un error.";
                }              
            }).catch(function (error) {
                console.log(error);
            });
        },
        eliminar() {
            let formData = new FormData();
            formData.append('id', this.idCar);
            axios.post(URL_API + 'vehiculos/delete', 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                if(response.data['status'] == 1) {
                    this.alerta = true;
                    this.messageAlert = "Vehiculo elimidado correctamente.";
                    var self = this;
                    setTimeout(() => this.$router.push('flotilla') , 2000);
                }else{
                    this.alerta = true;
                    this.messageAlert = "Ocurrio un error al eliminar el vehiculo.";
                }              
            }).catch(function (error) {
                console.log(error);
            });
        },
        seleccionar(id) {
            this.seleccionado = id;
            var item = document.getElementById('item-'+id);
            this.clearSelected();
            item.setAttribute('style', 'background: #090909');
            console.log('item-'+id)
        },
        clearSelected() {
            this.resultados.forEach(element => {
                var item = document.getElementById('item-'+element.idchofer);
                item.setAttribute('style', 'background: #fff');
            });
        },
        asignarChofer() {
            if(this.seleccionado !== false) {
                let formData = new FormData();
                formData.append('id', this.idCar);
                formData.append('chofer', this.seleccionado);
                axios.post(URL_API + 'vehiculos/asignar', 
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then((response) => {
                    if(response.data['status'] == 1) {
                        this.model.idchofer = this.seleccionado;
                        this.nombre_chofer = response.data['result']['nombre'];
                        this.alerta = true;
                        this.messageAlert = "Chofer asignado correctamente.";
                    }else{
                        this.showMsgBoxTwo('Ocurrio un error al asignarlo');
                    }              
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        getBalance() {
            let formData = new FormData();
            formData.append('id', this.idCar);
            axios.post(URL_API + 'vehiculos/balance', 
                formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                console.log(response.data);
                
                if(response.data['status'] == 1) {
                    this.urlApi = URL_API;
                    this.balance = response.data.data;
                    this.total_ganancias = response.data['totales'].ganancias;
                    this.total_gastos = response.data['totales'].gastos;
                    this.total_balance = this.total_ganancias - this.total_gastos;
                }
            }).catch(function (error) {
                this.showMsgBoxTwo('Ocurrio un error');
                console.log(error);
            });
        },
    },
    beforeMount() {
        this.idCar = this.$route.params.carId;
        this.getData();
        this.getBalance();
    }
  };
</script>
<style>
.image-overlay {
  width: 100px;
}

.item, .selected{
    padding: 10px
}

.selected{
    background: #090909;
}

</style>
