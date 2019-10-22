<template>
    <div>
        <base-header type="gradient-dark" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
        </base-header>

        <div class="container-fluid mt--7">
            <b-modal size="lg" id="modal-agregar" v-model="agregarModal" title="Agregar Vehiculo" @ok="agregarChofer">
                <b-row>
                     <div class="col-sm-12 col-md-4 order-xl-1">
                         <b-col cols="12">
                            <b-img src="https://picsum.photos/125/125/?image=58" style="width:50%" id="foto_perfil" rounded alt="Rounded image"></b-img>
                        </b-col>
                        <hr />
                        <b-col cols="12">
                            <b-form-file
                                id="fotoperfil"
                                ref="fotoperfil"
                                v-model="fotoperfil"
                                accept="image/*"
                                style="display:none;"
                                @change="changeFoto"
                            ></b-form-file>
                            <b-button size="sm" v-b-modal.modal-agregar variant="outline-dark" onclick="document.getElementById('fotoperfil').click();">Seleccionar Imagen</b-button>
                        </b-col>
                     </div>
                    <div class="col-sm-12 col-md-8 order-xl-2">
                        <card shadow type="secondary">
                            <b-row class="my-1">
                                <b-col sm="12">
                                    <b-form-input id="input-small" maxlength="" v-model="nombre" placeholder="Nombre" :state="nombrestate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                    <b-form-input id="input-small" v-model="direccion" placeholder="Direccion" :state="direccionstate"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="6">
                                    <b-form-input type="number"  id="input-small" v-model="telefono1" placeholder="Telefono 1" :state="telefono1state"></b-form-input>
                                </b-col>
                                <b-col sm="6">
                                    <b-form-input type="number" id="input-small" v-model="telefono2" placeholder="Telefono 2" :state="telefono2state" ></b-form-input>
                                </b-col>
                                
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="6">
                                    <b-form-input id="input-small" v-model="licencia" placeholder="No.Licencia" :state="licenciastate"></b-form-input>
                                </b-col>
                                <b-col sm="6">
                                <b-form-input id="input-small" tyoe v-model="fianza" placeholder="Monto Fianza" :state="fianzastate" @keypress="isNumber($event)"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                <b-form-input id="input-small" v-model="referencia1" placeholder="Referencia 1" :state="referencia1state"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                <b-form-input id="input-small" v-model="referencia2" placeholder="Referencia 2" :state="referencia2state"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="12">
                                <b-form-input id="input-small" v-model="iduber" placeholder="ID Uber" :state="iduberstate"></b-form-input>
                                </b-col>
                            </b-row>
                        </card>
                    </div>
                </b-row>
            </b-modal>
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <div class="col text-left">
                                <h3 class="mb-0">Choferes</h3>
                            </div>
                            
                            <div class="col text-right">
                                <b-row class="my-1">
                                    <b-col sm="4">
                                        <b-form-input id="input-small"  v-model="busqueda" size="sm" placeholder="Buscar" @keyup="buscarChoferes"></b-form-input>
                                    </b-col>
                                    <hr />
                                    <b-col sm="4">
                                        <b-button size="sm" v-b-modal.modal-agregar variant="outline-dark">Agregar</b-button>
                                    </b-col>
                                </b-row>
                                    
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row icon-examples">
                                <div class="col-lg-3 col-md-6" v-for="chofer in buscar" :key="chofer.idchofer">
                                    <Chofer v-bind:titulo="chofer.nombre" v-bind:id="chofer.idchofer" v-bind:img="chofer.foto_perfil" />
                                </div>
                            </div>
                        </div>
                        <b-modal v-model="alerta" centered hide-footer title="Alerta">
                            <div class="d-block text-center">
                                <h3>{{messageAlert}}</h3>
                            </div>
                            <b-button class="mt-3" variant="primary" block @click="alerta = false">Ok</b-button>
                                            
                        </b-modal>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import Chofer from '@/components/Chofer';
  import Car from '@/components/Car';
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
    components: {
        Chofer
    },
    beforeMount: function(){
        this.buscar = this.flota
    },
    data() {
      return {
        alerta: false,
        messageAlert: '',
        currentPage: 1,
        perPage:8,
        fotoperfil: null,
        agregarModal: false,
        busqueda: '',
        choferes: [
            {name: 'Fernando'},
            {name: 'Alfonso'},
            {name: 'Jose Luis'},
            {name: 'Marco'},
            {name: 'Miguel'},
        ],
        buscar: [],
        nombre: '',
        direccion: '',
        telefono1: '',
        telefono2: '',
        referencia1: '',
        referencia2: '',
        fianza: '',
        licencia: '',
        iduber: ''
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
      changeFoto(event) {
        this.fotoperfil = event.target.files[0];
        var reader = new FileReader();
        var img = document.getElementById('foto_perfil');
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      },
      buscarChoferes() {
          if(this.busqueda.length>0) {
              var self = this
              this.buscar = this.flota.filter(function(data) {
                return data.name.toUpperCase().includes(self.busqueda.toUpperCase());
            });
          }else {
              this.buscar = this.flota;
          }
      },
      agregarChofer() {
            if(this.nombrestate && this.direccionstate && this.telefono1state && this.telefono2state && this.licenciastate && this.referencia1state && this.referencia2state && this.fianzastate) {
                let formData = new FormData();
                formData.append('fotoperfil', this.fotoperfil);
                formData.append('nombre', this.nombre);
                formData.append('direccion', this.direccion);
                formData.append('telefono_1', this.telefono1);
                formData.append('telefono_2', this.telefono2);
                formData.append('no_licencia', this.licencia);
                formData.append('monto_fianza', this.fianza);
                formData.append('referencia_1', this.referencia1);
                formData.append('referencia_2', this.referencia2);
                formData.append('id_uber', this.iduber);
                axios.post(URL_API + 'choferes/add' , 
                    formData,
                    {
                        headers: 
                        {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then((response) => {
                    console.log(response.data);
                    if(response.data.status == 1) {
                        this.nombre = '',
                        this.direccion = '',
                        this.telefono1 = '',
                        this.telefono2 = '',
                        this.referencia1 = '',
                        this.referencia2 = '',
                        this.fianza = '',
                        this.licencia = '',
                        this.iduber = ''
                        this.getChoferes();
                        this.messageAlert = 'Chofer agregado.';
                        this.alerta = true;
                    }else {
                        this.agregarModal = true;
                        this.messageAlert = 'Error al agregar al chofer.';
                        this.alerta = true;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }else {
                var mensaje = "Verifica que todos los campos esten llenos";
                if(!this.telefono1state) {
                    mensaje = "Falta llenar el telefono 1 o tiene más de 10 digitos";
                }else if(!this.telefono2state) {
                    mensaje = "Falta llenar el telefono 2 o tiene más de 10 digitos";
                }
                this.messageAlert = mensaje;
                this.alerta = true;
            }
      },
      getChoferes() {
          axios.get(URL_API + 'choferes/all').then((response) => {
              console.log(response.data);
              this.choferes = response.data;
              this.buscarChofer();
           }).catch(function (error) {
            console.log(error);
          });
      },
      buscarChofer(del = 0) {
          if(this.busqueda.length>0) {
              var self = this
              this.buscar = this.choferes.filter(function(data) {
                return data.marca.toUpperCase().includes(self.busqueda.toUpperCase());
            });
          }else {
              this.buscar = this.choferes.slice(del,(parseInt(del) + parseInt(this.perPage)));
          }
      },
    },
    computed: {
      nombrestate() {
        return this.nombre.length > 0 ? true : false
      },
      direccionstate() {
        return this.direccion.length > 0 ? true : false
      },
      telefono1state() {
        return this.telefono1.length > 0 && this.telefono1.length < 11 ? true : false
      },
      telefono2state() {
        return this.telefono2.length > 0 && this.telefono2.length < 11 ? true : false
      },
      referencia1state() {
        return this.referencia1.length > 0 ? true : false
      },
      referencia2state() {
        return this.referencia2.length > 0 ? true : false
      },
      licenciastate() {
        return this.licencia.length > 0 ? true : false
      },
      fianzastate() {
        return this.fianza.length > 0 ? true : false
      },
      iduberstate() {
        return this.iduber.length > 0 ? true : false
      },
      rows() {
        return this.flota.length
      },
      
    },
    beforeMount() {
        this.getChoferes();
    }
  };
</script>
<style></style>
