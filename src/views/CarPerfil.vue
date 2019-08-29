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
                            <b-img-lazy v-bind="mainProps" :src="getImageUrl(88)" alt="Image 5"></b-img-lazy>
                        </b-row>
                    </card>
                </div>
                <div class="col-xl-7 order-xl-1">
                    <card shadow type="secondary">
                        Información
                        <b-row style="font-size:12pt">
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Marca: </b> {{model.marca}}
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Linea: </b> {{model.marca}}
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Version: </b> {{model.marca}}
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Modelo: </b> {{model.marca}}
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Color: </b> {{model.marca}}
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Serie: </b> {{model.marca}}
                            </b-col>
                            <br />
                            <b-col cols="12" style="margin-bottom: 20px">
                                <b>Placas: </b> {{model.marca}}
                            </b-col>
                            <b-col cols="12">
                                <b>Chofer: </b> <b-link to="chofer" >{{model.idchofer == 0 ? 'Sin chofer asignado': model.chofer}}</b-link>
                            </b-col>
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
          placa: '',
          tarjeta: '',
          factura: '',
          pedimento: '',
          seguro: '',
          chofer: 'Fernando garza',
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
        urlApi: ''
      }
    },
    methods: {
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
        getImageUrl(imageId) {
            const { width, height } = this.mainProps
            return `https://picsum.photos/${width}/${height}/?image=${imageId}`
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
                    this.model = response.data.data
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
        }
    },
    beforeMount() {
        this.idCar = this.$route.params.carId;
        this.getData();
    }
  };
</script>
<style>
.image-overlay {
  width: 100px;
}
</style>
