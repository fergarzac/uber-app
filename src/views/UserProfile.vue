<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     >
            <!-- Mask -->
            <span class="mask bg-gradient-dark opacity-8"></span>
            <!-- Header container -->
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">

                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <b-img :src="perfil" style="height:150px" id="foto_perfil" class="rounded-circle"  alt="Rounded image"></b-img>
                          
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            <div class="d-flex justify-content-between">
                            </div>
                        </div>
                        <div class="card-body pt-0 pt-md-4">
                            <div class="row" style="margin-top:60px">
                                <div class="col-md-6 offset-md-3">
                                    <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotoperfil').click();">Cambiar Foto</b-button>
                                    <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotoperfil_capture').click();">Tomar Foto</b-button>
                                    <b-form-file
                                        id="fotoperfil"
                                        ref="fotoperfil"
                                        v-model="fotoperfil"
                                        accept="image/*"
                                        style="display:none;"
                                    ></b-form-file>
                                    <b-form-file 
                                        capture
                                        id="fotoperfil_capture"
                                        ref="fotoperfil_capture"
                                        v-model="fotoperfil_capture"
                                        accept="image/*"
                                        style="display:none;"
                                    ></b-form-file>
                                </div>
                            </div>
                            <hr />
                            <h4>Fotografias</h4>
                            <div class="row" style="margin-top:10px">
                                <div class="col-md-6">
                                    <b-button style="width:100%;height:100%;font-size:8pt" variant="outline-dark">Documentos</b-button>
                                </div>
                                <div class="col-md-6">
                                    <b-button style="width:100%;height:100%;font-size:8pt" variant="outline-dark">Licencia</b-button>
                                </div>
                            </div>
                            <div class="row" style="margin-top:10px">
                                <div class="col-md-6">
                                    <b-button style="width:100%;height:100%;font-size:8pt" variant="outline-dark">Casa</b-button>
                                </div>
                                <div class="col-md-6">
                                    <b-button style="width:100%;height:100%;font-size:8pt" variant="outline-dark">Contrato</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Chofer</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <!-- <a href="#!" class="btn btn-sm btn-primary">Editar</a> -->
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Información</h6>
                                <div class="pl-lg-4">
                                    <b-row style="font-size:12pt">
                                        <b-col cols="12" style="margin-bottom: 20px">
                                            <b>Fecha: </b> {{model.fecha}}
                                        </b-col>
                                        <br />
                                        <b-col cols="12" style="margin-bottom: 20px">
                                            <b>Nombre: </b> {{model.nombre}}
                                        </b-col>
                                        <br />
                                        <b-col cols="12" style="margin-bottom: 20px">
                                            <b>Direccion: </b> {{model.direccion}}
                                        </b-col>
                                        <br />
                                        <b-col cols="12" style="margin-bottom: 20px">
                                            <b>Telefono 1: </b> {{model.telefono_1}}
                                        </b-col>
                                        <br />
                                        <b-col cols="12" style="margin-bottom: 20px">
                                            <b>Telefono 2: </b> {{model.telefono_2}}
                                        </b-col>
                                        <br />
                                        <b-col cols="12" style="margin-bottom: 20px">
                                            <b>No. Licencia: </b> {{model.no_licencia}}
                                        </b-col>
                                        <br />
                                        <b-col cols="12" style="margin-bottom: 20px">
                                            <b>Monto Fianza: </b> {{model.monto_fianza}}
                                        </b-col>
                                        <br />
                                        <b-col cols="12" style="margin-bottom: 20px">
                                            <b>Referencia: </b> {{model.referencia_1}}
                                        </b-col>
                                        <b-col cols="12">
                                            <b>Referencia: </b>{{model.referencia_2}}
                                        </b-col>
                                        <b-col cols="12">
                                            <b>ID Uber: </b> <b-link to="chofer" >{{model.id_uber}}</b-link>
                                        </b-col>
                                    </b-row>
                                </div>

                            </form>
                        </template>
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
        model: {
          fecha: '',
          nombre: '',
          direccion: '',
          telefono_1: '',
          telefono_2: '',
          no_licencia: '',
          monto_fianza: '',
          referencia_1: '',
          referencia_2: '',
          iduber: ''
        },
        idChofer: '',
        perfil: '',
        fotoperfil: '',
        fotoperfil_capture: ''
      }
    },
    methods: {
        getData() {
            axios.post(URL_API + 'choferes/id', 
            {
                'id' : this.idChofer
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            ).then((response) => {
                if(response.data.status == 1) {
                    this.model = response.data.data;
                    if(this.model.foto_id !== null && this.model.foto_id !== '') {
                        axios.get(URL_API + 'img/' + this.model.foto_id.split('.')[0]).then((response) => {
                            this.perfil = URL_API + 'img/' + this.model.foto_id.split('.')[0];
                        }).catch((error) => {
                            this.perfil = 'https://via.placeholder.com/600/1';
                        });
                    }else{
                        this.perfil = 'https://via.placeholder.com/600/1';
                    }
                }
           }).catch(function (error) {
            console.log(error);
          });
        }
    },
    beforeMount() {
        this.idChofer = this.$route.params.choferId;
        this.getData();
    }
  };

</script>
<style>
.carta:hover {
    background: #000;
}
</style>
