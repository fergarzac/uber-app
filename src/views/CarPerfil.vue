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
                                    <b-col cols="12" md="auto">
                                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
                                    </b-col>
                                    <b-col cols="12" md="auto">
                                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
                                    </b-col>
                                    <b-col cols="12" md="auto">
                                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
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
                                    <b-col cols="12" md="auto">
                                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
                                    </b-col>
                                    <b-col cols="12" md="auto">
                                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
                                    </b-col>
                                    <b-col cols="12" md="auto">
                                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
                                    </b-col>
                                </b-row>
                            </card>
                        </b-collapse>
                        <b-collapse v-model="showRevision" id="collapse-revision">
                            <h1>Revision</h1>
                            <card shadow type="secondary">
                                <b-row>
                                    <b-col cols="12" md="3">
                                        <b-form-input v-model="semana" type="week"></b-form-input>
                                    </b-col>
                                    <b-col cols="12" md="2">
                                        <b-button style="width:100%" variant="outline-dark">Buscar</b-button>
                                    </b-col>
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
        semana:'',
        idCar: '',
        model: {
          marca: '',
          linea: '',
          version: '',
          modelo: '',
          color: '',
          serie: '',
          placa: '',
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
        }
      }
    },
    methods: {
        changeStatus(id){
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
            axios.post(URL_API + 'vehiculos/id', 
            {
                'id' : this.idCar
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            ).then((response) => {
                if(response.data.status == 1) {
                    this.model = response.data.data
                }
              console.log(response.data);
           }).catch(function (error) {
            console.log(error);
          });
        }
    },
    beforeMount() {
        console.log(this.$route.params.carId);
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
