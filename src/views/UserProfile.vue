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
                                        <b-img :src="model.perfil == '' || model.perfil == undefined ? 'https://via.placeholder.com/600/1' : model.perfil" style="height:150px" id="perfil" class="rounded-circle"  alt="Rounded image"></b-img>
                          
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
                                    <b-button style="width:100%" variant="outline-dark" v-b-modal.modal-perfil>Cambiar Foto</b-button>
                                    <b-modal
                                            id="modal-perfil"
                                            ref="modal"
                                            title="Elige o captura la imagen de perfil"
                                            @ok="uploadImage(1)"
                                    >
                                        <center><b-img :src="model.foto_perfil == '' || model.foto_perfil == undefined ? 'https://via.placeholder.com/600/1' : model.foto_perfil" style="width:150px; margin-bottom: 10px" id="foto_perfil"  alt="Rounded image"></b-img></center>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotoperfil').click();">Cambiar Foto</b-button>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotoperfil_capture').click();">Tomar Foto</b-button>
                                        <b-form-file
                                                id="fotoperfil"
                                                ref="fotoperfil"
                                                v-model="model.foto_perfil"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="changeFoto"
                                        ></b-form-file>
                                        <b-form-file
                                                capture
                                                id="fotoperfil_capture"
                                                ref="fotoperfil_capture"
                                                v-model="model.foto_perfil"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="takeFoto"
                                        ></b-form-file>
                                    </b-modal>

                                </div>
                            </div>
                            <hr />
                            <h4>Fotografias</h4>
                            <div class="row" style="margin-top:10px">
                                <div class="col-md-6">
                                    <b-button style="width:100%;height:100%;font-size:8pt" variant="outline-dark" v-b-modal.modal-documentos>Documentos</b-button>
                                    <b-modal
                                            id="modal-documentos"
                                            ref="modal"
                                            title="Elige o captura la imagen del documento"
                                            @ok="uploadImage(2)"
                                    >
                                        <center><b-img :src="model.foto_id == '' || model.foto_id == undefined ? 'https://via.placeholder.com/600/1' : model.foto_id" style="width:150px; margin-bottom: 10px" id="foto_documentos"  alt="Rounded image"></b-img></center>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotodocumentos').click();">Cambiar Foto</b-button>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotodocumentos_capture').click();">Tomar Foto</b-button>
                                        <b-form-file
                                                id="fotodocumentos"
                                                ref="fotodocumentos"
                                                v-model="model.foto_id"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="changeFotoDocumentos"
                                        ></b-form-file>
                                        <b-form-file
                                                capture
                                                id="fotodocumentos_capture"
                                                ref="fotodocumentos_capture"
                                                v-model="model.foto_id"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="takeFotoDocumentos"
                                        ></b-form-file>
                                    </b-modal>
                                </div>
                                <div class="col-md-6">
                                    <b-button style="width:100%;height:100%;font-size:8pt" variant="outline-dark" v-b-modal.modal-licencia>Licencia</b-button>
                                    <b-modal
                                            id="modal-licencia"
                                            ref="modal"
                                            title="Elige o captura la imagen de la licencia"
                                            @ok="uploadImage(3)"
                                    >
                                        <center><b-img :src="model.foto_licencia == '' || model.foto_licencia == undefined ? 'https://via.placeholder.com/600/1' : model.foto_licencia" style="width:150px; margin-bottom: 10px" id="foto_licencia"  alt="Rounded image"></b-img></center>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotolicencia').click();">Cambiar Foto</b-button>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotolicencia_capture').click();">Tomar Foto</b-button>
                                        <b-form-file
                                                id="fotolicencia"
                                                ref="fotolicencia"
                                                v-model="model.foto_licencia"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="changeFotoLicencia"
                                        ></b-form-file>
                                        <b-form-file
                                                capture
                                                id="fotolicencia_capture"
                                                ref="fotolicencia_capture"
                                                v-model="model.foto_licencia"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="takeFotoLicencia"
                                        ></b-form-file>
                                    </b-modal>
                                </div>
                            </div>
                            <div class="row" style="margin-top:10px">
                                <div class="col-md-6">
                                    <b-button style="width:100%;height:100%;font-size:8pt" variant="outline-dark" v-b-modal.modal-casa>Casa</b-button>
                                    <b-modal
                                            id="modal-casa"
                                            ref="modal"
                                            title="Elige o captura la imagen de la casa"
                                            @ok="uploadImage(4)"
                                    >
                                        <center><b-img :src="model.foto_casa == '' || model.foto_casa == undefined ? 'https://via.placeholder.com/600/1' : model.foto_casa" style="width:150px; margin-bottom: 10px" id="foto_casa"  alt="Rounded image"></b-img></center>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotocasa').click();">Cambiar Foto</b-button>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotocasa_capture').click();">Tomar Foto</b-button>
                                        <b-form-file
                                                id="fotocasa"
                                                ref="fotocasa"
                                                v-model="model.foto_casa"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="changeFotoCasa"
                                        ></b-form-file>
                                        <b-form-file
                                                capture
                                                id="fotocasa_capture"
                                                ref="fotocasa_capture"
                                                v-model="model.foto_casa"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="takeFotoCasa"
                                        ></b-form-file>
                                    </b-modal>
                                </div>
                                <div class="col-md-6">
                                    <b-button style="width:100%;height:100%;font-size:8pt" variant="outline-dark" v-b-modal.modal-contrato>Contrato</b-button>
                                    <b-modal
                                            id="modal-contrato"
                                            ref="modal"
                                            title="Elige o captura la imagen del contrato"
                                            @ok="uploadImage(5)"
                                    >
                                        <center><b-img :src="model.foto_contrato == '' || model.foto_contrato == undefined ? 'https://via.placeholder.com/600/1' : model.foto_contrato" style="width:150px; margin-bottom: 10px" id="foto_contrato"  alt="Rounded image"></b-img></center>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotocontrato').click();">Cambiar Foto</b-button>
                                        <b-button style="width:100%" variant="outline-dark" onclick="document.getElementById('fotocontrato_capture').click();">Tomar Foto</b-button>
                                        <b-form-file
                                                id="fotocontrato"
                                                ref="fotocontrato"
                                                v-model="model.foto_contrato"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="changeFotoContrato"
                                        ></b-form-file>
                                        <b-form-file
                                                capture
                                                id="fotocontrato_capture"
                                                ref="fotocontrato_capture"
                                                v-model="model.foto_contrato"
                                                accept="image/*"
                                                style="display:none;"
                                                @change="takeFotoContrato"
                                        ></b-form-file>
                                    </b-modal>
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
            if(vm.$cookie.get(ID_COOKIE) === null ) {
                    vm.$router.push('/');
            }else if(vm.$route.params.choferId == undefined  || vm.$route.params.choferId == null || vm.$route.params.choferId == '') {
                vm.$router.push('/choferes');
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
          id_uber: '',
          foto_id: '',
          foto_perfil: '',
          foto_licencia: '',
          foto_casa: '',
          foto_contrato: '',
        },
        idChofer: '',
      }
    },
    methods: {
        changeFoto(event) {
            this.model.fotoperfil = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_perfil');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        takeFoto(event) {
            this.model.foto_id = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_perfil');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoDocumentos(event) {
            this.model.foto_id = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_documentos');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        takeFotoDocumentos(event) {
            this.model.foto_documentos = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_documentos');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoLicencia(event) {
            this.model.foto_licencia = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_licencia');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        takeFotoLicencia(event) {
            this.model.foto_licencia = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_licencia');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoCasa(event) {
            this.model.foto_casa = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_casa');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        takeFotoCasa(event) {
            this.model.foto_casa = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_casa');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        changeFotoContrato(event) {
            this.model.foto_contrato = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_contrato');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        takeFotoContrato(event) {
            this.model.foto_contrato = event.target.files[0];
            var reader = new FileReader();
            var img = document.getElementById('foto_contrato');
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        uploadImage(tipo) {
            let formData = new FormData();
            var data = '';
            var type = '';
            switch (tipo) {
                case 1:
                    type = 'foto_perfil';
                    data = this.model.foto_perfil;
                    break;
                case 2:
                    type = 'foto_id';
                    data = this.model.foto_id;
                    break;
                case 3:
                    type = 'foto_licencia';
                    data = this.model.foto_licencia;
                    break;
                case 4:
                    type = 'foto_casa';
                    data = this.model.foto_casa;
                    break;
                case 5:
                    type = 'foto_contrato';
                    data = this.model.foto_contrato;
                    break;
            }
            formData.append(type, data);
            axios.post(URL_API + 'choferes/upload' ,
                formData,
                {
                    headers:
                        {
                            'Content-Type': 'multipart/form-data'
                        }
                }
            ).then((response) => {
                console.log(response.data)
            }).catch(function (error) {
                console.log(error);
            });
        },

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
